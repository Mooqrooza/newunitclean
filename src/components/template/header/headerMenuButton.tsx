import React from 'react';
import styled from "styled-components";
import {headerMenuButton} from "src/utils/types";
import HeaderButton from "components/template/header/headerButton";

const HeaderMenuButtonStyle = styled.a`
  cursor: pointer;
  display: grid;
  align-items: center;
  white-space: nowrap;
  padding: 0 5px;
  margin: 0 10px;
  
  &, &:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({theme}) => theme.font.size[15]};
    font-weight: ${({theme}) => theme.font.weight[500]};
    text-transform: uppercase;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`

const HeaderMenuButton = (props: { data: headerMenuButton }) => {
    return (
        <HeaderButton styled={HeaderMenuButtonStyle} href={props.data.href} func={props.data.func} auth={props.data.auth}>
            {props.data.text}
        </HeaderButton>
    );
};

export default HeaderMenuButton;