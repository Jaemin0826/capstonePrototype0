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

function CrewStatSummary() {
  return (
    <StatSummaryWrapper>
      <StatItem
        iconSrc="/Illust/field.svg"
        alt="생성 필드 수"
        label="생성 필드 수"
        value={17}
        unit="개"
      />
      <StatItem
        iconSrc="/Illust/mission2.svg"
        alt="미션 달성률"
        label="미션 달성률"
        value={22.2}
        unit="%"
      />
      <StatItem
        iconSrc="/Illust/collection2.svg"
        alt="도감 수집률"
        label="도감 수집률"
        value={22.2}
        unit="%"
      />
    </StatSummaryWrapper>
  );
}

export default CrewStatSummary;
