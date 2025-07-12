import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Bar = styled.div`
  width: 402px;
  height: 50px;
  display: flex;
  padding-top: 21px;
  justify-content: space-between;
  box-sizing: border-box;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;

  background-color: ${({ bgColor }) => bgColor};
`;

const Time = styled.span`
  width: 140px;
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  color: var(--Gray);
`;

const StatusIcons = styled.img`
  width: 140px;
  height: auto;
`;

function StatusBar() {
  const location = useLocation();
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      let hour = now.getHours();
      let min = now.getMinutes();
      let displayHour = hour % 12 === 0 ? 12 : hour % 12;
      setTime(`${displayHour}:${min.toString().padStart(2, "0")}`);
    };
    update();
    const timer = setInterval(update, 10000);
    return () => clearInterval(timer);
  }, []);

  const pathname = location.pathname;

  // transparent인 경로 목록
  const transparentPaths = [
    "/",
    "/running",
    "/running/record",
    "/fieldHistory",
    "/history/record",
  ];

  // white로 설정
  const bgColor = transparentPaths.includes(pathname) ? "transparent" : "#fff";

  return (
    <Bar bgColor={bgColor}>
      <Time>{time}</Time>
      <StatusIcons src="/Icon/StatusIcon.svg" alt="status icons" />
    </Bar>
  );
}

export default StatusBar;
