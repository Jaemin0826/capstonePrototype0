import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--Gray3);
  position: absolute;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function Map() {
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [userPosition, setUserPosition] = useState(null);

  useEffect(() => {
    const { naver } = window;
    if (!naver) return;

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const userLocation = new naver.maps.LatLng(latitude, longitude);

        if (!mapRef.current) {
          mapRef.current = new naver.maps.Map("map", {
            center: userLocation,
            zoom: 17,
            customStyleId: "94230366-adba-4e0e-ac5a-e82a0e137b5e",
          });

          markerRef.current = new naver.maps.Marker({
            map: mapRef.current,
            position: userLocation,
          });
        } else {
          markerRef.current.setPosition(userLocation);
          mapRef.current.setCenter(userLocation);
        }

        setUserPosition(userLocation);
      },
      (err) => {
        console.error("위치를 받아올 수 없습니다:", err);
      },
      {
        maximumAge: 1000,
        timeout: 10000,
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  useEffect(() => {
    const moveAmount = 0.0001;

    const handleKeyDown = (event) => {
      if (!userPosition || !mapRef.current || !markerRef.current) return;

      const lat = userPosition.lat();
      const lng = userPosition.lng();

      let newLat = lat;
      let newLng = lng;

      switch (event.key) {
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

      const newPosition = new window.naver.maps.LatLng(newLat, newLng);

      markerRef.current.setPosition(newPosition);
      mapRef.current.setCenter(newPosition);
      setUserPosition(newPosition);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [userPosition]);

  return (
    <Wrapper>
      <MapContainer id="map" />
    </Wrapper>
  );
}

export default Map;
