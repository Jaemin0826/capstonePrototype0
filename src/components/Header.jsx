import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 60px;

  background-color: ${({ bgColor }) => bgColor || "var(--White)"};
  z-index: 101;
`;

const ButtonWrap = styled.button`
  display: flex;
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  padding: 0;
  margin-right: 12px;
  cursor: pointer;
`;

const Title = styled.h1`
  color: var(--Gray8);
  text-align: center;
  font-size: ${(props) => (props.hasBackButton ? "18px" : "20px")};
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.45px;
  text-align: ${(props) => (props.hasBackButton ? "center" : "left")};
  flex: 1;
`;

function Header({ title, showBackButton = false, bgColor }) {
  const navigate = useNavigate();

  return (
    <HeaderWrapper bgColor={bgColor}>
      {showBackButton && (
        <ButtonWrap onClick={() => navigate(-1)}>
          <img src="/Icon/chevron-left.svg" alt="back" />
        </ButtonWrap>
      )}
      {title && <Title hasBackButton={showBackButton}>{title}</Title>}
      <ButtonWrap>
        <img src="" alt="" />
      </ButtonWrap>
    </HeaderWrapper>
  );
}

export default Header;
