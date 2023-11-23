import React, {useCallback, useEffect} from 'react';
import styled from "styled-components";
import {DefaultHStyle} from "components/shared/fonts/specialFonts";
import {DIV_BUTTON_BLUE_STYLE, DIV_BUTTON_SOFT_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {useTypedSelector} from "src/store/configureStore";
import {useDispatch} from "react-redux";
import {IStateMostTrading} from "src/reducers/MostTradingReducer/MostTradingReducer.types";
import {GetMostTrading} from "src/actions/MostTradingAction/MostTradingAction";
import {BASE_URL, URLs} from "src/utils/constants";

const BannerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  gap: 30px;
  min-height: 280px;
  padding: 40px;
  border-radius: 60px;
  box-sizing: border-box;
  transition: all 0.25s ease-in-out;
  background: ${({ theme }) => theme.gradients.whiteBlueGradient};
  &:hover {
    box-shadow: ${({theme}) => theme.shadows.shadowA};   
  }
  @media (max-width : 740px) {
    justify-content: center; 
  }
  .mobile & {}
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  align-items: start;
  gap: 20px;
  @media (max-width : 740px) {
    align-items: center; 
  }
  .mobile & {}
`;
const Title = styled.div`
  font-size: ${({ theme }) => theme.font.size[48]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  color: ${({ theme }) => theme.colors.blue};
  text-align: left;
  .mobile & {}
`;

const Description = styled.div`
  font-size: ${({ theme }) => theme.font.size[18]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  color: ${({ theme }) => theme.colors.black};
  text-align: left;
  .mobile & {}
`;
const ButtonStyle = styled(DIV_BUTTON_BLUE_STYLE)`
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  width: 220px;
  &.mobile{}
`;
const Image = styled.div<{src: string}>`
  width: 330px;
  height: 237px;
  background-image: url(${props => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width : 740px) {
    display: none; 
  }
  .mobile & {}
`;
const ImageInInfo= styled(Image)<{src: string}>`
  display: none; 
  margin: 10px 0;
  @media (max-width : 740px) {
    display: block; 
  }
  .mobile & {}
`;
const Banner = (props: {header: string; text: string}) => {
    const MostTrading = useTypedSelector((store) => store.MostTrading);
    const {products} = MostTrading as IStateMostTrading;
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);
    useEffect(() => {
        stableDispatch(GetMostTrading());
    }, []);
    const open = (product_id: number) => {
        window.open(URLs.PRODUCT.replace(':id', '' + product_id), '_self')
    }
    if (products.length) {
        return (
            <BannerStyle>
                <Info>
                    <Title>{props.header}</Title>
                    <Description>{props.text}</Description>
                    <ImageInInfo src={products[0].image && products[0].image.length ? BASE_URL + products[0].image[0] : ''} />
                    <ButtonBlue styled={ButtonStyle} func={() => open(products[0].id)}>Подробнее</ButtonBlue>
                </Info>
                <Image src={products[0].image && products[0].image.length ? BASE_URL + products[0].image[0] : ''} />
            </BannerStyle>
        );
    }
    else { return <div></div> }
};

export default Banner;