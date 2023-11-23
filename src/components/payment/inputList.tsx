import React, {useCallback, useEffect, useState } from 'react'; 
import {
    InputAddress,
    InputFIO,
    InputPhoneNumber, InputPromoCode, InputState, OutputDetail,
} from "components/shared/forms/inputText";
import styled from "styled-components";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {Select} from "components/shared/forms/select";
import {useDispatch} from "react-redux";
import {ApiMethod} from "src/api/APIMethod";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {CheckBox} from "src/components/shared/forms/checkBox";
import {icons} from "src/utils/icons";
import {useTypedSelector} from "src/store/configureStore";
import {IStateCart} from "src/reducers/CartReducer/CartReducer.types";
import {GetCart} from "src/actions/CartAction/CartAction";
import {URLs, DELIVERY} from "src/utils/constants";
import {WindowsManagerOpen} from "src/actions/WindowsManagerAction/WindowsManagerAction";
import {WINDOW_AUTHORIZATION} from "src/actions/WindowsManagerAction/WindowsManagerAction.types";
import {setPickupAddress} from "src/actions/DeliveryAction/DeliveryAction";
import {getAuth} from "src/store/localStorage";
import * as constants from "src/utils/constants";

const InputListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: start;
  .input-text-wrapper, .select-wrapper { 
    min-width: 420px; 
  }
  @media (max-width : 1160px) {
    width: 100%;

    .input-text-wrapper, .select-wrapper { 
        max-width: 420px; 
        min-width: 60%;
    }
  }
  .mobile & {}
`;
const ButtonOrderStyle = styled(DIV_BUTTON_BLUE_STYLE)`
  align-self: flex-start;
  max-width: 100%;
  min-width: 220px;
  margin: 10px 0 0 0;
  .mobile & {}
`;
const SuccessPromoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 52px;
  padding: 10px 20px;
  border-radius: 27px;
  border: 1px solid ${ ({theme}) => theme.colors.grayB };
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  color: ${({ theme }) => theme.colors.black};
  .mobile & {}
`;
const SuccessPromoText = styled.div`
  .mobile & {}
`;
const SuccessPromoDrop = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  display: grid;
  align-content: center;
  padding-right: 12px;
  cursor: pointer;
  .mobile & {}
`;
const UserAgreementCheckBoxContainer = styled.div`
  max-width: 420px;
 .mobile & {}
`;
const SuccessPromo = (props: {text: string; func: () => void}) => {
    return (
        <SuccessPromoContainer>
            <SuccessPromoText>{props.text}</SuccessPromoText>
            <SuccessPromoDrop><img src={icons.dropInput} onClick={props.func} /></SuccessPromoDrop>
        </SuccessPromoContainer>
    )
}
const InputList = () => {
    const pickupAddress = DELIVERY.PICKUP_ADDRESS || [];
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);
    const form:any = {};
    const auth = getAuth();
    let setFio, setPhone, setAddress, setPaymentType, setDetail, setMessage , setUserAgreemnet = null; 
    [form.full_name, setFio] = useState<any>(null);
    [form.phone_number, setPhone] = useState<any>(null);
    [form.address, setAddress] = useState<any>(null);
    [form.payment_type, setPaymentType] = useState<any>(null);
    [form.detail, setDetail] = useState<any>(null);
    [form.message, setMessage] = useState<any>(null);  
    [form.userAgreemnet, setUserAgreemnet] = useState<any>(null);
    const [receivingType, setReceivingType] = useState<any>(true);
    const changeReceivingType = (dt: { value:string }) => {
        setReceivingType(dt.value);
        form.receiving_type = dt;
    }
    const selectPickupAddress = (dt: { value:string }) => {
        setPickupAddress(dt.value)(dispatch);
        form.address = dt.value;  
    }
    const [promo, setPromo] = useState<any>(null);
    const [successPromo, setSuccessPromo] = useState('');
    const [button, setButton] = useState<any>(null);
    const Cart = useTypedSelector((store) => store.Cart);
    const {cart, isFetching, error} = Cart as IStateCart;
    useEffect(() => { stableDispatch(GetCart()); }, []);
    useEffect(() => { if (promo && promo.value && !promo.active && !promo.error) { addPromo(); } }, [promo]);
    const openAuth = () => { WindowsManagerOpen(WINDOW_AUTHORIZATION)(dispatch); }
    const dropPromo = () => {
        ApiMethod({ 
            func: 'delete', url: '/product/api/v2/order/delete_promo_code/', auth: true 
        }).then(success => setSuccessPromo('')).catch(error => setSuccessPromo(''));
    }
    const addPromo = () => {
        ApiMethod({
            func: 'patch', url: '/product/api/v2/order/add_promo_code/',
            data: { promo_code: promo.value },
            auth: true
        }).then((success:any) => setSuccessPromo(success.promo_code)).catch(error => promo.obj.setState({error: true}))
    }
    const order = () => {
        if (Object.values(form).map(value => !value || (value as InputState).obj.checkError()).some(error => error)) {
            button.Animate({Styled: ButtonOrderStyle, Children: 'Данные некорректны', timeOut: 2000});
            return false;
        }
        button.Animate({Children: 'Выполняется...'});
        ApiMethod({
            func: 'patch', url: '/product/api/v2/order/',
            data: Object.keys(form).reduce((target, key) => ({...target, [key]: form[key].value}), {}),
            auth: true
        })
        .then(success => {
            Object.values(form).map(value => (value as InputState).obj.clear());
            setSuccessPromo('');
            button.Animate({Styled: ButtonOrderStyle, Children: 'Заказ оформлен', timeOut: 2000});
        })
        .catch(error => {
            Object.keys(error.response.data).map(key => {
                if (form[key]) { form[key].obj.setError(error.response.data[key]); }
            });
            button.Animate({Styled: ButtonOrderStyle, Children: 'Данные некорректны', timeOut: 2000});
        })
    }
    const toCart = () => { window.open(URLs.CART, '_self'); }
    const buttonOrderShow = auth.isAuthorized && cart.product.length;
    const buttonEmptyCardShow = auth.isAuthorized && !cart.product.length;
    const buttonUnAutorizedShow = !auth.isAuthorized;
    return (
        <InputListContainer className={(auth.isAuthorized ? 'autorized' : 'unauthed ') + (cart.product.length ? 'cart' : 'emptyсart')}>
            <InputFIO placeholder={'Укажите ваше ФИО'} setObj={setFio}></InputFIO>
            <InputPhoneNumber placeholder={'Укажите ваш номер телефона'} setObj={setPhone}></InputPhoneNumber>
            <Select defaultOption={{value: '', text: 'Выберите способ доставки'}} setObj={changeReceivingType} options={[
                {value: 'САМОВЫВОЗ', text: 'Самовывоз'},
                {value: 'ДОСТАВКА', text: 'Доставка'}
            ]}></Select>
            {
                receivingType === 'САМОВЫВОЗ' ? 
                    <Select defaultOption={{value: '', text: 'Выберите адрес самовывза'}} setObj={selectPickupAddress} 
                        options={ pickupAddress.map((vl) => ({ value: vl.TITLE,  text: vl.ADDRESS })) }
                    ></Select>
                    :
                    <InputAddress placeholder={'Укажите адрес доставки'} setObj={setAddress}></InputAddress>
            }
            <Select defaultOption={{value: '', text: 'Выберите способ оплаты'}} setObj={setPaymentType} options={[
                {value: 'КАРТОЙ', text: 'Картой'},
                {value: 'НАЛИЧНЫМИ', text: 'Наличными'}
            ]}></Select>
            {
                successPromo ?
                    <SuccessPromo text={successPromo} func={dropPromo} />
                    :
                    <InputPromoCode placeholder={'Введите промокод'} setObj={setPromo}></InputPromoCode>
            }
            <OutputDetail setObj={setMessage}></OutputDetail>
            <OutputDetail setObj={setDetail}></OutputDetail>
            <UserAgreementCheckBoxContainer>
                <CheckBox label={<div>Даю согласие на обработку персональных данных согласно с <a href={constants.URLs.PRIVACY_POLICY}>политикой конфиденциальности</a></div>} require={true} setObj={setUserAgreemnet} />
            </UserAgreementCheckBoxContainer> 
            {buttonOrderShow ? <ButtonBlue styled={ButtonOrderStyle} func={order} setObj={setButton}>Заказать</ButtonBlue> : null}
            {buttonEmptyCardShow ? <ButtonBlue styled={ButtonOrderStyle} func={toCart}>Добавьте товары в корзину</ButtonBlue> : null}
            {buttonUnAutorizedShow ? <ButtonBlue styled={ButtonOrderStyle} func={openAuth}>Заказать</ButtonBlue> : null}
        </InputListContainer>
    );
};

export default InputList;