import React from 'react';
import styled from "styled-components";
import {MapWithButtons} from "src/components/payment/map";
import InputList from "src/components/payment/inputList";

const MainContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  height: auto;
  @media (max-width : 1160px) {
    gap: 60px;
  }
  .mobile & {}
`;
const InputsAndMapWithButtons = () => {
    return (
        <MainContainer>
            <InputList />
            <MapWithButtons />
        </MainContainer>
    );
}
export default InputsAndMapWithButtons;
