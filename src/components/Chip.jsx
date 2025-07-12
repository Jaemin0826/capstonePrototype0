import styled from "styled-components";

const ChipWrap = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 18px;
  border-radius: 100px;
  flex-shrink: 0;

  font-size: 16px;
  font-weight: ${({ selected }) => (selected ? "500" : "400")};
  line-height: 150%;
  letter-spacing: -0.4px;

  cursor: pointer;

  /* background-color: ${({ selected }) =>
    selected ? "var(--Gray8)" : "var(--Gray1)"}; */
  background-color: ${({ selected, type }) => {
    if (selected) return "var(--Gray8)";
    if (type === "default") return "var(--White)";
    if (type === "secondary") return "var(--Gray1)";
  }};
  color: ${({ selected }) => (selected ? "var(--White)" : "var(--Gray8)")};
`;

function Chip({ text, type = "default", selected = false, onClick }) {
  return (
    <ChipWrap selected={selected} onClick={onClick} type={type}>
      {text}
    </ChipWrap>
  );
}

export default Chip;
