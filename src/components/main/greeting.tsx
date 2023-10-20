import React from 'react';
import {H1Main} from "components/shared/fonts/specialFonts";
import { LabelInfoGroup } from "components/shared/forms/labelInfo";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import styled from "styled-components";
import greetingImage from "src/images/greeting-image-1.png";

const Main = styled.section`
   position: relative;
   width: 100%;
   height: 600px;
   border-radius: 80px;
   background: ${({ theme }) => theme.gradients.softBlueGradient};
   @media (max-width: 1200px) {
       display: flex;
       flex-direction: column;
       align-items: center;
       height: auto;
       padding: 40px;
       box-sizing: border-box;
    }
   .mobile & {}
`;
const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  height: 100%;
  max-width: 50%;
  padding: 0 0 0 5%;

  @media (max-width: 1200px) {
      position: relative;
      align-items: center;
      padding: 0;
      max-width: 100%;
      width: auto;
  }
`;
const Maintext = styled(H1Main)`
  margin: 0 0 20px 0;
  @media (max-width: 1200px) {
    margin: 400px 0 20px 0;
    font-size: ${({ theme }) => theme.font.size[62]};
  }
  @media (max-width: 480px) {
    margin: 300px 0 20px 0;
    width: 100%;
    font-size: ${({ theme }) => theme.font.size[50]};
  }
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
  @media (max-width: 1200px) {
      justify-content: center;
  }
  .mobile & {}
`;
const Image = styled.img`
  position: absolute;
  margin: -29% 0 0 0;
  right: -10%;
  width: 70%;
  top: 52%;
  @media (max-width: 1200px) {
      width: 100%;
      top: -20%;
      margin: 0;
      position: relative;
      right: -6%;
  }
  .mobile & {}
`;
const labelStyle = `
`
const labelInfo = [
  {text: 'Автошампуни'},
  {text: 'Очистители'},
  {text: 'Полироли'}
]
const Greetings = () => {
    return (
      <Main>
          <ImageContainer><Image src={greetingImage} /></ImageContainer>
          <TextContainer>
              <Maintext>Хороший короткий текст</Maintext>
              <LabelInfoGroup labels={labelInfo}/>
              <Button>Каталог</Button>
          </TextContainer>
      </Main>
    );
};

export default Greetings;