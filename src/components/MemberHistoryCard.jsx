import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px;
  border-radius: 4px;
  background: #fbfbfd;

  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Badge = styled.div`
  display: flex;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  background: var(--Sub);

  color: var(--Primary);
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: -0.35px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  & > p {
    color: var(--Gray7);
    font-size: 16px;
    line-height: 16px;
    letter-spacing: -0.4px;
  }
  & > p.date {
    font-weight: 600;
  }
`;

const ArrowDown = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;
`;

function MemberHistoryCard() {
  return (
    <CardWrapper>
      <Content>
        <Badge>성장</Badge>
        <Title>
          <p className="date">06월 06일</p>
          <p>러닝</p>
        </Title>
      </Content>
      <ArrowDown>
        <img src="/Icon/chevron-down-Gray6.svg" alt="" />
      </ArrowDown>
    </CardWrapper>
  );
}

export default MemberHistoryCard;
