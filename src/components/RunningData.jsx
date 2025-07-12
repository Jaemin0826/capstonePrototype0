import styled from "styled-components";
import RunningDataItem from "./RunningDataItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  gap: 16px;
`;

const UpWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${({ reverse }) => reverse && "padding: 20px 0px;"}
`;

const DownWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DistanceData = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  align-self: stretch;
  font-size: 48px;
  font-weight: 800;
  letter-spacing: -1.2px;
  color: var(--Gray8);

  & > p {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.6px;
    line-height: normal;
    color: var(--Gray7);
    margin-bottom: 5px;
  }
`;

const DistanceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.35px;
  color: var(--Gray6);
`;

const MapThumnail = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 10px;

  background-color: var(--Gray2);
`;

const MapBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

function RunningData({
  distance,
  reverse = false,
  simple = false,
  thumnail = false,
}) {
  if (reverse) {
    return (
      <Wrapper>
        <DistanceBox>
          <p>나중에 드롭다운으로 설정</p>
        </DistanceBox>
        <UpWrapper reverse={reverse}>
          <RunningDataItem label={"시간"} data={"00:12:34"} reverse />
          <RunningDataItem label={"평균 페이스"} data={"5'30'"} reverse />
          <RunningDataItem label={"평균 심박수"} data={"161bpm"} reverse />
        </UpWrapper>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <MapBox>
        <DistanceBox>
          <p>루트 거리</p>
          <DistanceData>
            {distance}
            <p>km</p>
          </DistanceData>
        </DistanceBox>
        {thumnail && <MapThumnail></MapThumnail>}
      </MapBox>
      <UpWrapper>
        <RunningDataItem label={"시간"} data={"00:12:34"} />
        <RunningDataItem label={"평균 페이스"} data={"5'30'"} />
        <RunningDataItem label={"평균 심박수"} data={"161bpm"} />
      </UpWrapper>
      {!simple && (
        <DownWrapper>
          <RunningDataItem label={"칼로리"} data={"231kcal"} />
          <RunningDataItem label={"케이던스"} data={"124"} />
          <RunningDataItem label={"고도상승"} data={"16m"} />
        </DownWrapper>
      )}
    </Wrapper>
  );
}

export default RunningData;
