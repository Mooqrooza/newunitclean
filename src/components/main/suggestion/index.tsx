import React from 'react';
import {icons} from "src/utils/icons";
import ExpositionEllipse from "src/icons/exposition_ellipse";
import ButtonBlue from "components/shared/forms/buttonBlue";
import styled from "styled-components";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {SuggestionType} from "src/utils/types";
import {BASE_URL, URLs} from "src/utils/constants";

const SuggestionStyle = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 50% 50%;
  grid-gap: 16px; gap: 16px;

  @media (max-width : 1460px) {
    & {
      grid-auto-flow: row;
      grid-template-rows: 50% 50%;
      grid-template-columns: none;
    }
  }
  .mobile & {}
`;

const Exposition = styled.div`
  position: relative;
  display: grid;
  justify-content: end;
  width: min-content;
  .mobile & {}
`;

const ExpositionEllipse1 = styled.svg<{background?: string}>`
  fill: ${props => props.background};
  position: absolute;
  right: 20px;
  top: 0px;
  .mobile & {}
`;

const ExpositionEllipse2 = styled.svg<{background?: string}>`
  fill: ${props => props.background};
  margin: 50px 70px 0 0;
  .mobile & {}
`;

const Image = styled.img`
  position: absolute;
  mix-blend-mode: normal;
  max-width: 100%;
  max-height: 100%;
  bottom: -32px;
  right: 56px;
  .mobile & {}
`;

const Title = styled.h1`
  text-align: left;
  line-height: 100px;
  text-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
  font-size: ${({ theme }) => theme.font.size[100]};
  font-weight: ${({ theme }) => theme.font.weight[900]};
  .mobile & {}
`;

const Discount = styled.div`
  position: absolute;
  right: 0px;
  font-size: ${({ theme }) => theme.font.size[35]};
  font-weight: ${({ theme }) => theme.font.weight[900]};
  line-height: normal;

  & div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: grid;
    align-content: center;
  }
  .mobile & {}
`;

const ButtonsStyle = styled(DIV_BUTTON_BLUE_STYLE)`
  font-size: ${({ theme }) => theme.font.size[48]};
  font-weight: ${({ theme }) => theme.font.weight[900]};
  text-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
  width: min-content;
  padding: 0 26px;
  .mobile & {}
`;

const BrowserSuggestion = (props: SuggestionType) => {
    const openProduct = () => {
        window.open(URLs.PRODUCT.replace(':id', '' + props.product.id), '_self');
    }
    return (
        <SuggestionStyle>
            <div>
                <Title>{props.title}</Title>
                <ButtonBlue styled={ButtonsStyle} func={openProduct}>КУПИТЬ</ButtonBlue>
            </div>
            <Exposition>
                <ExpositionEllipse styled={ExpositionEllipse1} background={props.background}></ExpositionEllipse>
                <ExpositionEllipse styled={ExpositionEllipse2} background={props.background}></ExpositionEllipse>
                <Image src={props.product.image && props.product.image.length ? BASE_URL + props.product.image[0] : ''} />
                {
                    props.product.discount
                        ? <Discount>
                            <img src={icons.discount}/>
                            <div>{props.product.discount}<br/>off</div>
                        </Discount>
                        : null
                }
            </Exposition>
        </SuggestionStyle>
    );
};

export default BrowserSuggestion;