import React from 'react';
import styled from "styled-components";
import ButtonBlue from "components/shared/forms/buttonBlue";
import {DIV_BUTTON_SELECT_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import {icons} from "src/utils/icons";

const CategoryStyle = styled(DIV_BUTTON_SELECT_STYLE)`
  padding: 15px 30px;
  @media (max-width: 690px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  .mobile & {}
`;
const Category = (props: {children: any; selected: number; self: number; func: (i: number) => void}) => {
    function click() { props.func(props.self); }
    return (
        <ButtonBlue 
            icon={icons.rightIco1}
            func={click} 
            className={props.selected == props.self ? 'selected' : 'unselected'} 
            styled={CategoryStyle}
        >
            {props.children}
        </ButtonBlue>);
}

export default Category;