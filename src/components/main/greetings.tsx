import React from 'react';
import {H1Main} from "components/shared/fonts/specialFonts";
import { LabelInfoGroup } from "components/shared/forms/labelInfo";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import styled from "styled-components";
import mainImage from "src/images/car-illustration-1.png";

const Main = styled.section`
   position: relative;
   width: 100%;
   height: 600px;
   border-radius: 80px;
   background: ${({ theme }) => theme.gradients.softBlueGradient};
  
   .mobile & {

   }
`;
const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 50%;
  height: 100%;
  padding: 0 0 0 5%;
`;
const Maintext = styled(H1Main)`
  margin: 0 0 20px 0;
`;
const Button = styled(DIV_BUTTON_BLUE_STYLE)` margin: 40px 0 0 0; min-width: 220px;`;
const ImageContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 80px;
  overflow: hidden;
`;
const Image = styled.img`
  position: absolute;
  top: 0;
  margin: -10% 0 0 0;
  right: -10%;
  width: 70%;

  .mobile & {
    width: 100%;
    margin: 0 0 30px 0;
    float: none;
  }
`;
const labelInfo = [
  {text: 'Автошампуни'},
  {text: 'Очистители'},
  {text: 'Полироли'}
]
const Greetings = () => {
    return (
      <Main>
          <ImageContainer><Image src={mainImage} /></ImageContainer>
          <TextContainer>
              <Maintext>Хороший<br/>короткий<br/>текст</Maintext>
              <LabelInfoGroup labels={labelInfo}/>
              <Button>Каталог</Button>
          </TextContainer>
      </Main>
    );
};

export default Greetings;