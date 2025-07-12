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

function Map({ isRunning }) {
  const mapCon = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const polylineRef = useRef([]);

  const [userPosition, setUserPosition] = useState(null);
  const [userLocationData, setUserLocationData] = useState([]);

  useEffect(() => {
    if (!navigator.geolocation) return;

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserPosition(new naver.maps.LatLng(latitude, longitude));
      },
      (error) => {
        console.error("위치정보 가져오기 실패띠.", error);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 1000,
        timeout: 10000,
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  useEffect(() => {
    if (!userPosition || !mapCon.current) return;

    if (!mapRef.current) {
      mapRef.current = new naver.maps.Map(mapCon.current, {
        center: userPosition,
        zoom: 17,
        mapTypeId: naver.maps.MapTypeId.NORMAL,
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

  useEffect(() => {
    const moveAmount = 0.0001;

    const handleKeyDown = (e) => {
      if (!userPosition) return;

      const lat = userPosition.lat();
      const lng = userPosition.lng();

      let newLat = lat;
      let newLng = lng;

      switch (e.key) {
        case "ArrowUp":
          newLat += moveAmount;
          break;
        case "ArrowDown":
          newLat -= moveAmount;
          break;
        case "ArrowLeft":
          newLng -= moveAmount;
          break;
        case "ArrowRight":
          newLng += moveAmount;
          break;
        default:
          return;
      }

      setUserPosition(new naver.maps.LatLng(newLat, newLng));
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [userPosition]);

  useEffect(() => {
    if (!isRunning || !userPosition || !mapRef.current) return;

    setUserLocationData((prev) => {
      const updatedPath = [...prev, userPosition];

      // 기존 폴리라인 지우기
      polylineRef.current.forEach((line) => line.setMap(null));

      polylineRef.current = [];

      // ✅ 배경선 (두껍고 투명)
      const bgLine = new naver.maps.Polyline({
        path: updatedPath,
        map: mapRef.current,
        strokeColor: "#ffffff",
        strokeWeight: 7,
        strokeOpacity: 1,
        strokeStyle: "solid",
      });

      // ✅ 앞선 (얇고 진함)
      const fgLine = new naver.maps.Polyline({
        path: updatedPath,
        map: mapRef.current,
        strokeColor: "#82A5FF",
        strokeWeight: 3,
        strokeOpacity: 1,
        strokeStyle: "solid",
      });

      polylineRef.current = [bgLine, fgLine];

      console.log("경로 배열:", userLocationData);
      console.log("경로 배열:", updatedPath);
      return updatedPath;
    });
  }, [userPosition]);

  return (
    <Wrapper>
      <MapContainer ref={mapCon} />
    </Wrapper>
  );
}

export default Map;
