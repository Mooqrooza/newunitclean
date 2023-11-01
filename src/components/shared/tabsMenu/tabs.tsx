import React from 'react';
import styled from "styled-components";
import {useTypedSelector} from "src/store/configureStore";
import {IStateTabsMenu} from "src/reducers/TabsMenuReducer/TabsMenuReducer.types";

const TabsMain = styled.div<{height?: string}>`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  height: ${props => props.height || 'auto'};
`;
const TabMain = styled.div`
  position: relative;
  transition: left 0.3s;
  margin: 0 0 60px 0;
  &.hidden { display: none; }
  &.mobile{}
`;
const Tab = (props: {children: any, self: number}) => {
    const TabsMenu = useTypedSelector((store) => store.TabsMenu);
    const {pos} = TabsMenu as IStateTabsMenu;
    return (
        <TabMain className={props.self == pos ? '' : 'hidden'} > {props.children}</TabMain>
    )
};
const Tabs = (props: {tabs: any[]}) => {
    return (
        <TabsMain>{ props.tabs.map((tab, i) => <Tab key={i} self={i}>{tab}</Tab>) }</TabsMain>
    );
};

export default Tabs;