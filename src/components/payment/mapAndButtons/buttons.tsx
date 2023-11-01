import React from 'react';
import MarketPlace from "components/payment/mapAndButtons/buttons/marketPlace";
import MoreInfo from "components/payment/mapAndButtons/buttons/moreInfo";
import {OzonCardButton, YandexCardButton, WildberriesCardButton} from 'components/shared/marketplacecardbuttons';
import styled from "styled-components";

const CardButtonsContainer = styled.div`
  display: flex;
  gap: 30px;
  .mobile & {}
`;
const MarketplaceCardButtons = () => {
    return (
        <CardButtonsContainer>
            <OzonCardButton />
            <YandexCardButton />
            <WildberriesCardButton />
        </CardButtonsContainer>
    );
};

export default MarketplaceCardButtons;