import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ mini }) => (mini ? "row" : "column")};
  align-items: ${({ mini }) => (mini ? "center" : "flex-start")};
  flex-grow: 1;
  justify-content: space-between;

  gap: ${({ mini }) => (mini ? "6px" : "8px")};
`;

const ReverseWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  gap: 8px;
`;

const LabelBox = styled.div`
  font-size: ${({ mini }) => (mini ? "14px" : "14px")};
  color: ${({ mini }) => (mini ? "var(--Gray4)" : "var(--Gray6)")};
  font-weight: 400;
`;

const Data = styled.div`
  font-size: ${({ mini }) => (mini ? "14px" : "22px")};
  color: ${({ mini }) => (mini ? "var(--White)" : "var(--Gray8)")};
  font-weight: 600;
  letter-spacing: -0.55px;
`;

function RunningDataItem({ label, data, reverse = false, mini = false }) {
  if (reverse) {
    return (
      <ReverseWrapper>
        <Data>{data}</Data>
        <LabelBox>{label}</LabelBox>
      </ReverseWrapper>
    );
  }

  return (
    <Wrapper mini={mini}>
      <LabelBox mini={mini}>{label}</LabelBox>
      <Data mini={mini}>{data}</Data>
    </Wrapper>
  );
}

export default RunningDataItem;
