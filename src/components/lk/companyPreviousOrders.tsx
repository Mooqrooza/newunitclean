import React, {useCallback, useEffect} from 'react';
import {useTypedSelector} from "src/store/configureStore";
import {useDispatch} from "react-redux";
import Order from "components/cart/shared/order";
import {
    IStateCompanyPreviousOrders
} from "src/reducers/CompanyPreviousOrdersReducer/CompanyPreviousOrdersReducer.types";
import {GetCompanyPreviousOrders} from "src/actions/CompanyPreviousOrdersAction/CompanyPreviousOrdersAction";
import TabContent from "components/shared/tabsMenu/tabContent";
import EmptyBasket from "components/shared/productsList/empty";
import {URLs} from "src/utils/constants";
import {SectionLabel} from 'components/shared/fonts/specialFonts';
import styled from "styled-components";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";

const CompanyPreviousOrdersContainer = styled.section`
  .mobile & {}
`;
const EmptyBaskedContainer = styled.div`
  width: 330px;
  height: 280px;
`;
const ButtonContainer = styled.div`
   display: flex;
   margin: 20px 0 0 0;
  .mobile & {}
`;
const Button = styled(DIV_BUTTON_BLUE_STYLE)<{ children?: any }>`
   min-width: 220px;
  .mobile & {}
`;
const CompanyPreviousOrders = () => {
    const CompanyPreviousOrders = useTypedSelector((store) => store.CompanyPreviousOrders);
    const {orders} = CompanyPreviousOrders as IStateCompanyPreviousOrders;
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);
    useEffect(() => {
        stableDispatch(GetCompanyPreviousOrders());
    }, []);
    return (
        <CompanyPreviousOrdersContainer>
            <SectionLabel>История покупок</SectionLabel>
            {
                orders.length ?
                    <TabContent> { orders.reverse().map((order) => <Order key={order.id} order={order}/>) }</TabContent>
                    :
                    <TabContent>
                        <EmptyBaskedContainer>
                            <EmptyBasket>Вы еще не сделали свой первый заказ :(</EmptyBasket>
                        </EmptyBaskedContainer>
                        <ButtonContainer>
                            <Button onClick={() => window.open(URLs.CATALOG, '_self')}>Посмотреть товары</Button>
                        </ButtonContainer>
                    </TabContent>
            }
        </CompanyPreviousOrdersContainer>
    );
};

export default CompanyPreviousOrders;