import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import styled from "styled-components";
import Jaemin from "./Jaemin";
import Yejin from "./Yejin";

const Frame = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;

  gap: 64px;
  overflow-y: hidden;

  & > p {
    font-family: "Paperlogy";
    font-size: 40px;
    font-weight: 700;
    color: #fff;
  }
`;

const Frame2 = styled.div`
  display: flex;
  gap: 12px;

  &:last-child {
    flex-direction: row-reverse;
  }
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-family: "Paperlogy";
  font-size: 24px;
  color: #fff;
  gap: 10px;

  & p {
    font-family: "Paperlogy";
    color: #d3d3d3;
  }
`;

const Name2 = styled(Name)`
  align-items: flex-start;

  & p {
    color: #d3d3d3;
  }
`;

const Profile = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  & > img {
    width: 30px;
    height: 30px;
  }
`;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Frame>
      <Jaemin></Jaemin>
    </Frame>
  </StrictMode>
);
