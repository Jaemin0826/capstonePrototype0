import styled from "styled-components";

import Header from "../../components/Header";
import HistoryRecordMap from "../../components/HistoryRecordMap";
import FieldHistoryTimeline from "../../components/FieldHistoryTimeline";

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

function FieldHistory() {
  return (
    <Wrapper>
      <FixedTop>
        <Header showBackButton={true} bgColor="transparent" />
      </FixedTop>
      <RunningRecordWrap>
        <HistoryRecordMap type="history" />
        <FieldHistoryTimeline />
      </RunningRecordWrap>
    </Wrapper>
  );
}

export default FieldHistory;
