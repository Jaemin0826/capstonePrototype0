import styled from "styled-components";

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0px;
  width: 100%;

  font-size: 16px;
  letter-spacing: -0.6px;

  background-color: #fff;
  cursor: pointer;

  border-bottom: 2px solid transparent;
  /* 호버댔을때 2px씩 움찔움찔 움직이는거 막으려고 해둔거 */

  color: ${({ selected }) => (selected ? "var(--Gray8)" : "var(--Gray5)")};
  font-weight: ${({ selected }) => (selected ? "600" : "400")};
  border-bottom: ${({ selected }) =>
    selected ? "2px solid var(--Primary)" : "2px solid transparent"};
`;

function TabNavItem({ Name, selected, onClick }) {
  return (
    <>
      <Box selected={selected} onClick={onClick}>
        {Name}
      </Box>
    </>
  );
}

export default TabNavItem;
