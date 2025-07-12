import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const CollectionModalWrap = styled.div`
  width: 184px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 10px 10px 10px;
  border-radius: 10px;
  overflow: visible;

  border: 1px solid #fff;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #fff 100%);
  box-shadow: -2px -2px 1px -2px var(--Gray4) inset;
  backdrop-filter: blur(8.850000381469727px);
  z-index: 1000;
`;

const CollectionInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CollectionName = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2px;

  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.4px;
  color: var(--Gray8);
`;

const Level = styled.div`
  display: flex;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background: var(--Sub);

  color: var(--Primary);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.3px;
`;

const Description = styled.div`
  color: var(--Gray7);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.35px;
`;

const ProgressWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-end;
`;

const ProgressTextWrap = styled.div`
  display: flex;

  color: var(--Primary);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.35px;

  & > p {
    color: var(--Gray6);
    font-weight: 400;
  }
`;

function CollectionModal({ current = 52, total = 100 }) {
  const percentage = (current / total) * 100;
  return (
    <CollectionModalWrap>
      <CollectionInfoWrap>
        <CollectionName>
          비둘기
          <Level>Lv1</Level>
        </CollectionName>
        <Description>귀여운 아기 비둘기이다.</Description>
      </CollectionInfoWrap>
      <ProgressWrap>
        <ProgressTextWrap>
          <span>{current}</span>
          <p>/{total}</p>
        </ProgressTextWrap>
        <ProgressBar value={percentage} height="8px" />
      </ProgressWrap>
    </CollectionModalWrap>
  );
}

export default CollectionModal;
