import React, {useEffect, useState} from 'react';
import * as constants from "src/utils/constants";
import HeaderContainer from "components/template/header/headerBrowser";
import HeaderContainerMobile from "components/template/header/headerMobile";
import {icons} from "src/utils/icons";

const buttons = [
    {href: constants.URLs.CATALOG, text: "Каталог"},
    {href: constants.URLs.PROMOTION, text: "Акции"},
    /* {href: constants.URLs.PAYMENT, text: "Доставка и оплата"}, */
    {href: constants.URLs.CONTACTS, text: "Контакты"},
    /* {href: constants.URLs.LK, text: "Личный кабинет", icon: icons.lk, auth: true}, */
    /* {href: constants.URLs.CART, text: "Корзина", icon: icons.cart, auth: true} */
]
const Header = (props?: any) => {
    const requireMobileType = () => window.innerWidth < 1210;
    const [mobileType, setMobileType] = useState(requireMobileType());
    let resizeTmr = 0;
    const resizeHandler = function (e:any) {
        clearTimeout(resizeTmr);
        resizeTmr = setTimeout(() => { 
            if (mobileType && !requireMobileType()) { setMobileType(false); } 
            else if (!mobileType && requireMobileType()) { setMobileType(true); }
        }, 100);
    }
    const controllHeaderType = () => {
        clearTimeout(resizeTmr);
        window.removeEventListener('resize', resizeHandler);
        window.addEventListener('resize', resizeHandler);
    }
    useEffect(() => { controllHeaderType(); });
    return (
        <div>
            { mobileType ? 
                <HeaderContainerMobile buttons={buttons} ></HeaderContainerMobile>
                : <HeaderContainer buttons={buttons}></HeaderContainer>
            }
        </div>
    );
};

export default Header;