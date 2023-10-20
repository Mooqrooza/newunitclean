import React from 'react';
import { useSelector } from 'react-redux';
import {ProductType} from "src/utils/types";
import styled from "styled-components";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {BASE_URL, URLs} from "src/utils/constants";
import {showMoneySum} from "src/utils/functions";

const Price = styled.div`
  .mobile & {}
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 260px;
  padding: 25px;
  box-sizing: border-box;
  border-radius 30px;
  background: ${({theme}) => theme.colors.grayB};
  
  &:hover {
    box-shadow: ${({theme}) => theme.shadows.shadowA};
    transform: scale(1.01);
    transition: all 0.25s ease-in-out;
  }

  @media (max-width: 690px) {}
  .mobile & {}
`
const Image = styled.div<{src: string}>`
  display: block;
  margin: 0 auto;
  background: url("${props => props.src}") no-repeat center;
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius 20px;
  @media (max-width: 690px) {}
  @media (max-width: 500px) {
    width: 60%;
  }
  .mobile & {}
`;
const ProductStyle = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px 20px;
  width: 237px;
  height: 280px;
  text-decoration: none;
  cursor: pointer; 
  @media (max-width: 690px) {
    width: calc(50% - 15px);
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Info = styled.div`
  .mobile & {}
`;
const Title = styled.div`
  max-width: 100%;
  text-align: left;
  text-overflow: ellipsis;
  font-size: ${({ theme }) => theme.font.size[18]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  color: ${({ theme }) => theme.colors.black};
  overflow: hidden;
  .mobile & {}
`;
const Product = (props: {data: ProductType}) => {
    const hidePrice: boolean = useSelector((store: any) => store.Settings.hidePrice);
    return (
        <ProductStyle href={URLs.PRODUCT.replace(':id', '' + props.data.id)}>
            <ImageContainer>
                <Image src={props.data.image && props.data.image.length ? BASE_URL + props.data.image[0] : ''} />
            </ImageContainer>
            <Info>
                <Title>{props.data.title}</Title>
                {hidePrice ?  null :
                    props.data.price ? <Price>Цены от <span>{showMoneySum(props.data.price) + ' руб.'}</span></Price> : null
                }
            </Info>
            
        </ProductStyle>
    );
};

export default Product;