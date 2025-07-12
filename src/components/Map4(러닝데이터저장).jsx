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

function Map() {
  const mapCon = useRef(null); // 지도 DOM
  const mapRef = useRef(null); // 지도 객체
  const markerRef = useRef(null); // 마커 객체
  const [userPosition, setUserPosition] = useState(null); // 현재 위치 상태
  const [userLocationData, setUserLocationData] = useState([]); // 사용자 위치 업데이트 데이터

  // ✅ GPS 위치 추적 → 상태 업데이트만
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

  // ✅ 지도 및 마커 렌더링/업데이트
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
      });
    } else {
      markerRef.current?.setPosition(userPosition);
      mapRef.current?.setCenter(userPosition);
    }
  }, [userPosition]);

  // ✅ 개발용 키보드 이동 (↑↓←→)
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
    if (!userPosition) return;

    // 새 위치를 배열에 추가
    setUserLocationData((prev) => [...prev, userPosition]);

    // 콘솔 확인
    console.log("📍 이동 경로 배열:", userLocationData);
  }, [userPosition]);

  return (
    <Wrapper>
      <MapContainer ref={mapCon} />
    </Wrapper>
  );
}

export default Map;
