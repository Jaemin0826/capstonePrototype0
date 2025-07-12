import styled from "styled-components";
import Header from "../../components/Header";
import TabNav from "../../components/TabNav";
import RunningData from "../../components/RunningData";
import RunningGraph from "../../components/RunningGraph";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: var(--BG2);
`;

const FixedTop = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  width: 402px;
`;

const HistoryWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--BG2);
  height: fit-content;

  /* 스크롤 고려 css */
  padding-bottom: 99px; /*바텀시트 만큼 띄우기*/
  /* StatusBar+Header+TabNav 높이만큼 띄우기 */
  position: relative;
  top: 158px;
`;

const RunningDataWrapper = styled.div`
  width: 100%;
  padding: 16px 20px 12px 20px;
  background-color: var(--White);
  margin-bottom: 12px;
`;

const RunningGraphWrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: var(--White);
`;

const GraphArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: var(--BG2);
`;

function Hisotory() {
  return (
    <Wrapper>
      {/* 헤더, 탭바 */}
      <FixedTop>
        <Header title="기록" />
        <TabNav tabs={["일", "주", "월"]} />
      </FixedTop>
      {/* 기록 부분 */}
      <HistoryWrap>
        <RunningDataWrapper>
          <RunningData reverse />
        </RunningDataWrapper>
        <GraphArea>
          <RunningGraphWrapper>
            <RunningGraph title="거리" data="12.24"></RunningGraph>
          </RunningGraphWrapper>
          <RunningGraphWrapper>
            <RunningGraph title="시간" data="1:26:32"></RunningGraph>
          </RunningGraphWrapper>
          <RunningGraphWrapper>
            <RunningGraph title="평균 페이스" data="5'30'"></RunningGraph>
          </RunningGraphWrapper>
        </GraphArea>
      </HistoryWrap>
    </Wrapper>
  );
}

export default Hisotory;
