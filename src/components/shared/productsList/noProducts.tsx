import React from 'react';
import styled from "styled-components";
import basketImage from "src/images/basket-image-2.svg";

const Background = styled.div`{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    margin-bottom: 64px;
    img { width: 100%; }  
  `;
const EmptyBasket = (props: {children: string}) => {
    return (<Background><img src={basketImage}/></Background>);
};

export default EmptyBasket;