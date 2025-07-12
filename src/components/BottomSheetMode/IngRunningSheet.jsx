import styled from "styled-components";
import RunningData from "../RunningData";
import Button from "../Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  gap: 28px;
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

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;

  height: fit-content;

  & > :nth-child(1) {
    flex-shrink: 0;
  }
`;

function IngRunningSheet({ setIsRunning, pathData, setIsPaused }) {
  const navigate = useNavigate();
  const [paused, setPaused] = useState(false);
  const handlePause = () => {
    setPaused(true);
    setIsPaused(true); // 외부 상태도 업데이트
  };

  const handleResume = () => {
    setPaused(false);
    setIsPaused(false);
  };

  return (
    <Wrapper>
      <RunningData distance="2.24" simple></RunningData>
      {!paused ? (
        <Button
          type="default"
          size="large"
          text="일시정지"
          onClick={handlePause}
        />
      ) : (
        <ButtonWrapper>
          <Button
            width="100px"
            type="secondary"
            size="large"
            text="러닝 종료"
            onClick={() => {
              setIsRunning(false);
              console.log("넘어가는 pathData:", pathData);
              navigate("/running/record", {
                state: {
                  path: pathData,
                },
              });
            }}
          />
          <Button
            type="default"
            size="large"
            text="다시 시작"
            onClick={handleResume}
          />
        </ButtonWrapper>
      )}
    </Wrapper>
  );
}

export default IngRunningSheet;
