import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import YejinTest from "./YejinTest";

import Home from "./pages/home/Home";
import Crew from "./pages/home/Crew";
import CrewMember from "./pages/home/CrewMember";
import FieldHistory from "./pages/home/FieldHistory";
import Mission from "./pages/home/Mission";
import HistoryRecord from "./pages/history/HistoryRecord";

import Running from "./pages/running/Running";
import History from "./pages/history/History";
import RunningRecord from "./pages/running/RunningRecord";
import StatusBar from "./components/StatusBar";
import BottomNav from "./components/BottomNav";

const Mobile = styled.div`
  width: 402px;
  height: 874px;
  position: relative;

  overflow: hidden;
`;

const Scrollable = styled.div`
  height: 100%;
  overflow-y: scroll;
  /* padding-top: 50px; */
  &::-webkit-scrollbar {
    display: none;
  }
`;

function Yejin() {
  return (
    <BrowserRouter>
      <Mobile>
        <StatusBar />
        <Scrollable>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/crewMember" element={<CrewMember />} />
            <Route path="/fieldHistory" element={<FieldHistory />} />
            <Route path="/mission" element={<Mission />} />

            <Route path="/running" element={<Running />} />
            <Route path="/running/record" element={<RunningRecord />} />

            <Route path="/history" element={<History />} />
            <Route path="/history/record" element={<HistoryRecord />} />
            <Route path="/mypage" element={<YejinTest />} />
          </Routes>
        </Scrollable>
        <BottomNav />
      </Mobile>
    </BrowserRouter>
  );
}

export default Yejin;
