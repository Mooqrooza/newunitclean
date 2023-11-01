import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "src/store/configureStore";
import {IStateTabsMenu} from "src/reducers/TabsMenuReducer/TabsMenuReducer.types";
import {TabsMenuSetPos} from "src/actions/TabsMenuAction/TabsMenuAction";

const TabsButtonsContainerStyle = styled.div``;
const TabsButtonsStyle = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  padding: 20px;
  margin: 0 0 50px 0;
  border-radius: 34px;
  gap: 10px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.grayC};
  .sticky & {
    position: fixed;
    justify-content: center;
    width: 100%;
    top: 0;
    left:0;
    margin: 0;
    border-radius: 0;
    box-shadow: ${({theme}) => theme.shadows.shadowA};  
    z-index: 2;
  }
  .mobile & {}
`;
const TabButtonStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  height: 28px;
  padding: 0 20px;
  border-radius: 14px;
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.grayA};
  cursor: pointer;
  .sticky & {
    height: 26px;
    padding: 0 18px;
    font-size: ${({ theme }) => theme.font.size[16]};
  }

  &.selected {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
  }
  .mobile & {}
`;
const Title = styled.div`
  .mobile & {}
`;
const TabButton = (props: { children: any, self: number, parentRef?: any } ) => {
    const TabsMenu = useTypedSelector((store) => store.TabsMenu);
    const {pos} = TabsMenu as IStateTabsMenu;
    const dispatch = useDispatch();
    function click() { 
        const titleContainerEl = props.parentRef?.current;
        const scrollTo = titleContainerEl ? titleContainerEl.offsetTop : 0;
        TabsMenuSetPos(props.self)(dispatch);
        window.scrollTo({
            top: scrollTo,
            behavior: "smooth",
        });        
        
    }
    return (
        <TabButtonStyle className={props.self == pos ? 'selected' : ''} onClick={click}>{props.children}</TabButtonStyle>
    );
};
const TabsButtons = (props: {titles: any[], stickyButtons?: any}) => {
    const ButtonsContainerRef = useRef<HTMLDivElement>(null);
    const processStickyButtons = () => {
        const containerEl = ButtonsContainerRef?.current;
        if (containerEl) { window.onscroll = () => {
             const titleElTop = containerEl.offsetTop;
             const bodyScrollTop = Math.abs(document.body.getBoundingClientRect().top);
             if (bodyScrollTop >= titleElTop) { 
                containerEl.style.height = containerEl.clientHeight+'px';
                containerEl.classList.add("sticky") 
            } 
             else { 
                containerEl.style.height = 'auto';
                containerEl.classList.remove("sticky"); 
            }
        }}
    }
    useEffect(() => {
        if (props.stickyButtons) { processStickyButtons() }
    },[])
    return (
        <TabsButtonsContainerStyle ref={ButtonsContainerRef}>
            <TabsButtonsStyle>
                { props.titles.map((title, i) => (<TabButton self={i} key={i} parentRef={ButtonsContainerRef}> 
                    <Title className={'tab-butons-title'}>{title}</Title> 
                </TabButton>)) }
            </TabsButtonsStyle>
        </TabsButtonsContainerStyle>
    );
};

export default TabsButtons;