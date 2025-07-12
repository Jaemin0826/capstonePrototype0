import styled from "styled-components";

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  width: ${({ $width }) => $width || "100%"};
  padding: ${({ size }) => (size === "large" ? "16px 18px" : "12px 18px")};
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.4px;
  cursor: ${({ type }) => (type === "disabled" ? "not-allowed" : "pointer")};
  border: none;

  background-color: ${({ type }) => {
    switch (type) {
      case "default":
        return "var(--Primary)";
      case "secondary":
        return "var(--Gray1)";
      case "disabled":
        return "var(--Gray1)";
      default:
        return "var(--Primary)";
    }
  }};

  color: ${({ type }) => {
    switch (type) {
      case "default":
        return "var(--White)";
      case "secondary":
        return "var(--Gray7)";
      case "disabled":
        return "var(--Gray4)";
      default:
        return "var(--White)";
    }
  }};
`;

const Icon = styled.span`
  width: 16px;
  height: 16px;
`;

const Unit = styled.div`
  display: flex;
  font-weight: 700;
  color: var(--Gray4);
`;

function Button({
  type = "default",
  size = "large",
  icon = false,
  text = "Button",
  unitToggle = false,
  unitText = "/ 20",
  unit = "개",
  width = "100%",
  onClick, // onClick prop 추가
}) {
  return (
    <ButtonWrapper type={type} size={size} $width={width} onClick={onClick}>
      {icon && (
        <Icon>
          <img src="/Icon/disabled-check.svg" alt="" />
        </Icon>
      )}
      {text}
      {unitToggle && (
        <Unit>
          <p>{unitText}</p>
          <p>{unit}</p>
        </Unit>
      )}
    </ButtonWrapper>
  );
}

export default Button;
