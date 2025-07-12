import styled from "styled-components";

const WarningWrap = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 100px;
  background: #fff2f2;
  border: 1px solid var(--Warning);

  cursor: pointer;

  & > img {
    width: 18px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

function Warning({ onClick }) {
  return (
    <WarningWrap onClick={onClick}>
      <img src="../Illust/warning.svg" />
    </WarningWrap>
  );
}

export default Warning;
