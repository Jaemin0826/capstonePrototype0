import styled from "styled-components";

const MiniBtnWrap = styled.div`
  width: fit-content;
  padding: 8px 16px;
  border-radius: 100px;

  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.6px;

  /* background-color: var(--Primary);
  color: var(--White); */

  ${({ type }) => {
    if (type === "default") {
      return `
        background-color: var(--Primary);
        color: var(--White);
      `;
    }
    if (type === "secondary") {
      return `
        background-color: var(--Sub);
        color: var(--Gray8);
      `;
    }
    if (type === "white") {
      return `
        background-color: var(--White);
        color: var(--Gray8);
      `;
    }
  }}

  cursor: pointer;
`;

function MiniBtn({ type, title, onClick }) {
  return (
    <MiniBtnWrap onClick={onClick} type={type}>
      {title}
    </MiniBtnWrap>
  );
}

export default MiniBtn;
