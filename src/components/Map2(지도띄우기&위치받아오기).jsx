/* global naver */
// 위에 작성한건 naver가 타입스크립트로 작성이 어쩌구 해서 자꾸 빨간줄이 그어지는게 굉장히 굉장히 거슬려서 끄기위해 추가한거
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
  const mapCon = useRef(null); // 아래의 스타일 컴포넌트중 맵콘테이너를 mapCon이라는 이름으로 지정
  // DOM 접근을 위한 ref / 아래 리턴함수에서 맵콘테이너가 랜더링 되기전에 맵을 출력하려면 오류가 생겨서 사용
  const [userLocation, setUserLocation] = useState(null);

  //왜 유즈 이펙트? -> 기존 바닐라자바스크립트나 제이쿼리는 html요소가 다 랜더링 된 뒤에 작동하는데 리액트는 안그렇게 때문에 컴포넌트가 랜더링 되고 난 뒤에 실행되는 유즈 이팩트 안에 넣어서 사용 (지도를 넣을 컴포넌트가 랜더링 되어야 지도를 출력할 수 있으니까)
  useEffect(() => {
    //사용자 위치 가져오는 유즈이팩트 userLocation을 사용자의 위도,경도로 설정
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          console.log("사용자 위치:", latitude, longitude);
        },
        (error) => {
          console.error("위치정보 가져오기 실패띠.", error);
        }
      );
    }
  }, []);

  useEffect(() => {
    // 지도 띄우는 유즈이펙트
    if (mapCon.current && userLocation) {
      //맵콘테이너가 랜더링 되어서 존재, 사용자 위도경도 정보 가져오기를 만족시
      new naver.maps.Map(mapCon.current, {
        center: new naver.maps.LatLng(
          userLocation.latitude, //이게 위에서 가져온 사용자위치(userLocation)의 위도
          userLocation.longitude //이게 위에서 가져온 사용자위치(userLocation)의 경도
        ), //여기서 이제 사용자 위도경도를 초기위치로 지도를 생성 하는거야
        zoom: 17, //지도의 초기 줌 정도 / 클 수록 줌인 /. 17정도가 적당한것 같아
        mapTypeId: naver.maps.MapTypeId.NORMAL, // NORMAL, TERRAIN, HYBRID -> 각각 기본, 지형도, 위성??
      });
    }
  }, []); //

  return (
    <Wrapper>
      <MapContainer ref={mapCon} />
    </Wrapper>
  );
}

export default Map;
