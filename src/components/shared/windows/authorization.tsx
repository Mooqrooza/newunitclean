import React, {useCallback, useState} from 'react';
import styled from "styled-components";
import {FormContainer} from "components/shared/forms/form";
import {FormHeader} from "components/shared/fonts/specialFonts";
import {
    InputLoginOrEMail, InputPassword, 
    InputState, OutputDetail,
} from "components/shared/forms/inputText";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {DIV_BUTTON_BLUE_STYLE, DIV_BUTTON_SOFT_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {LoginUser} from "src/actions/AuthAction/AuthAction";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "src/store/configureStore";
import {IStateWindows} from "src/reducers/WindowsManagerReducer/WindowsManagerReducer.types";
import {WindowsManagerClear, WindowsManagerOpen} from "src/actions/WindowsManagerAction/WindowsManagerAction";
import {WINDOW_REGISTRATION} from "src/actions/WindowsManagerAction/WindowsManagerAction.types";

const ButtonStyle = styled(DIV_BUTTON_BLUE_STYLE)`
  min-width: 220px;
`;
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
const ButtonSendSuccess = styled(ButtonStyle)` min-width: 220px;`;
const ButtonSendError = styled(ButtonStyle)` min-width: 220px;`;
const ButtonRegStyle = styled(DIV_BUTTON_SOFT_BLUE_STYLE)` width: 220px;`;
export const Authorization = () => {
    const WindowsManager = useTypedSelector((store) => store.WindowsManager);
    const {url} = WindowsManager as IStateWindows;
    const form:any = {
        username: null,
        password: null,
        detail: null,
    };
    let setLogin, setPass, setDetail = null;
    [form.username, setLogin] = useState<any>(null);
    [form.password, setPass] = useState<any>(null);
    [form.detail, setDetail] = useState<any>(null);
    const [button, setButton] = useState<any>(null);
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);
    const auth = () => {
        if (Object.values(form).map(value => !value || (value as InputState).obj.checkError()).some(error => error)) {
            button.Animate({Styled: ButtonSendError, Children: 'Введенные данные некорректны', timeOut: 2000});
            return false;
        }
        button.Animate({Children: 'Выполняется...'});
        LoginUser({username: form.username.value, password: form.password.value})(stableDispatch)
        .then(success => {
                Object.values(form).map(value => (value as InputState).obj.clear())
                button.Animate({Styled: ButtonSendSuccess, Children: 'Вход выполнен', timeOut: 2000});
                WindowsManagerClear()(dispatch);
                if (url) { window.open(url, '_self'); }
                else { window.location.reload(); }
        })
        .catch(error => {
            Object.keys(error.response.data).map(key => {
                if (form[key]) { form[key].obj.setError(error.response.data[key]); }
            });
            button.Animate({Styled: ButtonSendError, Children: 'Неверный логин или пароль', timeOut: 2000});
        });
    }
    const switchToReg = () => { stableDispatch(WindowsManagerOpen(WINDOW_REGISTRATION, url)) };
    return (
        <FormContainer background={true}>
            <FormHeader>Вход</FormHeader>
                <FormList>
                    <InputLoginOrEMail placeholder={'Логин или E-mail'} name='login' setObj={setLogin}></InputLoginOrEMail>
                    <InputPassword placeholder={'Пароль'} name='password' setObj={setPass}></InputPassword>
                    <OutputDetail setObj={setDetail}></OutputDetail>
                    <ButtonBlue styled={ButtonStyle} func={auth} setObj={setButton}>Войти</ButtonBlue>
                    <ButtonBlue styled={ButtonRegStyle} func={switchToReg}>Регистрация</ButtonBlue>
                </FormList>
        </FormContainer>
    );
};