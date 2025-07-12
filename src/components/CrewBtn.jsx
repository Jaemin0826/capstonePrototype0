import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

const CrewBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: fit-content;
  height: fit-content;
  position: relative;

  ${({ $type }) =>
    $type === "default"
      ? css`
          cursor: pointer;
          padding: 4px 18px 4px 4px;
          border-top: 1px solid var(--White);
          border-left: 1px solid var(--White);
          border-radius: var(--MaxRadius);
          background: rgba(255, 255, 255, 0.1);
          box-shadow: -4.5px -4.5px 1.5px -5.25px rgba(255, 255, 255, 0.5) inset,
            4.5px 4.5px 1.5px -5.25px rgba(255, 255, 255, 0.5) inset,
            3px 4.5px 1.5px -3px rgba(179, 179, 179, 0.2) inset,
            -3px -4.5px 1.5px -3px #b3b3b3 inset,
            0px 0px 33px 0px rgba(242, 242, 242, 0.5) inset;
          backdrop-filter: blur(18px);
        `
      : css`
          pointer-events: none;
          padding: 0;
        `}
`;

const CrewLogo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background: ${({ $type }) => ($type === "default" ? "#ffffff66" : "#474D71")};
  border-radius: var(--MaxRadius);
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const CrewTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CrewName = styled.span`
  color: var(--Gray-Gray8);
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.45px;
`;

const LevelBadge = styled.span`
  width: 28px;
  height: 28px;
`;

const MemberNum = styled.div`
  display: flex;
  align-items: center;
`;

const MemberIcon = styled.span`
  display: flex;
  width: 16px;
  height: 16px;
`;

const MemberNumText = styled.span`
  font-size: ${({ $type }) => ($type === "default" ? "14px" : "16px")};
  line-height: ${({ $type }) => ($type === "default" ? "14px" : "16px")};
  letter-spacing: ${({ $type }) =>
    $type === "default" ? "-0.35px" : "-0.4px"};
  font-weight: 500;
  color: var(--Gray8);
`;

function CrewBtn({ type = "default" }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (type === "default") {
      navigate("/crew");
    }
  };

  return (
    <CrewBtnWrap onClick={handleClick} $type={type}>
      <CrewLogo $type={type}>
        <img src="/crewimg.png" alt="" />
      </CrewLogo>
      <TextSection>
        <CrewTitle>
          <CrewName>한국공대</CrewName>
          <LevelBadge>
            <img src="/LevelBadge/Lv8.svg" alt="레벨뱃지" />
          </LevelBadge>
        </CrewTitle>
        <MemberNum>
          <MemberIcon>
            <img src="/Icon/crewnumprofile.svg" alt="멤버 수" />
          </MemberIcon>
          <MemberNumText $type={type}>13/20</MemberNumText>
        </MemberNum>
      </TextSection>
    </CrewBtnWrap>
  );
}

export default CrewBtn;
