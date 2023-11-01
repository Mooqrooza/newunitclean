import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {DIV_BUTTON_BLUE_STYLE, DIV_BUTTON_SOFT_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {ProductSizeType} from "src/utils/types";
import RadioButtonBlue from "components/shared/forms/radioButton";

const ButtonSelected = styled(DIV_BUTTON_BLUE_STYLE)`
  min-width: 100px;
  .mobile & {}
`;
const ButtonUnSelected = styled(DIV_BUTTON_SOFT_BLUE_STYLE)`
  min-width: 100px; 
  font-weight: ${({ theme }) => theme.font.weight[600]};
  &:hover {}
  .mobile & {}
`;
const RadioButton = (props: {id: number; title: string; pos: number; func: (i: number) => void;}) => {
    function click() { props.func(props.id); }
    return ( props.pos == props.id ?
        <RadioButtonBlue styled={ButtonSelected} func={click}>{props.title}</RadioButtonBlue>
        : <RadioButtonBlue styled={ButtonUnSelected} func={click}>{props.title}</RadioButtonBlue>
    );
}
const RadioButtonsContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
  overflow-x: auto;
  .mobile & {}
`;
const RadioButtons = (props: {buttons: ProductSizeType[]; setSize: (id: number) => void}) => {
    const [pos, setPos] = useState(props.buttons[0].id);
    const select = (i: number) => {
        setPos(i);
        props.setSize(i);
    }
    useEffect(() => { props.setSize(pos); }, [])
    return (
        <RadioButtonsContainer>
            {props.buttons.map((button, i) => <RadioButton id={button.id} title={button.title} pos={pos} key={i} func={select}/>)}
        </RadioButtonsContainer>
    );
};

export default RadioButtons;