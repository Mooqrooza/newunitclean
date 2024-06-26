import React, {useCallback, useState} from 'react';
import {FormHeader} from "components/shared/fonts/specialFonts";
import {
    InputAddress,
    InputEMail, InputFIO, InputLogin, InputPassword,
    InputPhoneNumber, InputState, OutputDetail,
} from "components/shared/forms/inputText";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {FormContainer, FormListContainer} from "components/shared/forms/form";
import {useDispatch} from "react-redux";
import {DIV_BUTTON_BLUE_STYLE, DIV_BUTTON_SOFT_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import styled from "styled-components";
import {useTypedSelector} from "src/store/configureStore";
import {IStateWindows} from "src/reducers/WindowsManagerReducer/WindowsManagerReducer.types";
import {RegPropsData, RegUser} from "src/actions/RegAction/RegAction";
import {WindowsManagerOpen} from "src/actions/WindowsManagerAction/WindowsManagerAction";
import {WINDOW_AUTHORIZATION} from "src/actions/WindowsManagerAction/WindowsManagerAction.types";

const ButtonStyle = styled(DIV_BUTTON_BLUE_STYLE)`min-width: 220px;`;
const ButtonSendSuccess = styled(ButtonStyle)`min-width: 220px;`;
const ButtonSendError = styled(ButtonStyle)`min-width: 220px;`;
const ButtonAuthStyle = styled(DIV_BUTTON_SOFT_BLUE_STYLE)`min-width: 220px;`;
export const FormList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 20px;
  width: 100%;
  max-width: 360px; 
  min-height: 100px;
  height: auto;
  border-radius: 40px;
  .mobile & {}
`;
export const Registration = () => {
    const WindowsManager = useTypedSelector((store) => store.WindowsManager);
    const {url} = WindowsManager as IStateWindows;
    const form:any = {};
    let setLogin, setFio, setEMail, setPhone, setAddress, setPass1, setPass2, setDetail = null;
    [form.username, setLogin] = useState<any>(null);
    [form.email, setEMail] = useState<any>(null);
    [form.full_name, setFio] = useState<any>(null);
    [form.phone_number, setPhone] = useState<any>(null);
    [form.address, setAddress] = useState<any>(null);
    [form.password, setPass1] = useState<any>(null);
    [form.password2, setPass2] = useState<any>(null);
    [form.detail, setDetail] = useState<any>(null);
    const [button, setButton] = useState<any>(null);
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);
    const reg = () => {
        if (Object.values(form).map(value => !value || (value as InputState).obj.checkError()).some(error => error)) {
            button.Animate({Styled: ButtonSendError, Children: 'Введенные данные некорректны', timeOut: 2000});
            return false;
        }
        button.Animate({Children: 'Выполняется...'});
        stableDispatch(RegUser({
            data: Object.keys(form).reduce((target, key) => ({...target, [key]: form[key].value}), {}) as RegPropsData,
            successFunc: () => {
                Object.values(form).map(value => (value as InputState).obj.clear());
                button.Animate({Styled: ButtonSendSuccess, Children: 'Регистрация выполнена', timeOut: 2000});
                WindowsManagerOpen(WINDOW_AUTHORIZATION)(dispatch);
            },
            errorFunc: (error) => {
                Object.keys(error.response.data).map(key => {
                    if (form[key]) {
                        form[key].obj.setError(error.response.data[key]);
                    }
                });
                button.Animate({Styled: ButtonSendError, Children: 'Введенные данные некорректны', timeOut: 2000});
            }
        }));
    }
    const switchToAuth = () => {
        stableDispatch(WindowsManagerOpen(WINDOW_AUTHORIZATION, url))
    }
    return (
        <FormContainer background={true}>
            <FormHeader>Регистрация</FormHeader>
            <FormListContainer>
                <FormList>
                    <InputLogin placeholder={'Логин'} setObj={setLogin}></InputLogin>
                    <InputFIO placeholder={'ФИО'} setObj={setFio}></InputFIO>
                    <InputEMail placeholder={'E-mail'} setObj={setEMail}></InputEMail>
                    <InputPhoneNumber placeholder={'Телефон'} setObj={setPhone}></InputPhoneNumber>
                    <InputAddress placeholder={'Адрес'} setObj={setAddress}></InputAddress>
                    <InputPassword placeholder={'Пароль'} setObj={setPass1}></InputPassword>
                    <InputPassword placeholder={'Повторите пароль'} setObj={setPass2} infoText={'Пароль должен содержать цифры, латинские буквы и спецсимвол (. , ! %)'}></InputPassword>
                    <OutputDetail setObj={setDetail}></OutputDetail>
                    <ButtonBlue styled={ButtonStyle} func={reg} setObj={setButton}>Зарегистрировать</ButtonBlue>
                    <ButtonBlue styled={ButtonAuthStyle} func={switchToAuth}>Войти</ButtonBlue>
                </FormList>
            </FormListContainer>
        </FormContainer>
    );
};