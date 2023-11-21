import React, {useCallback, useEffect} from 'react';
import Content from "components/template/content";
import styled from "styled-components";
import Info from "components/product/info";
import Images from "components/product/images";
import OtherProducts from "components/product/otherProducts";
import Banner from "components/shared/duplicateComponents/banner";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "src/store/configureStore";
import {useDispatch} from "react-redux";
import {GetProduct} from "src/actions/ProductAction/ProductAction";
import {IStateProduct} from "src/reducers/ProductReducer/ProductReducer.types";
import Feedback from "components/main/feedback";
import {H3} from "components/shared/fonts/specialFonts";

const ProductContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  box-sizing: border-box;
  .mobile & {}
`;
const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;
  min-height: 200px;
  @media (max-width: 1000px) {
    width: 100%;
  }
  .mobile & {}
`;
const InfoContainer = styled.div`
   max-width: 40%;
   min-width: 280px;
   @media (max-width: 1000px) {
     width: 100%;
     max-width: 100%;
   }
   .mobile & {}
`;
const OtherProductsContainer = styled.section`
  .mobile & {}
`;
const MonthTrendContainer = styled.section`
  .mobile & {}
`;
const Title = styled(H3)`
  padding: 0;
  text-align: left;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: text;
  display: none;
  @media (max-width: 1000px) {
    display: block;
  }
  .mobile & {}
`;
const Product = () => {
    const state = useTypedSelector((store) => store);
    const productState = state.Product as IStateProduct;
    const dispatch = useDispatch();
    let { id } = useParams();
    useEffect(() => {
        GetProduct(id)(dispatch);
    }, []);
    return (
        <Content>
            <ProductContainer>
                <ImagesContainer>
                    <Title>{productState.product.title}</Title>
                    <Images images={productState.product.image ? productState.product.image : []}></Images>
                </ImagesContainer>
                <InfoContainer>
                    <Info data={productState.product}></Info>
                </InfoContainer>
            </ProductContainer>
            <OtherProductsContainer>
                <OtherProducts self={productState.product.id}></OtherProducts>
            </OtherProductsContainer>
            <MonthTrendContainer>
                <Banner header={'Хит продаж'} text={'В честь начала летнего сезона скидки на товары месяца 15%. Успей заказать и в поход!'}></Banner>
            </MonthTrendContainer>
            <Feedback />
        </Content>
    );
};

export default Product;