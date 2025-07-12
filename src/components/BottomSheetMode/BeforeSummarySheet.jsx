import styled from "styled-components";
import RunningData from "../RunningData";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  gap: 24px;
`;

const HistoryBtn = styled.div`
  padding: 14px 12px;
  border-radius: 8px;
  background-color: var(--Gray1);

  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  & > p {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.4px;
    color: var(--Gray7);
  }
`;

function BeforeSummarySheet() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <RunningData distance="2.24" simple thumnail></RunningData>
      <HistoryBtn onClick={() => navigate("/history/record")}>
        <p>필드 히스토리 보러가기</p>
        <img src="../../public/Icon/chevron-right.svg" />
      </HistoryBtn>
    </Wrapper>
  );
}

export default BeforeSummarySheet;
