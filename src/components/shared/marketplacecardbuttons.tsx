import React from 'react';
import styled from "styled-components";
import {LINKS} from "src/utils/constants";
import ozonLogo from "src/images/ozon-logo-1.png";
import yandexLogo from "src/images/yandex-logo-1.png";
import wildberriesLogo from "src/images/wildberries-logo-1.png";
import {SectionLabel} from "components/shared/fonts/specialFonts";
const getDefaultCardButtonStyle = (theme: any) =>`
  width: 30%;
  min-width: 320px;
  height: 300px;
  border-radius: 60px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 82% auto;
  transition: all 0.25s ease-in-out;
  background-color: ${theme.colors.grayC};
  &:hover {
    box-shadow: ${theme.shadows.shadowA};   
  }
`
const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
const CardButtonsContainer = styled.a`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  cursor: pointer;
  .mobile & {}
`;
const OzonButton = styled.div`
  ${({ theme }) => getDefaultCardButtonStyle(theme)};
  background-image: url("${ozonLogo}");
  @media (max-width : 1140px) {
    min-width: 260px;
    height: 200px;
  }
  @media (max-width : 980px) {
    min-width: 140px;
    height: 180px;
  }
  @media (max-width : 680px) {
    min-width: 100%;
    height: 180px;
    background-size: 40% auto;
  }
  @media (max-width : 520px) {
    background-size: 60% auto;
  }
  .mobile & {}
`;
const YandexButton = styled.div`
  ${({ theme }) => getDefaultCardButtonStyle(theme)};
  background-image: url("${yandexLogo}");
  @media (max-width : 1140px) {
    min-width: 260px;
    height: 200px;
  }
  @media (max-width : 980px) {
    min-width: 140px;
    height: 180px;
  }
  @media (max-width : 680px) {
    min-width: 100%;
    height: 180px;
    background-size: 60% auto;
  }
  @media (max-width : 520px) {
   background-size: 80% auto;
 }
  .mobile & {}
`;
const WildberriesButton = styled.div`
  ${({ theme }) => getDefaultCardButtonStyle(theme)};
  background-image: url("${wildberriesLogo}");
  @media (max-width : 1140px) {
   min-width: 260px;
   height: 200px;
  }
  @media (max-width : 980px) {
    min-width: 140px;
    height: 180px;
  }
  @media (max-width : 680px) {
    min-width: 100%;
    height: 180px;
    background-size: 40% auto;
  }
  @media (max-width : 520px) {
   background-size: 60% auto;
 }
  .mobile & {}
`;
export const OzonCardButton = () => {
   return <OzonButton onClick={() => { window.open(LINKS.ozon) }} />
}
export const YandexCardButton = () => {
   return <YandexButton onClick={() => { window.open(LINKS.ya_market) }} />
}
export const WildberriesCardButton = () => {
   return <WildberriesButton onClick={() => { window.open(LINKS.wildberries) }} />
}
export const MarketplaceCardButtons = (props: {title?: string}) => {
   return (
      <MainContainer>
         <SectionLabel>{props.title || 'Мы на маркетплейсах'}</SectionLabel>
         <CardButtonsContainer>
            <OzonCardButton />
            <YandexCardButton />
            <WildberriesCardButton />
         </CardButtonsContainer>
      </MainContainer>
)
}
 
