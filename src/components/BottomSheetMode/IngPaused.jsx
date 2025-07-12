import styled from "styled-components";
import RunningData from "../RunningData";
import Button from "../Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  gap: 28px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;

  height: fit-content;
  ㄴ & > :nth-child(1) {
    flex-shrink: 0;
  }
`;

function IngPaused() {
  return (
    <Wrapper>
      <RunningData distance="2.24" simple></RunningData>
      <ButtonWrapper>
        <Button width="100px" type="secondary" size="large" text="러닝 종료" />
        <Button type="default" size="large" text="다시 시작" />
      </ButtonWrapper>
    </Wrapper>
  );
}

export default IngPaused;
