import React from 'react';
import styled from "styled-components";
import basketImage from "src/images/basket-image-2.svg";

const EmptyCard = styled.div`{
    position: relative;
    display: flex;
    align-items: end;
    justify-content: center;
    height: 130px;
    margin-bottom: 64px;
    color: ${({ theme }) => theme.colors.blackA};
    font-size: ${({ theme }) => theme.font.size[17]};
    font-weight: ${({ theme }) => theme.font.weight[400]};
    background: url(${basketImage}) no-repeat center;
`;

export default EmptyCard;