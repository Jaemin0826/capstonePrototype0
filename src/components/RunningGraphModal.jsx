import styled from "styled-components";
import RunningDataItem from "./RunningDataItem";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;
  gap: 16px;
  padding: 14px;

  border-radius: 6px;
  background-color: var(--Gray9);
  box-shadow: 0px 0px 16px 0px rgba(12, 13, 45, 0.06);
`;

const DataWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DateBtn = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  & > p {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.35px;

    color: var(--White);
  }

  & > img {
    width: 16px;
    height: 16px;
  }
`;

function RunningGraphModal({ dayData, distanceData, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <DateBtn>
        <p>{dayData}</p>
        <img src="../public/Icon/chevron-right-white.svg" />
      </DateBtn>
      <DataWrapper>
        <RunningDataItem label="거리" data={distanceData} mini />
        <RunningDataItem label="시간" data="12:32" mini />
        <RunningDataItem label="평균 페이스" data="5'30'" mini />
      </DataWrapper>
    </Wrapper>
  );
}

export default RunningGraphModal;
