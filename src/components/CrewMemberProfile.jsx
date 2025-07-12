import styled from "styled-components";

import CrewMemberStatSummary from "./../components/CrewMemberStatSummary";

const CrewMemberProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CrewMemberInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px;
`;

const MemberLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: #ddd;
  border-radius: var(--MaxRadius);
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  color: var(--Gray8);
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: -0.45px;
`;

const Introduction = styled.div`
  color: var(--Gray5);
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.35px;
`;

function CrewMemberProfile() {
  return (
    <CrewMemberProfileWrap>
      <CrewMemberInfo>
        <MemberLogo>
          <img src="" alt="" />
        </MemberLogo>
        <TextSection>
          <Name>박재민</Name>
          <Introduction>비둘기를 좋아하는 러너입니다</Introduction>
        </TextSection>
      </CrewMemberInfo>
      <CrewMemberStatSummary />
    </CrewMemberProfileWrap>
  );
}

export default CrewMemberProfile;
