import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import NavBtn from "./NavBtn";

import HomeIcon from "../assets/Icon/home.svg?react";
import RunningIcon from "../assets/Icon/running.svg?react";
import HistoryIcon from "../assets/Icon/history.svg?react";
import MyIcon from "../assets/Icon/my.svg?react";

const BottomNavWrap = styled.div`
  /* width: 100%; */
  display: flex;
  padding: 12px 4px 36px 4px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #fff 100%);
  backdrop-filter: blur(10px);
  width: 402px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.06); */
  border-top: 1px solid #ebeced;
  z-index: 1000;
`;

function BottomNav() {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState("홈");

  const handleNav = (menu, path) => {
    setSelectedMenu(menu);
    navigate(path);
  };

  return (
    <BottomNavWrap>
      <NavBtn
        menu="홈"
        selected={selectedMenu === "홈"}
        onClick={() => handleNav("홈", "/")}
        icon={HomeIcon}
      />
      <NavBtn
        menu="러닝"
        selected={selectedMenu === "러닝"}
        onClick={() => handleNav("러닝", "/running")}
        icon={RunningIcon}
      />
      <NavBtn
        menu="기록"
        selected={selectedMenu === "기록"}
        onClick={() => handleNav("기록", "/history")}
        icon={HistoryIcon}
      />
      <NavBtn
        menu="마이"
        selected={selectedMenu === "마이"}
        onClick={() => handleNav("마이", "/mypage")}
        icon={MyIcon}
      />
    </BottomNavWrap>
  );
}

export default BottomNav;
