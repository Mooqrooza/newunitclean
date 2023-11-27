import React, {useState} from 'react';
import styled from "styled-components";
import {ApiMethod} from "src/api/APIMethod";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {InputFIO, InputPhoneNumber, InputState, OutputDetail, InputDate} from "components/shared/forms/inputText";
import {CheckBox} from "src/components/shared/forms/checkBox";
import InputTextField from "components/shared/forms/inputTextField";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {SectionLabel} from "components/shared/fonts/specialFonts";
import feedbackImage from "src/images/feedback-image-1.png";
import {getFormatedData} from 'src/utils/functions';
import * as constants from "src/utils/constants";

const Main = styled.section`
  .mobile & {}
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 560px;
  padding: 60px 20px;
  box-sizing: border-box;
  border-radius: 60px;
  background-color: ${({ theme }) => theme.colors.grayC};
  background-image: url("${feedbackImage}");
  background-repeat: no-repeat;
  background-position: 10% 10%;
  @media (max-width: 800px) { border-radius: 40px; }
  .mobile & {}
`;
const Form =  styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap:20px 20px;
  width: 450px;
  .mobile & {}
`;
const Text = styled.div`
  display: inline-block;
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.font.size[18]};
  font-weight: ${({ theme }) => theme.font.weight[400]}; 
  .mobile & {}
`;
const ButtonSend = styled(DIV_BUTTON_BLUE_STYLE)`
  self-align: start;
  min-width: 220px; 
  max-width: 100%;
  margin: 10px auto 0 auto;
  .mobile & {}
`;
const ButtonSendSuccess = styled(ButtonSend)``;
const ButtonSendError = styled(ButtonSend)``;
const Feedback = () => {
    const form:any = {};
    let setName, setPhone, setComment, setUserAgreemnet, setDetail, setDate = null;
    [form.full_name, setName] = useState<any>(null);
    [form.phone_number, setPhone] = useState<any>(null);
    [form.comment, setComment] = useState<any>(null);
    [form.userAgreemnet, setUserAgreemnet] = useState<any>(null);
    [form.date_to_answer, setDate] = useState<any>(null);
    [form.detail, setDetail] = useState<any>(null);
    const [button, setButton] = useState<any>(null);
    const orderCall = () => {
        const collectedValues = Object.values(form).map(value => !value || (value as InputState).obj.checkError());
        const hasError = collectedValues.some(error => error);
        console.log(form)
        if (hasError) {
            button.Animate({Styled: ButtonSendError, Children: 'Данные некорректны', timeOut: 2000});
            return false;
        }
        button.Animate({Children: 'Выполняется...'});
        ApiMethod({
            func: 'post', url: '/employee/api/v2/call_order/',
            data: Object.keys(form).reduce((target, key) => ({...target, [key]: form[key].value}), {})
        })
        .then(success => {
            Object.values(form).map(value => (value as InputState).obj.clear())
            button.Animate({Styled: ButtonSendSuccess, Children: 'Заявка отправлена', timeOut: 2000});
        })
        .catch(error => {
            Object.keys(error.response.data).map(key => {
                if (error.response.data[key]) { form[key].obj.setError(error.response.data[key]); }
            });
            button.Animate({Styled: ButtonSendError, Children: 'Данные некорректны', timeOut: 2000});
        });
    }
    return (
        <Main id='feedback'>
            <SectionLabel>Заказать звонок</SectionLabel>
            <Content>
                <Form>
                    <Text>Оставьте Ваш телефон и наш менеджер свяжется с Вами в ближайшее время.</Text>
                    <InputFIO placeholder='Имя' setObj={setName}></InputFIO>
                    <InputPhoneNumber placeholder='Телефон' setObj={setPhone}></InputPhoneNumber>
                    <InputTextField placeholder='Комментарий' setObj={setComment}></InputTextField>
                    <InputDate placeholder='Когда перезвонить' setObj={setDate} hidden={true} defaultValue={getFormatedData(new Date, 'yyyy-mm-dd')}></InputDate>
                    <OutputDetail setObj={setDetail} hidden={true}></OutputDetail>
                    <CheckBox label={<div>Даю согласие на обработку персональных данных согласно с <a href={constants.URLs.PRIVACY_POLICY}>политикой конфиденциальности</a></div>} require={true} setObj={setUserAgreemnet} />
                    <ButtonBlue styled={ButtonSend} func={orderCall} setObj={setButton}>Отправить</ButtonBlue>
                </Form>
            </Content>
        </Main>
    );
};

export default Feedback;