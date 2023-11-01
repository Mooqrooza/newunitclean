import React, {useCallback, useEffect} from 'react';
import ButtonBlue from "components/shared/forms/buttonBlue";
import TabContent from "components/shared/tabsMenu/tabContent";
import EmptyBasket from "components/shared/productsList/empty";
import {useTypedSelector} from "src/store/configureStore";
import {IStatePreviousOrders} from "src/reducers/PreviousOrdersReducer/PreviousOrdersReducer.types";
import {URLs} from "src/utils/constants";
import {GetPreviousOrders} from "src/actions/PreviousOrdersAction/PreviousOrdersAction";
import {useDispatch} from "react-redux";
import Order from "components/cart/shared/order";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  margin: 40px 0 0 0;
  & .mobile{}
`;
const ButtonShowProducts = styled(ButtonBlue)`
  width: 260px;
  & .mobile{}
`;
const PreviousOrders = () => {
    const PreviousOrder = useTypedSelector((store) => store.PreviousOrders);
    const {orders, isFetching, error} = PreviousOrder as IStatePreviousOrders;
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);
    useEffect(() => {
        stableDispatch(GetPreviousOrders());
    }, []);
    return (
        orders.length ?
            <TabContent>{ orders.reverse().map((order) => <Order key={order.id} order={order} />) }</TabContent>
            :
            <TabContent>
                <EmptyBasket>Вы еще не сделали свой первый заказ :(</EmptyBasket>
                <ButtonContainer>
                    <ButtonShowProducts func={() => window.open(URLs.CATALOG, '_self')}>Посмотреть товары</ButtonShowProducts>
                </ButtonContainer>
            </TabContent>
    );
};

export default PreviousOrders;