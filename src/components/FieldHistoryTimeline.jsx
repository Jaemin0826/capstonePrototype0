import styled from "styled-components";
import TimelineSection from "./TimelineSection";

const Wrap = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 18px;
  background-color: var(--BG1);
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  & > p {
    color: var(--Gray-Gray9);
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.45px;
  }
`;

function FieldHistoryTimeline() {
  const dummyData = [
    {
      date: "26",
      day: "목",
      entries: [
        { type: "growth", user: "구예진" },
        {
          type: "levelup",
          target: "벚꽃나무",
          from: "Lv.1",
          to: "Lv.2",
          image: "/Tree/level2.png",
        },
      ],
    },
    {
      date: "24",
      day: "수",
      entries: [
        { type: "growth", user: "박재민", badge: "성장" },
        { type: "growth", user: "구예진", badge: "성장" },
        {
          type: "asset",
          name: "비둘기",
          description: "부가설명",
          image: "/Animal/bird.png",
        },
        {
          type: "levelup",
          target: "벚꽃나무",
          from: "Lv.1",
          to: "Lv.2",
          image: "/Tree/level2.png",
        },
      ],
    },
  ];

  return (
    <Wrap>
      <Label>
        <p>필드 히스토리</p>
      </Label>
      {dummyData.map((section) => (
        <TimelineSection key={section.date} data={section} />
      ))}
    </Wrap>
  );
}

export default FieldHistoryTimeline;
