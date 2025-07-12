import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ParticipantBadgeWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 6px;
  width: fit-content;

  border-radius: 1000px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.71);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(6px);

  /* hover 감지 */
  &:hover {
    cursor: pointer;
  }

  transition: all 0.5s ease-in-out;
  z-index: 1000;
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100px;
  border: 1px solid var(--White);
  overflow: hidden;

  &:not(:last-child) {
    margin-right: ${({ isHovered }) => (isHovered ? "0px" : "-8px")};
  }

  & > img {
    width: 24px;
    height: 24px;
  }
`;

const NumberWrap = styled.div`
  color: var(--Primary);
  font-family: Paperlogy;
  font-size: 14px;
  font-weight: 600;
  margin-left: 4px;
`;

function ParticipantBadge() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const data = [
    { rank: 1, name: "구예진", distance: 99.9 },
    { rank: 2, name: "박재민", distance: 24.3 },
    { rank: 3, name: "이영재", distance: 18.7 },
    { rank: 4, name: "김소리", distance: 10.2 },
    { rank: 5, name: "김한주", distance: 6.6 },
    { rank: 6, name: "나나나", distance: 6.6 },
  ];

  // 최대 표시 수 (기본 3, hover시 6)
  const maxVisible = isHovered ? 6 : 3;
  const visibleMembers = data.slice(0, maxVisible);
  const remainingCount = data.length - maxVisible;

  const handleClick = () => {
    navigate("/fieldHistory");
  };

  return (
    <ParticipantBadgeWrap
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <IconWrap>
        {visibleMembers.map((member) => (
          <Icon key={member.name} isHovered={isHovered}>
            <img src={`/Profile/${member.name}.png`} alt={member.name} />
          </Icon>
        ))}
      </IconWrap>
      {isHovered && <img src="/Icon/chevron-right.svg" />}
      {!isHovered && remainingCount > 0 && (
        <NumberWrap>+{remainingCount}</NumberWrap>
      )}
    </ParticipantBadgeWrap>
  );
}

export default ParticipantBadge;
