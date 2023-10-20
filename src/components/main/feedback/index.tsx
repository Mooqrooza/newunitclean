import React, {useState} from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {ApiMethod} from "src/api/APIMethod";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {InputDate, InputFIO, InputPhoneNumber, InputState, OutputDetail} from "components/shared/forms/inputText";
import InputTextField from "components/shared/forms/inputTextField";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {SectionLabel} from "components/shared/fonts/specialFonts";
import feedbackImage from "src/images/feedback-image-1.png";

const Main = styled.section`
  .mobile & {}
`
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 560px;
  padding: 60px 30px;
  box-sizing: border-box;
  border-radius: 60px;
  background-color: ${({ theme }) => theme.colors.grayB};
  background-image: url("${feedbackImage}");
  background-repeat: no-repeat;
  background-position: center
  background-size: cover;
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
  font-weight: ${({ theme }) => theme.font.weight[500]}; 

`;
const ButtonSend = styled(DIV_BUTTON_BLUE_STYLE)`
  width: 220px; 
  margin: 0 auto 0 auto;
`;
const ButtonSendSuccess = styled(ButtonSend)``;
const ButtonSendError = styled(ButtonSend)``;
const Feedback = () => {
    const form:any = {};
    let setName, setPhone, setDate, setComment, setDetail = null;
    [form.full_name, setName] = useState<any>(null);
    [form.phone_number, setPhone] = useState<any>(null);
    [form.date_to_answer, setDate] = useState<any>(null);
    [form.comment, setComment] = useState<any>(null);
    [form.detail, setDetail] = useState<any>(null);
    const [button, setButton] = useState<any>(null);
    const orderCall = () => {
        if (Object.values(form).map(value => !value || (value as InputState).obj.checkError()).some(error => error)) {
            button.Animate({Styled: ButtonSendError, Children: 'Введенные данные некорректны', timeOut: 2000});
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
            button.Animate({Styled: ButtonSendError, Children: 'Введенные данные некорректны', timeOut: 2000});
        });
    }

    return (
        <Main id='feedback'>
            <SectionLabel>Заказать звонок</SectionLabel>
            <Content>
                <Form>
                    <Text>Если у Вас остались вопросы, оставьте контактные данные, и наш менеждер свяжется с Вами в удобное время.</Text>
                    <InputFIO placeholder='Имя' setObj={setName}></InputFIO>
                    <InputPhoneNumber placeholder='Телефон' setObj={setPhone}></InputPhoneNumber>
                    <InputDate placeholder='Когда перезвонить' setObj={setDate}></InputDate>
                    <InputTextField placeholder='Комментарий' setObj={setComment}></InputTextField>
                    <OutputDetail setObj={setDetail}></OutputDetail>
                    <ButtonBlue styled={ButtonSend} func={orderCall} setObj={setButton}>Отправить</ButtonBlue>
                </Form>
            </Content>
        </Main>
    );
};

export default Feedback;