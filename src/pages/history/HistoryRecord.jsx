import styled from "styled-components";
import HistoryRecordMap from "../../components/HistoryRecordMap";
import RunningData from "../../components/RunningData";
import PaceData from "../../components/PaceData";
import BottomNav from "../../components/BottomNav";
import Header from "../../components/Header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  overflow-y: scroll;

  background-color: var(--BG2);

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FixedTop = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  width: 402px;
`;

const RunningRecordWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: var(--BG2);
  height: fit-content;

  /* 스크롤 고려 css */
  padding-bottom: 99px; /*바텀시트 만큼 띄우기*/
`;

const RunningDataBox = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 12px;
  background-color: var(--White);
`;

const PaceDataBox = styled.div`
  width: 100%;
  padding: 20px 20px 32px 20px;
  background-color: var(--White);
`;

function HistoryRecord() {
  return (
    <Wrapper>
      <FixedTop>
        <Header showBackButton={true} bgColor="transparent" />
      </FixedTop>
      <RunningRecordWrap>
        <HistoryRecordMap type="history" />
        <RunningDataBox>
          <RunningData distance={"2.22"}></RunningData>
        </RunningDataBox>
        <PaceDataBox>
          <PaceData />
        </PaceDataBox>
      </RunningRecordWrap>
    </Wrapper>
  );
}

export default HistoryRecord;
