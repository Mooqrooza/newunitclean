import React from 'react';
import Content from "components/template/content";
import {SectionLabel} from 'components/shared/fonts/specialFonts';
import privacyPolicyText from 'src/pages/privacyPolicy/privacyPolicyText';
import styled from "styled-components";
import Feedback from "components/main/feedback";

const TextContainer = styled.section``;
const Text = styled.div`
    max-width: 1000px;
    text-wrap: wrap;
    text-align: left;
    white-space: pre-wrap;
    user-select: text;
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.font.size[16]};
    font-weight: ${({ theme }) => theme.font.weight[500]}; 
`;
const PrivacyPolicy = () => {
    return (
        <Content>
            <SectionLabel>Политика в отношении обработки<br/> персональных данных</SectionLabel> 
            <TextContainer><Text>{privacyPolicyText}</Text></TextContainer>
            <Feedback />
        </Content>
    );
};

export default PrivacyPolicy;