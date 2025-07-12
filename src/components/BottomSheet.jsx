import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BeforeSummarySheet from "./BottomSheetMode/BeforeSummarySheet";
import BeforeGoalSheet from "./BottomSheetMode/BeforeGoalSheet";
import IngRunningSheet from "./BottomSheetMode/IngRunningSheet";
import CollectionSheet from "./BottomSheetMode/CollectionSheet";

const Sheet = styled.div`
  width: 100%;
  background-color: var(--White);
  border-radius: 24px 24px 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  bottom: ${({ open }) => (open ? "0px" : "-400px")};
  left: 0;
  gap: 16px;

  z-index: ${({ step }) => (step === "ing" ? "1002" : "999")};

  box-shadow: 0px -4px 20px 0px rgba(0, 0, 0, 0.08);

  padding: ${({ step }) =>
    step === "before" || step === "collection"
      ? "12px 24px 104px 24px"
      : "12px 24px 40px 24px"};

  transition: bottom 0.4s ease;
`;

const DragBar = styled.div`
  width: 60px;
  height: 6px;
  background-color: var(--Gray2);
  border-radius: 100px;

  cursor: pointer;
`;

const Content = styled.div`
  width: 100%;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

function BottomSheet({
  step = "before",
  type = "summary",
  open,
  onClose,
  onSelectCollection,
  setIsRunning,
  setIsPaused,
  pathData,
}) {
  const sheetRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      // 약간의 딜레이 후 콘텐츠 보이기
      const timer = setTimeout(() => setVisible(true), 50);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [open, step, type]);

  useEffect(() => {
    if (step === "ing") return;

    function handleClickOutside(event) {
      if (sheetRef.current && !sheetRef.current.contains(event.target)) {
        onClose?.();
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  return (
    <Sheet step={step} open={open} ref={sheetRef}>
      <DragBar onClick={onClose} />
      <Content visible={visible}>
        {step === "before" && type === "summary" && <BeforeSummarySheet />}
        {step === "before" && type === "goal" && (
          <BeforeGoalSheet onClose={onClose} />
        )}
        {step === "ing" && type === "running" && (
          <IngRunningSheet
            setIsRunning={setIsRunning}
            setIsPaused={setIsPaused}
            pathData={pathData}
          />
        )}
        {step === "collection" && (
          <CollectionSheet onSelectCollection={onSelectCollection} />
        )}
      </Content>
    </Sheet>
  );
}

export default BottomSheet;
