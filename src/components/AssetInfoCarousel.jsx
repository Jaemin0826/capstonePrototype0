import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const CollectionModalWrap = styled.div`
  width: 330px;
  height: 193px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 54px 20px 22px 20px;
  border-radius: 10px;

  /* position: absolute;
  top: 140px;
  left: 20px; */

  border-radius: 16px;
  border: 1px solid #fff;

  background: linear-gradient(
    113deg,
    rgba(255, 255, 255, 0.8) 4.14%,
    rgba(255, 255, 255, 0.4) 95.86%
  );

  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(14px);
  z-index: 998;
`;

const CollectionInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionName = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 6px;

  font-size: 20px;
  font-weight: 700;
  color: var(--Gray9);
`;

const Level = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background: #333;

  color: var(--Gray1);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.3px;
`;

const Description = styled.div`
  color: var(--Gray7);
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  white-space: pre-line;
`;

const ProgressWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-end;
  margin-bottom: 18px;
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

const CollectionThumnail = styled.div`
  width: 100px;
  height: 100px;
  /* border-radius: 4px;
  background: linear-gradient(
    113deg,
    rgba(225, 225, 225, 0.8) 4.14%,
    rgba(245, 245, 245, 0.5) 95.86%
  );
  backdrop-filter: blur(14px); */

  & > img {
    width: 100%;
    height: 100%;
  }

  position: absolute;
  top: -52px;
  left: 16px;
`;

function AssetInfoCarousel({ data }) {
  if (!data) return null;
  const percentage = (data.current / data.total) * 100;
  return (
    <CollectionModalWrap>
      <CollectionInfoWrap>
        <CollectionThumnail>
          <img src={`/Collection/${data.img}${data.level}.png`} />
        </CollectionThumnail>
        <CollectionName>
          {data.name}
          <Level>Lv{data.level}</Level>
        </CollectionName>
        <ProgressWrap>
          <ProgressTextWrap>
            <span>{data.current}</span>
            <p>/{data.total}</p>
          </ProgressTextWrap>
          <ProgressBar value={percentage} height="12px" />
        </ProgressWrap>
        <Description>{data.desc}</Description>
      </CollectionInfoWrap>
    </CollectionModalWrap>
  );
}

export default AssetInfoCarousel;
