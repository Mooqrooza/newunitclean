import React from 'react';
import styled from "styled-components";
import {SectionLabel} from "components/shared/fonts/specialFonts";
import {icons} from "src/utils/icons";

const Main = styled.section`
  .mobile & {}
`;
const Reasons = styled.div`
  display: flex; 
`;
const Reason = styled.div`
  display: flex; 
`;
const WhyWe = () => {
    return (
        <Main>
            <SectionLabel>Почему выбирают нас?</SectionLabel>
            <Reasons>
                <Reason><img alt={''} src={icons.whyWeIco1}/><p>Высокое качество проодукции за разумную цену</p></Reason>
                <Reason><img alt={''} src={icons.whyWeIco2}/><p>Оперативность и гибкая система оплаты, тестировка продукта</p></Reason>
                <Reason><img alt={''} src={icons.whyWeIco3}/><p>Индивидуальный подход к каждому клиенту</p></Reason>
                <Reason><img alt={''} src={icons.whyWeIco4}/><p>Возможна разработка по запросу клиента</p></Reason>
            </Reasons>
        </Main>
    );
};

export default WhyWe;