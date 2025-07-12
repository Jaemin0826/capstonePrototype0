import styled from "styled-components";
import ChipList from "../ChipList";
import CollectionGrid from "../CollectionGrid";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  gap: 16px;
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

function CollectionSheet() {
  const collectionData = [
    { level: "Lv1", name: "비둘기" },
    { level: "Lv2", name: "비둘기" },
    { level: "Lv3", name: "비둘기" },
    { level: "Lv1", name: "오리" },
    { level: "Lv2", name: "오리" },
    { level: "Lv3", name: "오리" },
    { level: "Lv1", name: "참새" },
    { level: "Lv2", name: "참새" },
    { level: "Lv3", name: "참새" },
    { level: "Lv1", name: "까치" },
    { level: "Lv2", name: "까치" },
    { level: "Lv3", name: "까치" },
  ];

  return (
    <Wrapper>
      <ChipList chips={["나무", "풀", "꽃", "동물", "소품", "효과"]} />
      <CollectionGrid collectionData={collectionData} />
    </Wrapper>
  );
}

export default CollectionSheet;
