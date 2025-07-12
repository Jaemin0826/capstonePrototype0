import styled from "styled-components";
import Header from "../../components/Header";
import CrewBtn from "../../components/CrewBtn";
import LevelProgressBar from "../../components/LevelProgressBar";
import CrewStatSummary from "../../components/CrewStatSummary";
import CrewMemberList from "../../components/CrewMemberList";

const CrewWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const FixedTop = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  width: 402px;
  z-index: 1;
`;

const CrewContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #f5f6f8;

  /* 스크롤 고려 css */
  padding-bottom: 99px; /*바텀시트 만큼 띄우기*/
  /* StatusBar+Header 높이만큼 띄우기 */
  position: relative;
  top: 110px;
`;

const CrewProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: var(--White);
`;

const CrewInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

function Crew() {
  return (
    <CrewWrap>
      <FixedTop>
        <Header title="크루 정보" showBackButton={true} />
      </FixedTop>
      <CrewContentsWrap>
        <CrewProfileWrap>
          <CrewInfoSection>
            <CrewBtn type="view" />
            <LevelProgressBar />
          </CrewInfoSection>
          <CrewStatSummary />
        </CrewProfileWrap>
        <CrewMemberList />
      </CrewContentsWrap>
    </CrewWrap>
  );
}

export default Crew;
