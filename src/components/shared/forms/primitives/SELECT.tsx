import React from 'react';
import styled from "styled-components";
import {selectOption} from "src/utils/types";
import {INPUT_ERROR_MARKER_STYLED} from "components/shared/forms/primitives/INPUT_TEXT";

const SELECT_CONTAINER = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  .mobile & {}
`
const SELECT_STYLE = styled.select<{css?: any}>`
  width: 100%;
  height: 52px;
  padding: 0 20px;
  margin: 0;
  font-weight: 400;
  border-radius: 26px;
  resize: none;
  color: ${ ({theme}) => theme.colors.black };
  font-size: ${ ({theme}) => theme.font.size[16] };
  font-weight: ${ ({theme}) => theme.font.weight[500] };
  border: 1px solid ${ ({theme}) => theme.colors.grayB };
  background: ${ ({theme}) => theme.colors.white };
  cursor: pointer;   
  box-sizing: border-box;
  &.active {} 
  &.error {
    background: ${ ({theme}) => theme.colors.whiteRedA };
    transition: background 0.5s 0s linear;
  }
  .mobile & {}
`;
interface SELECT_STATE {
    value: string | undefined;
    error: boolean;
    active: boolean;
    errorAnimation: boolean;
}
interface SELECT_PROPS {
    css?: any;
    defaultOption?: selectOption;
    options: selectOption[];
}
const SELECT = (props: {selectProps: SELECT_PROPS; selectState: SELECT_STATE; onFocus: (active: boolean) => void; onInput: () => void}) => {
    function focus() { props.onFocus(true); }
    function blur() { props.onFocus(false); }
    return (
      <SELECT_CONTAINER>
          <SELECT_STYLE 
              value={props.selectState.value}
              onFocus={focus}
              onBlur={blur}
              css={props.selectProps.css}
              onChange={props.onInput}
              className={[
                  (props.selectState.error ? 'error' : ''),
                  (props.selectState.errorAnimation ? 'errorAnimation' : ''),
                  (props.selectState.active ? 'active' : '')
              ].join(' ')}
            >
            <option value={props.selectProps.defaultOption?.value}>{props.selectProps.defaultOption?.text}</option>
            { props.selectProps.options.map((option, i) => <option key={i} value={option.value} className={'option'}>{option.text}</option>) }
          </SELECT_STYLE>
          { props.selectState.error  ? <INPUT_ERROR_MARKER_STYLED className='input-error-marker' /> : null }
      </SELECT_CONTAINER>
    );
};

export default SELECT;