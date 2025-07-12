import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import CrewMemberCard from "../components/CrewMemberCard";

const CrewMemberListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  padding: 20px;
  background-color: var(--White);
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0px 2px;

  & > p {
    color: var(--Gray-Gray9);
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.45px;
  }
`;

const Icon = styled.span`
  display: flex;
  width: 24px;
  height: 24px;
`;

const crewMembers = [
  { rank: 1, name: "구예진", distance: 99.9 },
  { rank: 2, name: "박재민", distance: 24.3 },
  { rank: 3, name: "이영재", distance: 18.7 },
  { rank: 4, name: "김소리", distance: 10.2 },
  { rank: 5, name: "김한주", distance: 6.6 },
];

function CrewMemberList() {
  const navigate = useNavigate();

  return (
    <CrewMemberListWrap>
      <Label>
        <Icon>
          <img src="/Icon/crew.svg" alt="" />
        </Icon>
        <p>크루원</p>
      </Label>
      {crewMembers.map((member) => (
        <CrewMemberCard
          key={member.rank}
          rank={member.rank}
          name={member.name}
          distance={member.distance}
          onClick={() => navigate("/crewMember")}
        />
      ))}
    </CrewMemberListWrap>
  );
}

export default CrewMemberList;
