import React from 'react';
import {icons} from "src/utils/icons";
import styled from "styled-components";
import basketImage from "src/images/basket-image-2.svg";

const Text = styled.div`
  margin-bottom: 100px;
  font-size: ${({ theme }) => theme.font.size[20]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  color: ${({ theme }) => theme.colors.light_gray};
`;
const Background = styled.div`{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  margin-bottom: 64px;

  img {
    width: 100%;
  }  
`;
const EmptyBasket = (props: {children: string}) => {
    return (<Background><img src={basketImage} /></Background>);
};

export default EmptyBasket;