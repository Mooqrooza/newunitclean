import React from 'react';
import * as constants from "src/utils/constants";
import HeaderContainer from "components/template/header/headerBrowser";
import HeaderContainerMobile from "components/template/header/headerMobile";
import {isMobile} from "src/utils/isMobile";
import {icons} from "src/utils/icons";

const buttons = [
    {href: constants.URLs.CATALOG, text: "Каталог"},
    {href: constants.URLs.PROMOTION, text: "Акции"},
    {href: constants.URLs.PAYMENT, text: "Доставка и оплата"},
    {href: constants.URLs.CONTACTS, text: "Контакты"},
    {href: constants.URLs.LK, text: "Личный кабинет", icon: icons.lk, auth: true},
    {href: constants.URLs.CART, text: "Корзина", icon: icons.cart, auth: true}
]
const Header = (props?: any) => {
    return (
        <div>
            { isMobile() ? 
                <HeaderContainerMobile buttons={buttons} ></HeaderContainerMobile>
                : <HeaderContainer buttons={buttons}></HeaderContainer>
            }
        </div>
    );
};

export default Header;