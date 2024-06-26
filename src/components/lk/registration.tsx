import React, {useState} from 'react';
import styled from "styled-components";
import {
    InputAddress,
    InputCompany,
    InputPhoneNumber, InputState,
    InputFIZ_OR_UR_INN,
    InputUR_KPP, OutputDetail
} from "components/shared/forms/inputText";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {ApiMethod} from "src/api/APIMethod";
import {URLs} from "src/utils/constants";
import {icons} from "src/utils/icons";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 48px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 40px;
  background: ${({ theme }) => theme.colors.grayC };
  .mobile & {}
`;
const FormListContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justyfy-content: center;
gap: 20px;
width: 100%;
border-radius: 40px;
box-sizing: border-box;
background: url(${icons.companyIcon}) no-repeat;
background-color: ${({theme}) => theme.colors.grayC};
background-position: 50px center;
.input-text-wrapper { 
    width: 100%;
    min-width: 200px; 
    max-width: 370px; 
}
.mobile & {}
`;
const ButtonStyle = styled(DIV_BUTTON_BLUE_STYLE)`
  margin-top: 20px;
  width: 220px;
`;
const ButtonSendSuccess = styled(ButtonStyle)`
  width: auto;
  min-width: 220px;
`;
const ButtonSendError = styled(ButtonStyle)`
  width: auto;
  min-width: 220px;
`;
const Registration = () => {
    const form:any = {};
    let setTitle, setInn, setKpp, setUrAddress, setRealAddress, setPhone, setDetail = null;
    [form.title, setTitle] = useState<any>(null);
    [form.inn, setInn] = useState<any>(null);
    [form.official_address, setUrAddress] = useState<any>(null);
    [form.phone_number, setPhone] = useState<any>(null);
    [form.kpp, setKpp] = useState<any>(null);
    [form.real_address, setRealAddress] = useState<any>(null);
    [form.detail, setDetail] = useState<any>(null);
    const [button, setButton] = useState<any>(null);
    const reg = () => {
        if (Object.values(form).map(value => !value || (value as InputState).obj.checkError()).some(error => error)) {
            button.Animate({Styled: ButtonSendError, Children: 'Введенные данные некорректны', timeOut: 2000});
            return false;
        }
        button.Animate({Children: 'Выполняется...'});
        ApiMethod({
            func: 'post', url: '/employee/api/v2/company/create/',
            data: Object.keys(form).reduce((target, key) => ({...target, [key]: form[key].value}), {}),
            auth: true
        })
        .then(success => {
            Object.values(form).map(value => (value as InputState).obj.clear());
            button.Animate({Styled: ButtonSendSuccess, Children: 'Регистрация выполнена', timeOut: 2000});
            window.open(URLs.COMPANY_LK, '_self');
        })
        .catch(error => {
            Object.keys(error.response.data).map(key => {
                if (form[key]) { form[key].obj.setError(error.response.data[key]); }
            });
            button.Animate({Styled: ButtonSendError, Children: 'Введенные данные некорректны', timeOut: 2000});
        })
    }
    return (
        <FormContainer> 
            <FormListContainer>
                <InputCompany placeholder={'Наименование организации'} setObj={setTitle}></InputCompany>
                <InputFIZ_OR_UR_INN placeholder={'ИНН'} setObj={setInn}></InputFIZ_OR_UR_INN>
                <InputAddress placeholder={'Юр. адрес'} setObj={setUrAddress}></InputAddress>
                <InputUR_KPP placeholder={'КПП'} setObj={setKpp}></InputUR_KPP>
                <InputPhoneNumber placeholder={'Телефон'} setObj={setPhone}></InputPhoneNumber>
                <InputAddress placeholder={'Фактический адрес'} setObj={setRealAddress}></InputAddress>
                <OutputDetail setObj={setDetail}></OutputDetail>
                <ButtonBlue styled={ButtonStyle} func={reg} setObj={setButton}>Зарегистрировать</ButtonBlue>
            </FormListContainer>
        </FormContainer>
    );
};

export default Registration;