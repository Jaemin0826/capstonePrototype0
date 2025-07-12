import styled from "styled-components";
import TimelineCard from "./TimelineCard";

const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const DateLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: var(--Gray6);
  gap: 4px;
`;

function TimelineSection({ data }) {
  const { date, day, entries } = data;
  return (
    <SectionWrap>
      <DateLabel>
        <span>{date}</span>
        <span>{day}</span>
      </DateLabel>
      {entries.map((entry, index) => (
        <TimelineCard key={index} entry={entry} />
      ))}
    </SectionWrap>
  );
}

export default TimelineSection;
