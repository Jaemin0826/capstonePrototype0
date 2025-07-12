import styled from "styled-components";

const NavBtnWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;

  &:hover {
    color: var(--Gray7);
  }
`;

const StyledIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    color: ${({ selected }) => (selected ? "var(--Gray7)" : "var(--Gray4)")};
  }
`;

const Menu = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.6px;
  color: ${({ selected }) => (selected ? "var(--Gray7)" : "var(--Gray4)")};
`;

function NavBtn({ menu, selected, icon, onClick }) {
  const Icon = icon;
  return (
    <NavBtnWrap onClick={onClick}>
      <StyledIcon selected={selected}>
        <Icon />
      </StyledIcon>
      <Menu selected={selected}>{menu}</Menu>
    </NavBtnWrap>
  );
}

export default NavBtn;
