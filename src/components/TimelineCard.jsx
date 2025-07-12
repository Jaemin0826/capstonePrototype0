import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;

  border-radius: 8px;
  background: var(--BG1);
  box-shadow: 0px 0px 12px 0px rgba(12, 13, 45, 0.08);
`;

const Badge = styled.span`
  background: #eef2ff;
  color: #5e66ff;
  font-size: 12px;
  font-weight: 600;
  border-radius: 6px;
  padding: 2px 6px;
`;

const Bold = styled.span`
  font-weight: 600;
`;

function TimelineCard({ entry }) {
  // 필드 성장
  if (entry.type === "growth") {
    return (
      <Card>
        <span>
          <Bold>{entry.user}</Bold>님이 필드를 성장시켰어요.
        </span>
        {entry.badge && <Badge>{entry.badge}</Badge>}
      </Card>
    );
  }

  // 레벨업
  if (entry.type === "levelup") {
    return (
      <Card>
        <div>
          <div>
            <Bold>{entry.target}</Bold>의 레벨이 올랐어요!
          </div>
          <div style={{ fontSize: "13px" }}>
            {entry.from} <span style={{ color: "#5e66ff" }}>➤ {entry.to}</span>
          </div>
        </div>
        <img src={entry.image} alt="레벨업" width={40} />
      </Card>
    );
  }

  //  새로운 에셋
  if (entry.type === "asset") {
    return (
      <Card>
        <div>
          <div>
            <Bold>{entry.name}</Bold>가 찾아왔어요!
          </div>
          <div style={{ fontSize: "13px", color: "#aaa" }}>
            {entry.description}
          </div>
        </div>
        <img src={entry.image} alt="동물" width={40} />
      </Card>
    );
  }

  return null;
}

export default TimelineCard;
