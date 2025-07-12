import styled from "styled-components";
import Button from "../Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: flex-start;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  color: var(--Gray8);
  font-weight: 700;
  letter-spacing: -0.5px;
  padding-bottom: 16px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const Btn = styled.div`
  padding: 4px 0px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  & > p {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.4px;
    color: var(--Gray8);
  }
`;

function BeforeGoalSheet({ onClose }) {
  return (
    <Wrapper>
      <Title>목표 설정</Title>
      <ContentWrapper>
        <BtnWrapper>
          <Btn>
            <img src="../../public/Icon/distance.svg" />
            <p>거리로 설정</p>
          </Btn>
          <Btn>
            <p>10km</p>
            <img src="../../public/Icon/chevron-right.svg" />
          </Btn>
        </BtnWrapper>
        <BtnWrapper>
          <Btn>
            <img src="../../public/Icon/time.svg" />
            <p>시간으로 설정</p>
          </Btn>
          <Btn>
            <p>1시간</p>
            <img src="../../public/Icon/chevron-right.svg" />
          </Btn>
        </BtnWrapper>
      </ContentWrapper>
      <Button type="default" size="large" text="닫기" onClick={onClose} />
    </Wrapper>
  );
}

export default BeforeGoalSheet;
