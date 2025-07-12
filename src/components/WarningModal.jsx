import styled from "styled-components";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const WarningModalWrap = styled.div`
  width: 362px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px 14px 14px 14px;
  border-radius: 10px;

  border: 1px solid var(--White);
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 12px 0px rgba(12, 13, 45, 0.08);
  backdrop-filter: blur(8px);

  cursor: pointer;

  & > img {
    width: 18px;
  }
`;

const WarnWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: var(--Gray8);
  font-size: 18px;
  font-weight: 700;
`;

const TextWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;

  & > p {
    color: var(--Gray7);
    font-size: 16px;
    font-weight: 400;
  }
`;

const TimeWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;

  & > p {
    color: var(--Gray7);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.35px;
  }
`;

const Time = styled.div`
  font-family: Paperlogy;
  color: var(--Gray9);
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.96px;
`;

function WarningModal() {
  const navigate = useNavigate();
  return (
    <WarningModalWrap>
      <TextWrap>
        <WarnWrap>
          <img src="../Illust/warning.svg" />
          <p>나무가 시들고 있어요!</p>
        </WarnWrap>
        <p>풀에게 줄 물과 비료가 필요해요.</p>
      </TextWrap>
      <TimeWrap>
        <p>시들기까지 남은 시간</p>
        <Time>05:22:13</Time>
      </TimeWrap>
      <Button
        size="small"
        text="뛰러 가기"
        onClick={() => navigate("/running")}
      />
    </WarningModalWrap>
  );
}

export default WarningModal;
