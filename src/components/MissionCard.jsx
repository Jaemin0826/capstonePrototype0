import styled from "styled-components";
import Button from "./Button";

const MissionCardWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: var(--White);
  gap: 10px;

  border-radius: 14px;
  box-shadow: 0px 0px 12px 0px rgba(12, 13, 45, 0.08);
`;

const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const Thumnail = styled.div`
  width: 64px;
  height: 64px;
  background-color: var(--Gray3);
  border-radius: 4px;
`;
const TextWrap = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.35px;
  color: var(--Gray5);

  display: flex;
  flex-direction: column;
  gap: 4px;

  & > p1 {
    color: var(--Gray8);
    font-size: 16px;
    font-weight: 600;
  }
`;

function MissionCard({ end }) {
  return (
    <MissionCardWrap>
      <ContentWrap>
        <Thumnail></Thumnail>
        <TextWrap>
          <p>누적 거리</p>
          <p1>누적 러닝거리 20km를 달성하세요.</p1>
        </TextWrap>
      </ContentWrap>
      {end ? (
        <Button type="disabled" size="small" text="✔︎ 수령 완료" />
      ) : (
        <Button type="default" size="small" text="보상 받기" />
      )}
    </MissionCardWrap>
  );
}

export default MissionCard;
