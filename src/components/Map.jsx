/* global naver */
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--Gray9);
  position: absolute;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function Map({ isRunning, setPathData, isPaused }) {
  const mapCon = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const polylineRef = useRef([]);
  const polygonRef = useRef(null);

  const [userPosition, setUserPosition] = useState(null);
  const [userLocationData, setUserLocationData] = useState([]);

  // 🌍 실제 위치 추적
  useEffect(() => {
    if (!navigator.geolocation) return;

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserPosition(new naver.maps.LatLng(latitude, longitude));
      },
      (error) => {
        console.error("위치정보 가져오기 실패:", error);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 1000,
        timeout: 10000,
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  // 🗺️ 맵 초기화 및 마커 업데이트
  useEffect(() => {
    if (!userPosition || !mapCon.current) return;

    if (!mapRef.current) {
      mapRef.current = new naver.maps.Map(mapCon.current, {
        center: userPosition,
        zoom: 17,
        mapTypeId: naver.maps.MapTypeId.NORMAL,
        gl: true,
      });

      markerRef.current = new naver.maps.Marker({
        position: userPosition,
        map: mapRef.current,
        icon: {
          url: "/Icon/marker.png",
          size: new naver.maps.Size(48, 48),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(24, 24),
          scaledSize: new naver.maps.Size(48, 48),
        },
      });
    } else {
      markerRef.current?.setPosition(userPosition);
      mapRef.current?.setCenter(userPosition);
    }
  }, [userPosition]);

  // 🛑 러닝 종료 시 폐곡선 폴리곤 그리기
  useEffect(() => {
    if (isRunning || userLocationData.length < 3 || !mapRef.current) return;

    if (polygonRef.current) {
      polygonRef.current.setMap(null);
    }

    const polygon = new naver.maps.Polygon({
      map: mapRef.current,
      paths: [userLocationData],
      fillColor: "rgba(130, 165, 255, 0.2)",
      fillOpacity: 0.6,
      strokeColor: "#4263eb",
      strokeOpacity: 1,
      strokeWeight: 2,
    });

    polygonRef.current = polygon;
  }, [isRunning]);

  // 🟢 실시간 위치 업데이트 + 폴리라인 그리기
  useEffect(() => {
    if (!userPosition || !isRunning || isPaused || !mapRef.current) return;

    setUserLocationData((prev) => {
      const updatedPath = [...prev, userPosition];

      polylineRef.current.forEach((line) => line.setMap(null));
      polylineRef.current = [];

      const bgLine = new naver.maps.Polyline({
        path: updatedPath,
        map: mapRef.current,
        strokeColor: "#ffffff",
        strokeWeight: 7,
        strokeOpacity: 1,
        strokeStyle: "solid",
      });

      const fgLine = new naver.maps.Polyline({
        path: updatedPath,
        map: mapRef.current,
        strokeColor: "#82A5FF",
        strokeWeight: 3,
        strokeOpacity: 1,
        strokeStyle: "solid",
      });

      polylineRef.current = [bgLine, fgLine];

      console.log("경로 배열:", updatedPath);
      setPathData?.(updatedPath);
      return updatedPath;
    });
  }, [userPosition, isRunning, isPaused]);

  return (
    <Wrapper>
      <MapContainer ref={mapCon} />
    </Wrapper>
  );
}

export default Map;
