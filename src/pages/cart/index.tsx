import React from 'react';
import TabsMenu from "components/shared/tabsMenu";
import All from "components/cart/all";
import Favourites from "components/cart/favourites";
import PreviousOrders from "components/cart/previousOrders";
import Content from "components/template/content";
import {SectionLabel} from 'components/shared/fonts/specialFonts';
import styled from "styled-components";
import Feedback from "components/main/feedback";

const GroupsContainer = styled.section`
  & .mobile {}
`;
const Cart = () => {
    return (
        <Content>
            <SectionLabel>Корзина</SectionLabel>
            <GroupsContainer>
                <TabsMenu tabs={[
                    { title: 'Все товары', content: <All />},
                    { title: 'Избранное', content: <Favourites /> },
                    { title: 'Предыдущие заказы', content: <PreviousOrders /> }
                ]} />
            </GroupsContainer>
            <Feedback />
        </Content>
    );
};

export default Cart;