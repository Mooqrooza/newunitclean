import React from 'react';
import {H1Main} from "components/shared/fonts/specialFonts";
import { LabelInfoGroup } from "components/shared/forms/labelInfo";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import styled from "styled-components";
import greetingImage from "src/images/greeting-image-1.png";
import {URLs} from "src/utils/constants";

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
       border-radius: 60px;
       box-sizing: border-box;
    }
    @media (max-width: 600px) {
      border-radius: 40px;
      padding: 25px;
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
  max-width: 40%;
  padding: 0 0 0 5%;

  @media (max-width: 1200px) {
      position: relative;
      align-items: center;
      padding: 0;
      max-width: 100%;
      width: auto;
  }
  @media (max-width: 420px) {}
`;
const Maintext = styled(H1Main)`
  display: inline-block;
  margin: 0 0 20px 0;
  font-size: 76px;
  font-weight: ${({ theme }) => theme.font.weight[600]};
  line-height: 1em;
  text-align: left;
  
  > :nth-child(3) {
    br { display: block; }
  }
  @media (max-width: 1600px) {
    font-size: 80px;
    line-height: 0.88em;
    > :nth-child(3) {
        font-size: 58px;
     }
  }
  @media (max-width: 1500px) {
    font-size: 80px;
    > :nth-child(3) {
        font-size: 56px;
     }
  }
  @media (max-width: 1360px) {
    font-size: 70px;
    > :nth-child(3) {
      font-size: 48px;
    }
  }
  @media (max-width: 1200px) {
    margin: 380px 0 20px 0;
    font-size: 76px;
    text-align: center;
    > :nth-child(3) {
      font-size: 64px;
      br { display: none; }
    }
  }
  @media (max-width: 890px) {
    line-height: 0.8em;
    > :nth-child(3) {
      font-size: 54px;
      br { display: none; }
    }
  }
  @media (max-width: 720px) {
    > :nth-child(3) {
      font-size: 46px;
    }
  }
  @media (max-width: 550px) {
    line-height: 0.7em;
    font-size: 66px;
    > :nth-child(3) {
      font-size: 34px;
      br { display: none; }
    }
  }
  @media (max-width: 490px) {
    line-height: 0.83em;
    margin: 310px 0 20px 0;
    font-size: 48px;
    text-align: left;
  }
  @media (max-width: 460px) {
    font-size: 52px;
    margin: 280px 0 20px 0;
    line-height: 0.65em;
    > :nth-child(3) {
      font-size: 28px;
      br { display: block; }
    }
  }
  @media (max-width: 420px) {
    margin: 300px 0 20px 0;
    font-size: 52px;
    text-align: left;
    > :nth-child(3) {
      font-size: 26px;
      br { display: none; }
    }
  }
  @media (max-width: 390px) {
    font-size: 46px;
    > :nth-child(3) {
      font-size: 22px;
    }
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
      width: 88%;
      top: -19%;
      margin: 0;
      position: relative;
      right: -6%;
  }
  @media (max-width: 760px) {
    width: 110%;
    top: -18%;
  }
  @media (max-width: 640px) {
    width: 110%;
    top: -22%;
  }
  @media (max-width: 600px) {
    width: 110%;
    top: -22%;
  }
  @media (max-width: 550px) {
    width: 110%;
    top: -19%;
  }
  @media (max-width: 480px) {
    width: 120%;
    top: -22%;
  }
  @media (max-width: 450px) {
    width: 120%;
    top: -27%;
  }
  @media (max-width: 420px) {
    width: 120%;
    top: -21%;
  }
  .mobile & {}
`;
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
              <Maintext><span>Автохимия</span><br/><span>для детейлинга <br/>и МСО</span></Maintext>
              <LabelInfoGroup labels={labelInfo} style={{justifyContent: 'center'}}/>
              <Button onClick={() => { window.open(URLs.CATALOG, '_self'); }}>Каталог</Button>
          </TextContainer>
      </Main>
    );
};

export default Greetings;