import React from 'react';
import Reason, {reason} from "./reason";
import styled from "styled-components";
import {SectionLabel} from "components/shared/fonts/specialFonts";
import {icons} from "src/utils/icons";

const Reasons:reason[] = [
    {icon: icons.whyWeIco1, text: 'Высокое качество продукции за разумную цену.'},
    {icon: icons.whyWeIco2, text: 'Оперативность и гибкая система оплаты, возможность протестировать продукт.'},
    {icon: icons.whyWeIco3, text: 'Индивидуальный подход к каждому клиенту. '},
    {icon: icons.whyWeIco4, text: 'Возможна разработка продукта по запросу клиента.'}
];

const Main = styled.section`
  margin-top: 180px; 
  .mobile &{ margin-top: 0px;}
`;
const ReasonsContainer = styled.div`  
    display: flex; 
    column-gap: 30px;
`;
const WhyWe = () => {
    return (
        <Main>
            <SectionLabel>Почему выбирают нас?</SectionLabel>
            <ReasonsContainer>
                { Reasons.map((it, idx) => <Reason key={idx} reason={it}></Reason>) }
            </ReasonsContainer>
        </Main>
    );
};

export default WhyWe;