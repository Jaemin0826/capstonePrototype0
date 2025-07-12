import styled from "styled-components";
import TabNavItem from "./TabNavItem";
import { useState } from "react";

const NavBox = styled.div`
  display: flex;
  padding: 0px 20px;
  background-color: var(--White);

  z-index: 101;
`;

function TabNav({ tabs }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <NavBox>
      {tabs.map((Name, index) => (
        <TabNavItem
          key={index}
          Name={Name}
          selected={selectedTab === Name}
          onClick={() => setSelectedTab(Name)}
        ></TabNavItem>
      ))}
    </NavBox>
  );
}

export default TabNav;
