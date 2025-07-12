import styled from "styled-components";
import { useEffect, useState } from "react";

const ProgressBarWrapper = styled.div`
  width: 100%;
  height: ${({ height }) => height || "14px"};
  background: linear-gradient(90deg, #eff1f3 0%, #f0f5fb 100%);
  border-radius: var(--MaxRadius);
  overflow: hidden;
`;

const ProgressFill = styled.div`
  width: ${({ widthAnim }) => `${widthAnim}%`};
  height: 100%;
  background: linear-gradient(90deg, #9ab7ff 0%, #976eff 100%);
  border-radius: var(--MaxRadius);
  box-shadow: 0.8px 0.8px 1px 0px rgba(255, 255, 255, 0.36) inset,
    -1px -1px 1px 0px rgba(38, 61, 96, 0.1) inset;

  transition: all 0.6s ease-in-out;
`;

function ProgressBar({ value = 0, height = "14px" }) {
  const [widthAnim, setwidthAnim] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setwidthAnim(value);
    }, 500);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <ProgressBarWrapper height={height}>
      <ProgressFill widthAnim={widthAnim} />
    </ProgressBarWrapper>
  );
}

export default ProgressBar;
