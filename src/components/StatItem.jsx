import styled from "styled-components";

const StatItemWrapper = styled.div`
  display: flex;
  padding: 4px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const Icon = styled.span`
  width: 28px;
  height: 28px;
`;

const ValueWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const Label = styled.div`
  color: var(--Gray6);
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.35px;
`;

const Value = styled.div`
  display: flex;
  color: var(--Gray8);
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.4px;
`;

function StatItem({ iconSrc, alt, label, value, unit }) {
  return (
    <StatItemWrapper>
      <Icon>
        <img src={iconSrc} alt={alt} />
      </Icon>
      <ValueWrap>
        <Label>{label}</Label>
        <Value>
          <p>{value}</p>
          <p>{unit}</p>
        </Value>
      </ValueWrap>
    </StatItemWrapper>
  );
}

export default StatItem;
