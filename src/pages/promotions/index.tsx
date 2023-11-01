import React from 'react';
import Shares from "components/promotions/shares";
import Content from "components/template/content";
import {SectionLabel} from 'components/shared/fonts/specialFonts';
import Feedback from "components/main/feedback";

const Promotions = () => {
    return (
        <Content>
            <SectionLabel>Акции и предложения</SectionLabel> 
            <Shares></Shares>
            <Feedback />
        </Content>
    );
};

export default Promotions;