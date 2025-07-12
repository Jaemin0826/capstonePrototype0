/* global naver */
import { useEffect, useRef } from "react";
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
  const markerRef = useRef(null); // 사용자 위치 마커

  useEffect(() => {
    if (navigator.geolocation) {
      const watchUserPosition = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userPosition = new naver.maps.LatLng(latitude, longitude);

          if (!mapRef.current && mapCon.current) {
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
      return () => navigator.geolocation.clearWatch(watchUserPosition);
    }
  }, []);

  return (
    <Wrapper>
      <MapContainer ref={mapCon} />
    </Wrapper>
  );
}

export default Map;
