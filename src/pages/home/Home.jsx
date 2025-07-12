import styled from "styled-components";
import { useState } from "react";

import CrewBtn from "../../components/CrewBtn";
import MenuBtn from "../../components/MenuBtn";
import SketchfabViewer from "./SketchfabViewer";
import BottomSheet from "../../components/BottomSheet";
import CollectionModal from "../../components/CollectionModal";
import CarouselList from "../../components/CarouselList";
import ParticipantBadge from "../../components/ParticipantBadge";
import Warning from "../../components/Warning";
import WarningModal from "../../components/WarningModal";

const HomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;

  overflow-y: hidden;
  background: linear-gradient(170deg, #ff9191 0%, #71baff 100%);
  height: 100%;

  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const HomeBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;

  position: absolute;
  top: 50px;
  width: 402px;
  z-index: 2;

  padding: 20px 16px 20px;
`;

const CarouselWrap1 = styled.div`
  width: 402px;
  position: absolute;
  bottom: 116px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const CollectionModalWrap1 = styled.div`
  position: absolute;
  top: 140px;
  left: 20px;
  z-index: 1000;
`;

const ParticipantBadgeWrap1 = styled.div`
  position: absolute;
  top: 264px;
  left: 20px;
  z-index: 1000;
`;

const WarningWrap1 = styled.div`
  position: absolute;
  top: 312px;
  left: 20px;
  z-index: 1000;
`;

const WarningModalWrap1 = styled.div`
  position: absolute;
  bottom: 116px;
  left: 20px;
  z-index: 1000;
`;

function Home() {
  const [openBottomSheet, setOpenBottomSheet] = useState(false);
  const [openWarningModal, setOpenWarningModal] = useState(false);
  return (
    <HomeWrap>
      <HomeBtnWrap>
        {/* 크루버튼 */}
        <CrewBtn />
        {/* 메뉴 버튼들(맵, 미션, 도감) */}
        <MenuBtn onClick={() => setOpenBottomSheet(true)} />
      </HomeBtnWrap>
      <CollectionModalWrap1>
        <CollectionModal />
      </CollectionModalWrap1>
      <ParticipantBadgeWrap1>
        <ParticipantBadge />
      </ParticipantBadgeWrap1>
      <WarningWrap1>
        <Warning onClick={() => setOpenWarningModal((prev) => !prev)} />
      </WarningWrap1>
      {openWarningModal && (
        <WarningModalWrap1>
          <WarningModal />
        </WarningModalWrap1>
      )}
      <CarouselWrap1>
        <CarouselList />
      </CarouselWrap1>
      <SketchfabViewer />
      {/* 임시로 분위기 내기~! */}
      <BottomSheet
        step="collection"
        open={openBottomSheet}
        onClose={() => setOpenBottomSheet(false)}
      />
    </HomeWrap>
  );
}

export default Home;
