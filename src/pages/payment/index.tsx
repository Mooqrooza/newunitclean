import React from 'react';
import Content from "components/template/content";
import {MarketplaceCardButtons} from 'components/shared/marketplacecardbuttons';
import {SectionLabel} from 'components/shared/fonts/specialFonts';
import Feedback from "components/main/feedback";
import InputsAndMapWithButtons from "src/components/payment/payment";

const Payment = () => {
    return (
        <Content>
            <SectionLabel>Доставка и оплата</SectionLabel>
            <InputsAndMapWithButtons />
            <MarketplaceCardButtons />
            <Feedback />
        </Content>
    );
};

export default Payment;