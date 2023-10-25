import React from 'react';
import styled from "styled-components";
import {headerMenuButton} from "src/utils/types";
import HeaderButton from "src/components/template/header/headerButton";

const Main = styled.a`
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding: 0 10px;
  margin: 0 5px;
  cursor: pointer;

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
  @media (max-width: 1360px) {
    font-size: ${({theme}) => theme.font.size[14]};
    padding: 4;
    margin: 0;
  }
  .mobile & {}
`;
const HeaderMenuButton = (props: { data: headerMenuButton }) => {
    return (
        <HeaderButton styled={Main} href={props.data.href} func={props.data.func} auth={props.data.auth}>
            {props.data.text}
        </HeaderButton>
    );
};

export default HeaderMenuButton;