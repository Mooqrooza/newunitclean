import React, {useCallback} from 'react';
import styled, {css} from "styled-components";
import {headerMenuButton} from "src/utils/types";
import HeaderButton from "components/template/header/headerButton";
import {icons} from "src/utils/icons";

const HeaderFeedbackButtonStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 34px;
    background-image: url("${icons.header.phone}");
    background-repeat: no-repeat;
    background-position: 6px  center;
    background-color: ${({ theme }) => theme.colors.whiteOrange};
    font-size: ${({ theme }) => theme.font.size[13]};
    font-weight: ${({ theme }) => theme.font.weight[600]};
    color: ${({ theme }) => theme.colors.black};
    letter-spacing: -.02em;
    text-transform: uppercase;
    border-radius: 17px;
    cursor: pointer; 
`
const TextStyled = styled.div`
  padding: 0 0 0 14px;
`
const HeaderFeedbackButton = (props: { data: headerMenuButton }) => {
    return (
        <HeaderButton styled={HeaderFeedbackButtonStyle} href={props.data.href} func={props.data.func} auth={props.data.auth}>
            <TextStyled>Заказать звонок</TextStyled>
        </HeaderButton>
    );
};

export default HeaderFeedbackButton;