import React from 'react';
import * as constants from "src/utils/constants";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {icons} from "src/utils/icons";
import logo from "src/icons/header/logo-1.svg";
import { headerMenuButton } from "src/utils/types";
import HeaderFeedbackButton from "components/template/header/headerFeedbackButton";
import {showFeedback} from "components/template/header/headerFuncs";
import HeaderButton from "src/components/template/header/headerButton";
import {CloseMobileMenu, SwitchMobileMenu} from "src/actions/MobileMenuAction/MobileMenuAction";
import {useTypedSelector} from "src/store/configureStore";
import {IStateMobileMenu} from "src/reducers/MobileMenuReducer/MobileMenuReducer.types";
import {URLs} from "src/utils/constants";

const Main = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.04); 
  .mobile & {}
`;
const HeaderTabButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  z-index: 3;
  .mobile & {}
`;
const HeaderTabCloseButton = styled.div`
  display: flex;
  align-items: center;
  margin: 6px 0 0 calc(100% - 24px);
  cursor: pointer;
  z-index: 3;
  .mobile & {}
`;
const LogoStyle = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  & img {
    position: relative;
    height: 24px;
  }
  .mobile & {}
`;
const Logo = () => {
    const home = () => { window.open(URLs.ROOT, '_self');}
    return (<LogoStyle onClick={home}>
        <img src={logo} />
    </LogoStyle>)
}
const LineA = styled.div`
  width: 1px;
  height: 44px;
  margin: 0 15px;
  background: black;
  opacity: 0.1;
  .mobile & {}
`;
const LineB = styled.div`
  width: 100%;
  height: 1px;
  background: black;
  opacity: 0.1;
  .mobile & {}
`;
const MovingTab = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-items: start;
  align-items: center;
  width: 80%;
  min-height: calc(100% + 60px);
  right: -100%;
  top: 0;
  padding: 20px;
  box-sizing: border-box;
  transition: right 0.2s ease-in;
  background: ${({ theme }) => theme.colors.whiteTransparent(0.96)};
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.1);
  z-index: 4;
  &.opened { right: 0; }
  .mobile & {}
`;
const MovingTabMenu = styled.div`
  position: relative;
  display: inline-block;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-width: 180px;
  & div:not(:last-child){ 
    text-align: left;
    margin: 25px 0; 
    padding: 0;
  }
  .mobile & {}
`;
const PhoneNumberText = styled.div`
  user-select: text;
  margin: 10px 0 0 0;
  font-size: ${({ theme }) => theme.font.size[18]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.colors.black};
  .mobile & {}
`;
const MovingTabButton = styled.div`
  padding-left: 16px;
  font-size: ${({ theme }) => theme.font.size[18]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  cursor: pointer;
  .mobile & {}
`;
const LinkButton = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  .mobile & {}
`;
const Link = (props: {data: headerMenuButton}) => {
  return (
      <HeaderButton styled={LinkButton} href={props.data.href} func={props.data.func} auth={props.data.auth}>
          {props.data.text}
      </HeaderButton>
  );
}
const HeaderContainerMobile = (props: { buttons: headerMenuButton[]}) => {
    const MobileMenu = useTypedSelector((store) => store.MobileMenu);
    const {opened} = MobileMenu as IStateMobileMenu;
    const dispatch = useDispatch();
    let touches:number[] = [];
    const touchStart = (event: any) => {
        for (let i = 0; i < event.touches.length; i++) {
            let t = event.touches.item(i);
            if (t) { touches.push(t.screenX); }
        }
    }
    const touchMove = (event: any) => {
        for (let i = 0; i < event.touches.length; i++) {
            let t = event.touches.item(i);
            if (t) { touches.push(t.screenX); }
        }
    }
    const touchEnd = (event: any) => {
        for (let i = 0; i < event.touches.length; i++) {
            let t = event.touches.item(i);
            if (t) { touches.push(t.screenX); }
        }
        if (touches.length > 1) {
            if (touches[touches.length - 2] - touches[touches.length - 1] > 5) { CloseMobileMenu()(dispatch); }
        }
        touches = [];
    }
    const onShowFeedback = () => {
      SwitchMobileMenu()(dispatch);
      showFeedback();
    }
    return (
        <Main>
            <Logo />
            <HeaderTabButton>
                <HeaderButton styled={styled.a``} href={constants.URLs.CART} auth={true} ><img src={icons.header.bag}/></HeaderButton>
            </HeaderTabButton>
            <LineA />
            <HeaderTabButton onClick={() => SwitchMobileMenu()(dispatch)}><img src={icons.header.menu}/></HeaderTabButton>
            <MovingTab className={ opened ? 'opened' : 'closed' } onTouchStart={touchStart} onTouchEnd={touchEnd} onTouchMove={touchMove}>
                <HeaderTabCloseButton onClick={() => SwitchMobileMenu()(dispatch)}><img src={icons.header.close}/></HeaderTabCloseButton>
                <MovingTabMenu>
                    { props.buttons.map((button, i) => <MovingTabButton key={i}><Link data={button} /></MovingTabButton>) }
                    <LineB />
                    <PhoneNumberText>{constants.INFO.PHONE_NUMBER}</PhoneNumberText>
                    <HeaderFeedbackButton data={{ func: onShowFeedback }}></HeaderFeedbackButton>
                </MovingTabMenu>
            </MovingTab>
        </Main>
    );
};

export default HeaderContainerMobile;