import styled from "styled-components";
import StatItem from "./../components/StatItem";

const StatSummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 8px;
  width: 100%;
  border-radius: 10px;
  background: rgba(246, 247, 251, 0.8);
`;

function CrewMemberStatSummary() {
  return (
    <StatSummaryWrapper>
      <StatItem
        iconSrc="/Illust/distance.svg"
        alt="러닝 거리"
        label="러닝 거리"
        value={17}
        unit="km"
      />
      <StatItem
        iconSrc="/Illust/field.svg"
        alt="생성 필드 수"
        label="생성 필드 수"
        value={22}
        unit="개"
      />
      <StatItem
        iconSrc="/Illust/forest.svg"
        alt="숲 가꾸기"
        label="숲 가꾸기"
        value={12}
        unit="회"
      />
    </StatSummaryWrapper>
  );
}

export default CrewMemberStatSummary;
