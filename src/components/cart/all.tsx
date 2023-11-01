import React, {useCallback, useEffect, useState} from 'react';
import ProductsList from "components/shared/productsList";
import ButtonBlue from "components/shared/forms/buttonBlue";
import TabContent from "components/shared/tabsMenu/tabContent";
import Button from "components/cart/shared/button";
import {useDispatch} from "react-redux";
import {IStateCart} from "src/reducers/CartReducer/CartReducer.types";
import {GetCart} from "src/actions/CartAction/CartAction";
import {useTypedSelector} from "src/store/configureStore";
import EmptyBasket from "components/shared/productsList/empty";
import {URLs} from "src/utils/constants";
import {showMoneySum} from "src/utils/functions";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  margin: 40px 0 0 0;
  & .mobile{}
`;
const ButtonBuy = styled(ButtonBlue)`
  width: 260px;
  & .mobile{}
`;
const ButtonShowProducts = styled(ButtonBlue)`
  width: 260px;
  & .mobile{}
`;
const All = () => {
    let [price, setPrice] = useState<any>(null);
    const Cart = useTypedSelector((store) => store.Cart);
    const {cart, isFetching, error} = Cart as IStateCart;
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);
    useEffect(() => {
        stableDispatch(GetCart());
    }, []);
    if (price) { price.state.currentChildren = "Купить за " + showMoneySum(cart.full_price) + " ₽"; }
    const toPayment = () => { window.open(URLs.PAYMENT, '_self'); }
    return (
        cart.product.length ?
            <TabContent>
                <ProductsList products={cart.product} buttons={true} current_size={true}></ProductsList>
                <ButtonContainer>
                    <ButtonBuy func={toPayment} setObj={setPrice}>Купить за {showMoneySum(cart.full_price)} ₽</ButtonBuy>
                </ButtonContainer>
            </TabContent>
            :
            <TabContent>
                <EmptyBasket>Ваша корзина пуста</EmptyBasket>
                <ButtonContainer>
                    <ButtonShowProducts func={() => window.open(URLs.CATALOG, '_self')}>Посмотреть товары</ButtonShowProducts>
                </ButtonContainer>
            </TabContent>
    );
};

export default All;