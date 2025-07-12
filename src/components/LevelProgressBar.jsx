import styled from "styled-components";
import ProgressBar from "./ProgressBar"; // 외부에서 가져온 컴포넌트

const LevelProgressBarWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InfoText = styled.div`
  display: flex;
  gap: 4px;
  padding: 0 4px;

  color: var(--Gray8);
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.45px;

  & span {
    color: var(--Primary);
    font-weight: 700;
  }
`;

const ProgressWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ProgressTextWrap = styled.div`
  display: flex;
  justify-content: space-between;

  color: var(--Gray7);
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.35px;
`;

const CurrentKm = styled.div`
  display: flex;
  gap: 1px;

  & > span:nth-child(1) {
    color: var(--Gray8);
    font-weight: 600;
  }
`;

function LevelProgressBar({ level = 9, current = 172.6, total = 200 }) {
  const remaining = (total - current).toFixed(1);
  const percentage = (current / total) * 100;

  return (
    <LevelProgressBarWrap>
      <InfoText>
        Lv.{level}까지 <span>{remaining}km</span> 남았어요!
      </InfoText>
      <ProgressWrap>
        <ProgressBar value={percentage} />
        <ProgressTextWrap>
          <span>0 km</span>
          <CurrentKm>
            <span>{current}</span>
            <span>/{total} km</span>
          </CurrentKm>
        </ProgressTextWrap>
      </ProgressWrap>
    </LevelProgressBarWrap>
  );
}

export default LevelProgressBar;
