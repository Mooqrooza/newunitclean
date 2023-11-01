import React from 'react';
import ContactsInfo from "src/components/contacts/info";
import Content from "components/template/content";
import styled from "styled-components";
import {SectionLabel} from 'components/shared/fonts/specialFonts';
import {MarketplaceCardButtons} from 'components/shared/marketplacecardbuttons';
import Feedback from "components/main/feedback";

const Contacts = () => {
    return (
        <Content>
            <SectionLabel>Контакты</SectionLabel>
            <ContactsInfo />
            <MarketplaceCardButtons title={'Наши партнеры'}/>
            <Feedback />
        </Content>
    );
};

export default Contacts;