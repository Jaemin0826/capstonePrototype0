import styled from "styled-components";
import Chip from "./Chip";
import { useState } from "react";

const ChipListWrap = styled.div`
  width: 100%;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function ChipList({ chips, type }) {
  const [selectedChip, setSelectedChip] = useState(chips[0]);

  return (
    <ChipListWrap>
      {chips.map((text, index) => (
        <Chip
          key={index}
          text={text}
          selected={selectedChip === text}
          type={type}
          onClick={() => setSelectedChip(text)}
        ></Chip>
      ))}
    </ChipListWrap>
  );
}

export default ChipList;
