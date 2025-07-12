import styled from "styled-components";
import MemberHistoryCard from "./../components/MemberHistoryCard";

const CrewMemberHistoryWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 20px;
  background-color: var(--BG1);
`;
const Label = styled.div`
  display: flex;
  align-items: center;

  & > p {
    color: var(--Gray-Gray9);
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.45px;
  }
`;
const HistoryCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionA = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Week = styled.div`
  color: #777;
  font-size: 14px;
  letter-spacing: -0.35px;
`;

function CrewMemberHistory() {
  return (
    <CrewMemberHistoryWrap>
      <Label>
        <p>러닝 기록</p>
      </Label>
      <HistoryCardWrap>
        <SectionA>
          <Week>이번주</Week>
          <MemberHistoryCard />
          <MemberHistoryCard />
          <MemberHistoryCard />
          <MemberHistoryCard />
        </SectionA>
        <SectionA>
          <Week>지난주</Week>
          <MemberHistoryCard />
          <MemberHistoryCard />
          <MemberHistoryCard />
          <MemberHistoryCard />
        </SectionA>
      </HistoryCardWrap>
    </CrewMemberHistoryWrap>
  );
}

export default CrewMemberHistory;
