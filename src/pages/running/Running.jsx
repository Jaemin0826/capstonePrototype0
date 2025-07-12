import styled from "styled-components";
import { useState } from "react";

import Map from "../../components/Map";
import Button from "../../components/Button";
import BottomSheet from "../../components/BottomSheet";
import ToolTip from "../../components/ToolTip";

const Wrapper = styled.div`
  height: 100%;
  position: relative;

  overflow-y: hidden;
`;

const GoalBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;

  width: 44px;
  padding: 10px 0px;
  background-color: var(--White);
  border-radius: var(--MaxRadius);
  box-shadow: 0px 4px 8px 0px rgba(28, 39, 52, 0.08);

  & > p {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: -0.325px;
    color: #323d4c;
  }

  cursor: pointer;

  position: absolute;
  left: 20px;
  bottom: 231px; /*바텀시트+러닝시작 영역+내위치버튼 만큼 띄우기*/
`;

const MoveToCenterBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: var(--White);
  border-radius: var(--MaxRadius);
  box-shadow: 0px 4px 8px 0px rgba(28, 39, 52, 0.08);

  cursor: pointer;

  position: absolute;
  left: 20px;
  bottom: 179px; /*바텀시트+러닝시작 영역 만큼 띄우기*/
`;

const BtnWrap = styled.div`
  display: flex;
  width: calc(100% - 40px);
  gap: 8px;
  margin: 12px 20px;

  position: absolute;
  bottom: 99px; /*바텀시트 만큼 띄우기*/
`;

const Polyline = styled.div`
  width: 80px;
  height: 80px;
  border: 4px solid var(--Primary);
  border-radius: 4px;
  z-index: 10000;
  background-color: rgba(94, 102, 255, 0.2);
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: all 0.5s ease;
  }
`;

const PolyLineWrap = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

function Running() {
  const [openBottomSheet, setOpenBottomSheet] = useState(false);
  const [step, setStep] = useState("before");
  const [type, setType] = useState("summary");
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [pathData, setpathData] = useState([]);

  const handlePolylineClick = () => {
    setStep("before");
    setType("summary");
    setOpenBottomSheet(true);
  };

  const handleGoalClick = () => {
    setStep("before");
    setType("goal");
    setOpenBottomSheet(true);
  };

  const handleRunningStart = () => {
    setStep("ing");
    setType("running");
    setIsRunning(true);
    setOpenBottomSheet(true);
  };

  return (
    <Wrapper>
      <Map
        isRunning={isRunning}
        setPathData={setpathData}
        isPaused={isPaused}
      />
      <GoalBtn onClick={handleGoalClick}>
        <img src="/Icon/flag.svg" />
        <p>목표</p>
      </GoalBtn>
      <MoveToCenterBtn>
        <img src="/Icon/mark.svg" />
      </MoveToCenterBtn>
      <BtnWrap>
        <Button
          text="러닝 시작"
          onClick={() => {
            handleRunningStart();
          }}
        />
      </BtnWrap>
      <PolyLineWrap>
        <ToolTip tip="2회 러닝" type="big" />
        <Polyline onClick={handlePolylineClick} />
      </PolyLineWrap>
      <BottomSheet
        step={step}
        type={type}
        open={openBottomSheet}
        setIsRunning={setIsRunning}
        setIsPaused={setIsPaused}
        pathData={pathData}
        onClose={() => setOpenBottomSheet(false)}
      />
    </Wrapper>
  );
}

export default Running;
