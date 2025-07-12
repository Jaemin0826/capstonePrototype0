import styled from "styled-components";

import Header from "./components/Header";
import RunningData from "./components/RunningData";

import StatusBar from "./components/StatusBar";
import BottomNav from "./components/BottomNav";
import BottomSheet from "./components/BottomSheet";
import RunningGraphModal from "./components/RunningGraphModal";
import Chip from "./components/Chip";
import ChipList from "./components/ChipList";
import MissionCard from "./components/MissionCard";
import CarouselList from "./components/CarouselList";
import WarningModal from "./components/WarningModal";
import Warning from "./components/Warning";
import ParticipantBadge from "./components/ParticipantBadge";

const Mobile = styled.div`
  width: 402px;
  height: 874px;

  background-color: #f3f3f3;
  position: relative;
`;

function JaeminTest() {
  return (
    <>
      <StatusBar />
      <Mobile>
        <RunningGraphModal />
        <Chip text="디폴트칩" />
        <Chip text="세컨더리칩" type="secondary" />
        <Chip text="셀렉티드칩" selected />
        <Chip text="셀렉티드칩" type="secondary" selected />

        <ChipList
          chips={[
            "1번칩",
            "2번칩",
            "3번칩",
            "4번칩",
            "5번칩",
            "6번칩",
            "7번칩",
          ]}
        />
        <Warning />
        <WarningModal />
        <ParticipantBadge />
        <MissionCard />
        <MissionCard end />
        <CarouselList />

        <BottomSheet step="collection" />
      </Mobile>
    </>
  );
}

export default JaeminTest;
