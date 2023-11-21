import React, {useCallback, useEffect, useState} from 'react';
import {H3} from "components/shared/fonts/specialFonts";
import {ProductType} from "src/utils/types";
import styled from "styled-components";
import InfoRow from "./infoRow";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {ApiMethod} from "src/api/APIMethod";
import {useDispatch, useSelector} from "react-redux";
import RadioButtons from "components/shared/forms/radioButtons";
import {getAuth} from "src/store/localStorage";
import {WindowsManagerOpen} from "src/actions/WindowsManagerAction/WindowsManagerAction";
import {WINDOW_AUTHORIZATION} from "src/actions/WindowsManagerAction/WindowsManagerAction.types";
import {GetProduct} from "src/actions/ProductAction/ProductAction";
import {showMoneySum} from "src/utils/functions";

const ProductContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;
  .mobile & {}
`;
const Title = styled(H3)`
  padding: 0;
  text-align: left;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: text;
  display: block;
  @media (max-width: 1000px) {
    display: none;
  }
  .mobile & {}
`;
const Price = styled.div<{children: any}>`
  font-size: ${({ theme }) => theme.font.size[32]};
  font-weight: ${({ theme }) => theme.font.weight[600]};
  color: ${({ theme }) => theme.colors.blue};
  user-select: text;
  .mobile & {}
`;
const Description = styled.div`
  width: 100%;
  user-select: text;
  .mobile & {}
`;
const ButtonAddToBasket = styled(ButtonBlue)`
  width: 240px;
  .mobile & {}
`;
const ButtonAutorize = styled(ButtonBlue)`
  width: 240px;
  .mobile & {}
`;
const ButtonSendSuccess = styled(ButtonBlue)`
  .mobile & {}
`;
const ButtonSendError = styled(ButtonBlue)`
  .mobile & {}
`;
const Info = (props: {data: ProductType}) => {
    const auth = getAuth();
    const [size, setSize] = useState(0);
    const [button, setButton] = useState<any>(null);
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);
    const hidePrice: boolean = useSelector((store: any) => store.Settings.hidePrice);
    const openAuth = () => { WindowsManagerOpen(WINDOW_AUTHORIZATION)(dispatch); }
    useEffect(() => {
        if (auth.isAuthorized) { stableDispatch(GetProduct(props.data.id, size)); }
    }, [size]);
    const AddToCart = () => {
        button.Animate({Children: 'Добавляем...'});
        ApiMethod({
            func: 'patch',
            data: { product_id: props.data.id, product_size: size },
            url: '/product/api/v2/order/add_product/',
            auth: true
        })
        .then(success => button.Animate({Styled: ButtonSendSuccess, Children: 'Добавлено в корзину', timeOut: 2000}))
        .catch(error => button.Animate({Styled: ButtonSendError, Children: 'Ошибка', timeOut: 2000}))
    }
    return (
        <ProductContainer>
            <Title>{props.data.title}</Title>
            { hidePrice ?  null : <Price>{props.data.price ? (auth.isAuthorized ? '' : 'от ') + showMoneySum(props.data.price) + ' ₽' : null}</Price> }
            <Description>
                { props.data.description ? <InfoRow title={'Описание'}>{props.data.description}</InfoRow> : null }
                { props.data.sizes?.length ? 
                    <InfoRow title={'Размеры'}><RadioButtons setSize={setSize} buttons={props.data.sizes} /></InfoRow> : null
                }
            </Description>
            { auth.isAuthorized
                ? <ButtonAddToBasket func={AddToCart} setObj={setButton}>Добавить в корзину</ButtonAddToBasket>
                : <ButtonAutorize func={openAuth}>Добавить в корзину</ButtonAutorize>
            }
        </ProductContainer>
    );
};

export default Info;