import React, { useState } from "react";
import styled from "styled-components";

const ToggleWrap = styled.div`
  width: fit-content;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--White);
  border-radius: 100px;
  padding: 2px;
  height: 36px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  margin-top: 8px;
`;

const Slider = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 48px;
  height: 32px;
  border-radius: 100px;
  background: var(--Primary);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);

  transition: transform 0.32s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ selected }) =>
    selected === "코스" ? "translateX(0px)" : "translateX(46px)"};
  z-index: 1;
`;

const ToggleBtn = styled.button`
  flex: 1;
  padding: 10px 12px;
  border: none;
  border-radius: 100px;
  background: transparent;
  color: ${({ active }) => (active ? "var(--White)" : "var(--Gray5)")};
  font-size: 14px;
  font-weight: ${({ active }) => (active ? "600" : "400")};
  line-height: 150%;
  letter-spacing: -0.5px;

  cursor: pointer;
  transition: color 0.2s;
  z-index: 2;
`;

function Toggle({ onChange }) {
  const [selected, setSelected] = useState("코스");

  const handleClick = (value) => {
    setSelected(value);
    if (onChange) onChange(value);
  };

  return (
    <ToggleWrap>
      <Slider selected={selected} />
      <ToggleBtn
        type="button"
        active={selected === "코스"}
        onClick={() => handleClick("코스")}
      >
        코스
      </ToggleBtn>
      <ToggleBtn
        type="button"
        active={selected === "필드"}
        onClick={() => handleClick("필드")}
      >
        필드
      </ToggleBtn>
    </ToggleWrap>
  );
}

export default Toggle;
