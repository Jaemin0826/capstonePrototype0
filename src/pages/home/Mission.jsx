import styled from "styled-components";
import Header from "../../components/Header";
import TabNav from "../../components/TabNav";
import ChipList from "../../components/ChipList";
import MissionCard from "../../components/MissionCard";

const MissionWrap = styled.div`
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

const FilterWrap = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 0 20px 0;
  background-color: var(--BG1);
`;

const MissionContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #fff;

  /* 스크롤 고려 css */
  padding: 24px 0 99px 0; /*바텀시트 만큼 띄우기*/
  /* StatusBar+Header 높이만큼 띄우기 */
  position: relative;
  top: 224px;
`;

const TitleWrap = styled.div`
  display: flex;
  gap: 4px;
  padding: 2px 20px;

  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.4px;
  color: var(--Gray8);

  & > p1 {
    color: var(--Primary);
  }
`;

const MissionCardWrap = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

function Mission() {
  return (
    <MissionWrap>
      <FixedTop>
        <Header title="크루 정보" showBackButton={true} />
        <TabNav tabs={["미완료 미션", "완료 미션"]} />
        <FilterWrap>
          <TitleWrap>
            <p>달성가능미션</p>
            <p1>5</p1>
          </TitleWrap>
          <ChipList
            chips={["전체", "필드 생성", "누적 거리", "크루 레벨", "기타"]}
            type="secondary"
          />
        </FilterWrap>
      </FixedTop>
      <MissionContentsWrap>
        <MissionCardWrap>
          <MissionCard />
          <MissionCard end />
          <MissionCard end />
          <MissionCard end />
        </MissionCardWrap>
      </MissionContentsWrap>
    </MissionWrap>
  );
}

export default Mission;
