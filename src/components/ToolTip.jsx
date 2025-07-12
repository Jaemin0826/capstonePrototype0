import styled from "styled-components";

const ToolWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
  transition: transform 0.18s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  &:hover {
    transform: translateY(-4px);
  }
`;

const ToolBox = styled.div`
  font-family: "Paperlogy";
  color: var(--White);
  background-color: var(--Gray8);
  border-radius: 100px;

  padding: ${({ type }) => (type === "big" ? "8px 14px" : "6px 10px")};
  font-weight: ${({ type }) => (type === "big" ? "500" : "400")};
  font-size: ${({ type }) => (type === "big" ? "14px" : "12px")};
`;

const ToolTail = styled.div`
  width: 0;
  height: 0;
  border-left: ${({ type }) =>
    type === "big" ? "8px solid transparent" : "6px solid transparent"};
  border-right: ${({ type }) =>
    type === "big" ? "8px solid transparent" : "6px solid transparent"};
  border-top: ${({ type }) =>
    type === "big" ? "6px solid var(--Gray8)" : "4px solid var(--Gray8)"};
  margin-top: -1px;
`;

function ToolTip({ tip, type, onClick }) {
  return (
    <ToolWrap onClick={onClick} type={type}>
      <ToolBox type={type}>{tip}</ToolBox>
      <ToolTail type={type}></ToolTail>
    </ToolWrap>
  );
}

export default ToolTip;
