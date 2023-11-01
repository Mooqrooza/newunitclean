import React from 'react';
import styled from "styled-components";
import {DIV_BUTTON_SOFT_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {LINKS} from "src/utils/constants";

const MarketPlaceStyle = styled.div`
  .mobile & {}
`;
const ButtonStyle = styled(DIV_BUTTON_SOFT_BLUE_STYLE)` 
  width: 220px;
  
  .mobile & {}
`;
const MarketPlace = () => {
    return (
        <MarketPlaceStyle>
            <ButtonBlue styled={ButtonStyle} func={() => { window.open(LINKS.wildberries) }}>Купить на маркетплейсе</ButtonBlue>
        </MarketPlaceStyle>
    );
};

export default MarketPlace;