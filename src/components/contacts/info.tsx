import React from 'react';
import {INFO} from "src/utils/constants";
import styled from "styled-components";

const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const InfoItem = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
`;
const InfoTitle = styled.div`
  min-width: 120px;
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.font.weight[700]};
  font-size: ${({ theme }) => theme.font.size[20]};
  text-transform: uppercase;
  @media (max-width : 520px) {
    min-width: 90px;
    font-size: ${({ theme }) => theme.font.size[18]};
  }
`;
const Info = styled.div`
  user-select: text;
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  font-size: ${({ theme }) => theme.font.size[18]};
  @media (max-width : 520px) {
    font-size: ${({ theme }) => theme.font.size[16]};
  }
`;
const ContactInfo = () => {
    return (
        <InfoContainer>
            <InfoItem>
                <InfoTitle>Адрес</InfoTitle>
                <Info>{INFO.ADDRESS}</Info>
            </InfoItem>
            <InfoItem>
                <InfoTitle>Телефон</InfoTitle>
                <Info>{INFO.PHONE_NUMBER}</Info>
            </InfoItem>
            <InfoItem>
                <InfoTitle>E-mail</InfoTitle>
                <Info>{INFO.EMAIL}</Info>
            </InfoItem>
        </InfoContainer>
    );
};

export default ContactInfo;