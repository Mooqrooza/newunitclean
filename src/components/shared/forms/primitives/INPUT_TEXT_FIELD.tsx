import React from 'react';
import styled, {keyframes} from "styled-components";

export const errorAnimation = keyframes`
  0% {
    opacity: 0; 
    transform: scale(0)
  }
  70% { 
    opacity: 1; 
    transform: scale(1.05); 
  }
  90% { transform: scale(0.8); }
  100% {
    opacity: 1;
    transform: scale(1)
  }
`;
const INPUT_TEXT_CONTAINER = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  .mobile & {}
`;
const INPUT_TEXT_FIELD_STYLE = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 15px 20px;
  margin: 0;
  font-weight: 400;
  border-radius: 26px;
  resize: none;
  box-sizing: border-box;
  color: ${ ({theme}) => theme.colors.black };
  font-size: ${ ({theme}) => theme.font.size[16] };
  font-weight: ${ ({theme}) => theme.font.weight[500] };
  border: 1px solid ${ ({theme}) => theme.colors.grayB };
  background: ${ ({theme}) => theme.colors.white };
  &.active {
    /* background: ${ ({theme}) => theme.colors.whiteBlueD }; */
  } 
  &.error {
    background: ${ ({theme}) => theme.colors.whiteRedA };
  }
  .mobile & {}
`;
const INPUT_ERROR_MARKER_STYLED = styled.div`
  position: absolute;
  top: -2px;
  left: 2px;
  width: 6px;
  height: 6px;
  border-radius: 3px;
  outline: 5px solid ${ ({theme}) => theme.colors.redTransparent(0.12) };
  background: ${ ({theme}) => theme.colors.red };
  animation: ${errorAnimation} 0.3s 1 linear;
  .mobile & {}
`;
interface INPUT_TEXT_FIELD_STATE {
    value: string;
    error: boolean;
    active: boolean;
}
interface INPUT_TEXT_FIELD_PROPS { placeholder?: string; }
const INPUT_TEXT_FIELD = (props: {inputFieldState: INPUT_TEXT_FIELD_STATE; inputFieldProps: INPUT_TEXT_FIELD_PROPS; onFocus: (active: boolean) => void; onInput: (event: any) => void}) => {
    function focus() { props.onFocus(true); }
    function blur() { props.onFocus(false); }
    return (
        <INPUT_TEXT_CONTAINER>
            <INPUT_TEXT_FIELD_STYLE 
                value={props.inputFieldState.value}
                onChange={props.onInput}
                onFocus={focus}
                onBlur={blur}
                placeholder={props.inputFieldProps.placeholder}
                className={(props.inputFieldState.error ? 'error ' : '') + (props.inputFieldState.active ? 'active' : '')} 
            />
            { props.inputFieldState.error ? <INPUT_ERROR_MARKER_STYLED className='input-error-marker' /> : null}
        </INPUT_TEXT_CONTAINER>
    );
};

export default INPUT_TEXT_FIELD;