import React from 'react';
import styled from "styled-components";
import basketImage from "src/images/basket-image-2.svg";

const Background = styled.div`{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  width: calc(25% - 23px);
  margin-bottom: 64px;
  img { width: 100%; }  
  @media (max-width: 1100px) {
    width: calc(33% - 20px);
  }
  @media (max-width: 840px) {
    width: calc(50% - 18px);
  }
  @media (max-width: 520px) {
    width: 100%;
  }
`;
const EmptyBasket = (props: {children: string}) => {
    return (<Background><img src={basketImage}/></Background>);
};

export default EmptyBasket;