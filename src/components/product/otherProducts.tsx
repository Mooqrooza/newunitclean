import React, {useCallback, useEffect} from 'react';
import styled from "styled-components";
import {H2} from "components/shared/fonts/specialFonts";
import ProductsList from "components/shared/productsList";
import {useTypedSelector} from "src/store/configureStore";
import {IStateProductList} from "src/reducers/ProductListReducer/ProductListReducer.types";
import {useDispatch} from "react-redux";
import {GetProductList} from "src/actions/ProductListAction/ProductListAction";
import {SectionLabel} from "components/shared/fonts/specialFonts";

const OtherProductsContainer = styled.div`
  .mobile & {}
`;
const OtherProducts = (props: {self: number}) => {
    const state = useTypedSelector((store) => store);
    const productListState = state.ProductList as IStateProductList;
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);
    useEffect(() => {
        stableDispatch(GetProductList());
    }, []);
    return (
        <OtherProductsContainer>
            <SectionLabel>Другие товары</SectionLabel>
            <ProductsList products={productListState.products.filter(product => product.id !== props.self).slice(0, 4)}></ProductsList>
        </OtherProductsContainer>
    );
};

export default OtherProducts;