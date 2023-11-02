import React from 'react';
import Content from "components/template/content";
import {CompanyInfo} from "components/lk/companyInfo";
import CompanyPreviousOrders from "components/lk/companyPreviousOrders";
import {SectionLabel} from 'components/shared/fonts/specialFonts';

const CompanyLk = () => {
    return (
        <Content>
            <SectionLabel>Личный кабинет компании</SectionLabel>
            <CompanyInfo></CompanyInfo>
            <CompanyPreviousOrders></CompanyPreviousOrders>
        </Content>
    );
};

export default CompanyLk;