import styled from "styled-components";

const CrewMemberCardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 0;
  width: 100%;
  cursor: pointer;
`;

const Rank = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  width: 48px;
  justify-content: center;
`;

const RankNumber = styled.span`
  color: var(--Gray8);
  text-align: center;
  font-family: Paperlogy;
  font-size: 17px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: -0.425px;
`;

const CrownIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
`;

const ProfileImage = styled.span`
  width: 40px;
  height: 40px;
  border-radius: var(--MaxRadius);

  background-color: #ddd;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Name = styled.div`
  color: var(--Gray8);
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.45px;
`;

const Distance = styled.span`
  color: var(--Gray6);
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.4px;
`;

const GoCrewMember = styled.span`
  width: 24px;
  height: 24px;
`;

function CrewMemberCard({ rank, name, distance, onClick }) {
  return (
    <CrewMemberCardWrap onClick={onClick}>
      <Rank>
        {rank === 1 && <CrownIcon src="/Illust/crown.svg" alt="1등" />}
        <RankNumber>{rank}</RankNumber>
      </Rank>
      <ProfileSection>
        <ProfileImage>
          <img src="" alt="" />
        </ProfileImage>
        <InfoSection>
          <Name>{name}</Name>
          <Distance>{distance}km</Distance>
        </InfoSection>
      </ProfileSection>
      <GoCrewMember>
        <img src="/Icon/chevron-right-Gray6.svg" alt="" />
      </GoCrewMember>
    </CrewMemberCardWrap>
  );
}

export default CrewMemberCard;
