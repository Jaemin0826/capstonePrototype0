import { useState } from "react";
import styled from "styled-components";
import CollectionCard from "./CollectionCard";

const CollectionGridWrap = styled.div`
  display: grid;
  width: 100%;
  height: 240px;
  row-gap: 10px;
  column-gap: 10px;
  flex-shrink: 0;
  grid-auto-rows: 114px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function CollectionGrid({ collectionData }) {
  const [selectedCollection, setSelectedCollection] = useState(null);

  return (
    <CollectionGridWrap>
      {collectionData?.map((item, index) => (
        <CollectionCard
          key={index}
          data={item}
          selected={selectedCollection === index}
          onClick={() => setSelectedCollection(index)}
        />
      ))}
    </CollectionGridWrap>
  );
}

export default CollectionGrid;
