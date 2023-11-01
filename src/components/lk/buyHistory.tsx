import React, {useCallback, useEffect} from 'react';
import {H2} from "components/shared/fonts/specialFonts";
import ProductsList from "components/shared/productsList";
import styled from "styled-components";
import {useTypedSelector} from "src/store/configureStore";
import {IStatePreviousOrders} from "src/reducers/PreviousOrdersReducer/PreviousOrdersReducer.types";
import {useDispatch} from "react-redux";
import {GetPreviousOrders} from "src/actions/PreviousOrdersAction/PreviousOrdersAction";
import {ProductType} from "src/utils/types";
import NoProducts from "components/shared/productsList/noProducts";
import {SectionLabel} from 'components/shared/fonts/specialFonts';

const BuyHistoryContainer = styled.section`
  .mobile & {}
`;

const BuyHistory = () => {
    const PreviousOrder = useTypedSelector((store) => store.PreviousOrders);
    const {orders} = PreviousOrder as IStatePreviousOrders;
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);
    let products:ProductType[] = [];
    orders.map(order => order.product.map(product => products.push(product)));
    useEffect(() => {
        stableDispatch(GetPreviousOrders());
    }, []);
    return (
        <BuyHistoryContainer>
            <SectionLabel>История покупок</SectionLabel>
            { !products.length ?
                  <ProductsList products={products}></ProductsList>
                  :
                  <NoProducts>Вы еще не совершали покупок</NoProducts>
            }
        </BuyHistoryContainer>
    );
};

export default BuyHistory;