import styled from "styled-components";

import Header from "./components/Header";
import Button from "./components/Button";
import CrewBtn from "./components/CrewBtn";
import MenuBtn from "./components/MenuBtn";

import StatusBar from "./components/StatusBar";
import BottomNav from "./components/BottomNav";
import BottomSheet from "./components/BottomSheet";

const Mobile = styled.div`
  width: 402px;
  height: 874px;

  background-color: #fff;
  position: relative;
`;

const HomeBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  background: linear-gradient(170deg, #ff9191 0%, #71baff 100%);
  padding: 20px 16px 20px;
`;

function YejinTest() {
  return (
    <>
      <StatusBar />
      <Mobile>
        {/* Header */}
        <Header title="타이틀" />
        <Header showBackButton={true} />
        <Header title="타이틀+아이콘" showBackButton={true} />
        {/* Button */}
        <Button type="default" size="large" text="기본 버튼" />
        <Button type="secondary" size="small" text="세컨더리 버튼" />
        <Button
          type="secondary"
          size="small"
          text="단위가 있는 버튼"
          unit="개"
          unitText="/ 20"
          unitToggle={true}
        />
        <Button type="secondary" size="small" text="width 지정" width="200px" />
        <Button type="disabled" size="small" icon={true} />
        {/* <BottomSheet step="ing" type="running" /> */}
        {/* <HomeBtnWrap>
          CrewBtn
          <CrewBtn />
          MenuBtn
          <MenuBtn />
        </HomeBtnWrap> */}
      </Mobile>
      <BottomNav />
    </>
  );
}

export default YejinTest;
