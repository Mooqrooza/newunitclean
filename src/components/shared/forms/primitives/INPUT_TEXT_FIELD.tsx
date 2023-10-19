import React from 'react';
import styled from "styled-components";

const INPUT_TEXT_FIELD_STYLE = styled.textarea`
  width: calc(100% - 40px);
  height: 52px;
  padding: 0 20px;
  margin: 0;
  font-weight: 400;
  border-radius: 26px;
  resize: none;
  color: ${ ({theme}) => theme.colors.black };
  font-size: ${ ({theme}) => theme.font.size[16] };
  font-weight: ${ ({theme}) => theme.font.weight[500] };
  border: 1px solid ${ ({theme}) => theme.colors.gray };
  background: ${ ({theme}) => theme.colors.white };
`

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
        <INPUT_TEXT_FIELD_STYLE 
            value={props.inputFieldState.value}
            onChange={props.onInput}
            onFocus={focus}
            onBlur={blur}
            placeholder={props.inputFieldProps.placeholder}
            className={(props.inputFieldState.error ? 'error ' : '') + (props.inputFieldState.active ? 'active' : '')} 
        />
    );
};

export default INPUT_TEXT_FIELD;