import React from 'react';
import styled, {keyframes} from "styled-components";

export const errorAnimation = keyframes`
  0% {
    box-shadow: 0px 0px 0px 4px rgba(255, 0, 0, 0.2);
  }
  100% {
    box-shadow: 0px 0px 0px 4px rgba(255, 0, 0, 0.2);
  }
`;
const INPUT_TEXT_CONTAINER = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`

export const INPUT_TEXT_STYLE = styled.input`
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
  border: 1px solid ${ ({theme}) => theme.colors.grayA };
  background: ${ ({theme}) => theme.colors.white };

  &.active {
    background: ${ ({theme}) => theme.colors.whiteBlueD };
  } 
  &.error {
    background: ${ ({theme}) => theme.colors.whiteRedA };
  }
  .mobile & {
    font-size: ${({ theme }) => theme.font.size[16]};
  }
`
const INPUT_ERROR_MARKER_STYLED = styled.div`
  position: absolute;
  top: -2px;
  left: 2px;
  width: 6px;
  height: 6px;
  border-radius: 3px;
  outline: 5px solid ${ ({theme}) => theme.colors.redTransparent(0.12) };
  background: ${ ({theme}) => theme.colors.red };
`
interface INPUT_TEXT_STATE {
    value: string;
    error: boolean;
    active: boolean;
    errorAnimation: boolean
}
interface INPUT_TEXT_PROPS {
    styled?: any;
    placeholder?: string;
    name?: string;
}
const INPUT_TEXT = (props: {inputState: INPUT_TEXT_STATE; inputProps: INPUT_TEXT_PROPS; onFocus: (active: boolean) => void; onInput: (event: any) => void; type: string}) => {

    function focus() {
        props.onFocus(true);
    }
    function blur() {
        props.onFocus(false);
    }

    const Styled = props.inputProps.styled ? props.inputProps.styled : INPUT_TEXT_STYLE;

    return (
        <INPUT_TEXT_CONTAINER className={props.inputState.error ? 'error' : ''}>
            <Styled 
                value={props.inputState.value}
                type={props.type ? props.type : 'text'}
                name={props.inputProps.name}
                onChange={props.onInput}
                onFocus={focus}
                onBlur={blur}
                placeholder={props.inputProps.placeholder}
                className={[ (props.inputState.error ? 'error' : ''), (props.inputState.active ? 'active' : '')].join(' ')} 
            />
            { props.inputState.error ? <INPUT_ERROR_MARKER_STYLED className='input-error-marker' /> : null}
        </INPUT_TEXT_CONTAINER>
    );
};

export default INPUT_TEXT;