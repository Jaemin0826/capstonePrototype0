import styled from "styled-components";
import { useEffect } from "react";
import MiniBtn from "./MiniBtn";
import Toggle from "./Toggle";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 340px;
  position: relative;
  background-color: var(--Gray5);
`;

const RunningInfoWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 44px 20px 20px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  position: absolute;
  bottom: 0;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
`;

const Day = styled.div`
  color: var(--White);
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.6px;
`;

function HistoryRecordMap({ pathData = [], type = "running" }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.naver || !window.naver.maps || pathData.length === 0) return;

    const centerLat =
      pathData.reduce((sum, coord) => sum + (coord.lat || coord._lat), 0) /
      pathData.length;
    const centerLng =
      pathData.reduce((sum, coord) => sum + (coord.lng || coord._lng), 0) /
      pathData.length;

    const center = new window.naver.maps.LatLng(centerLat, centerLng);

    const map = new window.naver.maps.Map("map", {
      center,
      zoom: 17,
    });

    // 폴리곤으로 경로 시각화
    // eslint-disable-next-line no-unused-vars
    const polygon = new window.naver.maps.Polygon({
      map: map,
      paths: [pathData], // ⚠️ 2차원 배열로 넣어야 함
      fillColor: "rgba(130, 165, 255, 0.2)",
      fillOpacity: 0.6,
      strokeColor: "#4263eb",
      strokeOpacity: 1,
      strokeWeight: 4,
    });
  }, [pathData]);

  return (
    <Wrapper>
      <div id="map" style={{ width: "100%", height: "100%" }} />
      <RunningInfoWrap>
        <Day>4월 12일 러닝 기록</Day>
        {type === "running" ? (
          <MiniBtn
            type="default"
            title="필드 생성"
            onClick={() => {
              navigate("/genField", {
                state: {
                  path: pathData,
                },
              });
            }}
          />
        ) : (
          <Toggle />
        )}
      </RunningInfoWrap>
    </Wrapper>
  );
}

export default HistoryRecordMap;
