import styled from "styled-components";

const CollectionCardWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  gap: 8px;

  cursor: pointer;
`;

const CollectionImg = styled.div`
  width: 66px;
  height: 66px;
  background-color: var(--Gray2);
`;

const CollectionInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.35px;
  color: #37465e;
`;

const Level = styled.div`
  display: flex;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background: #37465e;

  color: var(--Gray1);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.3px;
`;

function CollectionCard({ data }) {
  return (
    <CollectionCardWrap>
      <CollectionImg />
      <CollectionInfo>
        <Level>{data.level}</Level>
        <p>{data.name}</p>
      </CollectionInfo>
    </CollectionCardWrap>
  );
}

export default CollectionCard;
