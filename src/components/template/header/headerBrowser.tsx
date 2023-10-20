import React, {useCallback, useEffect, useState} from "react";
import styled, {css} from "styled-components";
import * as constants from "src/utils/constants";
import HeaderMenuButton from "src/components/template/header/headerMenuButton";
import HeaderFeedbackButton from "components/template/header/headerFeedbackButton";
import { headerMenuButton } from "src/utils/types";
import {showFeedback} from "components/template/header/headerFuncs";
import {useTypedSelector} from "src/store/configureStore";
import {IStateWindows} from "src/reducers/WindowsManagerReducer/WindowsManagerReducer.types";
import {WINDOW_SEARCH} from "src/actions/WindowsManagerAction/WindowsManagerAction.types";
import {URLs} from "src/utils/constants";
import {icons} from "src/utils/icons";

const HeaderContainerStyle = styled.div` 
  display: flex;
  justify-content: center;
  height: 100px;
  background: white;
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.04); 
  &.search {
    z-index: 2;
    position: relative;
  }
  .mobile & {}
`;
const HeaderContainerInnerStyle = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 1410px;
  height: 100%;
  .mobile & {}
`
const HeaderButtonsContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
  .mobile & {}
`;
const LogoStyle = styled.div`
  width: 160px;
  height: 30px;
  cursor: pointer;
  & img { height: 100%; }
  .mobile & {}
`;
const Logo = () => {
    const home = () => { window.open(URLs.ROOT, '_self'); }
    return (<LogoStyle onClick={home}>
        <img src={icons.header.logo} />
    </LogoStyle>)
}
const LineStyle = styled.div`
  width: 1px;
  height: 64px;
  margin: 0 18px 0 6px;
  background: black;
  opacity: 0.1;
  .mobile & {}
`
const PhoneFeedbackStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-tems: center;
  justify-content: center;
  .mobile & {}
`
const PhoneNumberText = styled.div`
  user-select: text;
  margin: 10px 0 0 0;
  font-size: ${({ theme }) => theme.font.size[15]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  color: ${({ theme }) => theme.colors.black}
  .mobile & {}
`;
const PphoneFeedback =  (props: {}) => {
    return (<PhoneFeedbackStyled>
        <HeaderFeedbackButton data={{ func: showFeedback }}></HeaderFeedbackButton>
        <PhoneNumberText>{constants.INFO.PHONE_NUMBER}</PhoneNumberText>
    </PhoneFeedbackStyled>)
}
const HeaderContainer = (props: { buttons: headerMenuButton[] }) => {
    const WindowsManager = useTypedSelector((store) => store.WindowsManager);
    const {window} = WindowsManager as IStateWindows;
    return (
        <HeaderContainerStyle className={window == WINDOW_SEARCH ? 'search' : ''}>
            <HeaderContainerInnerStyle>
                <Logo></Logo>
                <HeaderButtonsContainer>
                    { props.buttons.map((button, i) => <HeaderMenuButton data={button} key={i} />) }
                </HeaderButtonsContainer>
                <LineStyle></LineStyle>
                <PphoneFeedback></PphoneFeedback>
            </HeaderContainerInnerStyle>
        </HeaderContainerStyle>
    );
}

export default HeaderContainer;