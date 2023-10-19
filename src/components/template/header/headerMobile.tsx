import React from 'react';
import * as constants from "src/utils/constants";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {icons} from "src/utils/icons";
import logo from "src/icons/header/logo-1.svg";
import { headerMenuButton } from "src/utils/types";
import HeaderButton from "components/template/header/headerButton";
import {CloseMobileMenu, SwitchMobileMenu} from "src/actions/MobileMenuAction/MobileMenuAction";
import {useTypedSelector} from "src/store/configureStore";
import {IStateMobileMenu} from "src/reducers/MobileMenuReducer/MobileMenuReducer.types";
import {URLs} from "src/utils/constants";

const HeaderTab = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  background: ${({ theme }) => theme.colors.white};
`;
const HeaderTabButton = styled.div`
  display: flex;
  align-items: center;
  z-index: 3;
`;
const HeaderTabCloseButton = styled.div`
  display: flex;
  align-items: center;
  margin: 6px 0 0 calc(100% - 24px);
  z-index: 3;
`;
const LogoStyle = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  & img {
    position: relative;
    height: 24px;
  }
`;
const Logo = () => {
    const home = () => { window.open(URLs.ROOT, '_self');}
    return (<LogoStyle onClick={home}>
        <img src={logo} />
    </LogoStyle>)
}
const VLineStyle = styled.div`
    width: 1px;
    height: 44px;
    margin: 0 15px;
    background: black;
    opacity: 0.1;
`
const HLineStyle = styled.div`
    width: 100%;
    height: 1px;
    background: black;
    opacity: 0.1;
`
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
`;
const MovingTabMenu = styled.div`
    position: relative;
    display: inline-block;
    flex-direction: column;
    align-items: center;
    flex: 1;
    & div{ 
        text-align: left;
        margin: 25px 0; 
        padding: 0;
    }
`;
const PhoneNumberText = styled.div`
    user-select: text;
    margin: 10px 0 0 0;
    font-size: ${({ theme }) => theme.font.size[18]};
    font-weight: ${({ theme }) => theme.font.weight[400]};
    color: ${({ theme }) => theme.colors.black}
`;
const MovingTabButton = styled.div`
  padding-left: 16px;
  font-size: ${({ theme }) => theme.font.size[18]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
`;
const MobileButtonStyle = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;

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
    return (
        <HeaderTab>
            <Logo />
            <HeaderTabButton>
                <HeaderButton styled={styled.a``} href={constants.URLs.CART} auth={true} ><img src={icons.header.bag}/></HeaderButton>
            </HeaderTabButton>
            <VLineStyle />
            <HeaderTabButton onClick={() => SwitchMobileMenu()(dispatch)}><img src={icons.header.menu}/></HeaderTabButton>
            <MovingTab className={ opened ? 'opened' : 'closed' } onTouchStart={touchStart} onTouchEnd={touchEnd} onTouchMove={touchMove}>
                <HeaderTabCloseButton onClick={() => SwitchMobileMenu()(dispatch)}><img src={icons.header.close}/></HeaderTabCloseButton>
                <MovingTabMenu>
                    { props.buttons.map((button, i) => <MovingTabButton key={i}><MobileButton data={button} /></MovingTabButton>) }
                    <HLineStyle />
                    <PhoneNumberText>{constants.INFO.PHONE_NUMBER}</PhoneNumberText>
                </MovingTabMenu>
                
            </MovingTab>
        </HeaderTab>
    );
};

const MobileButton = (props: {data: headerMenuButton}) => {
    return (
        <HeaderButton styled={MobileButtonStyle} href={props.data.href} func={props.data.func} auth={props.data.auth}>
            {props.data.text}
        </HeaderButton>
    );
}

export default HeaderContainerMobile;