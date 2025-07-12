import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MenuBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: fit-content;
`;

const MenuItem = styled.div`
  position: relative;
  width: 54px;
  height: 54px;
  border-radius: 12px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-top: 1px solid var(--White);
  border-left: 1px solid var(--White);
  border-radius: 12px;

  box-shadow: -4.5px -4.5px 1.5px -5.25px rgba(255, 255, 255, 0.5) inset,
    4.5px 4.5px 1.5px -5.25px rgba(255, 255, 255, 0.5) inset,
    3px 4.5px 1.5px -3px rgba(179, 179, 179, 0.2) inset,
    -3px -4.5px 1.5px -3px #b3b3b3 inset,
    0px 0px 33px 0px rgba(242, 242, 242, 0.5) inset;
  backdrop-filter: blur(18px);
  cursor: pointer;
`;

/* 🧱 Layer: bottom → 1D1D1D 10% + color-burn */
const LayerBottom = styled.div`
  position: absolute;
  inset: 0;
  background-color: #1d1d1d;
  opacity: 0.1;
  mix-blend-mode: color-burn;
  border-radius: inherit;
  pointer-events: none;
  z-index: 0;
`;

/* 🧱 Layer: base → 1D1D1D 100% + screen */
const LayerBase = styled.div`
  position: absolute;
  inset: 0;
  background-color: #1d1d1d;
  opacity: 0.1;
  mix-blend-mode: color-dodge;
  border-radius: inherit;
  pointer-events: none;
  z-index: 1;
`;

/* 🧱 Layer: top → FFF 10% + normal */
const LayerTop = styled.div`
  position: absolute;
  inset: 0;
  background-color: #ffffff;
  opacity: 0.1;
  mix-blend-mode: normal;
  border-radius: inherit;
  pointer-events: none;
  z-index: 2;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  z-index: 3;
`;

const Label = styled.span`
  color: #293b53;
  text-align: center;
  font-family: Paperlogy;
  font-size: 12px;
  font-weight: 600;
  line-height: 100%;
  position: relative;
  z-index: 3;
`;

const menuItems = [
  { id: "map", label: "맵", icon: "/Illust/map.svg" },
  { id: "collection", label: "도감", icon: "/Illust/collection.svg" },
  { id: "mission", label: "미션", icon: "/Illust/mission.svg" },
];

function MenuBtn({ onClick }) {
  const navigate = useNavigate();

  return (
    <MenuBtnWrap>
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          onClick={() => {
            if (item.id === "mission") {
              navigate("/mission");
            } else if (item.id === "collection") {
              onClick?.(); // 콜백 실행
            }
          }}
        >
          <LayerBottom />
          {/* <LayerBase /> */}
          <LayerTop />
          <Icon src={item.icon} alt={item.label} />
          <Label>{item.label}</Label>
        </MenuItem>
      ))}
    </MenuBtnWrap>
  );
}

export default MenuBtn;
