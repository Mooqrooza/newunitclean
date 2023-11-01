import React, {useCallback} from 'react';
import styled from "styled-components";
import {Main} from "src/themes/main";
import {icons} from "src/utils/icons";
import {useDispatch} from "react-redux";
import {WindowsManagerClear} from "src/actions/WindowsManagerAction/WindowsManagerAction";

const FormStyle = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  min-width: 580px;
  max-width: 680px;
  border-radius: 40px;
  box-sizing: border-box;
  max-height: 98%;
  background: ${({ theme }) => theme.colors.white };
  box-shadow: ${({ theme }) => theme.shadows.shadow };

  .background & {
    overflow-x: auto;
  }
  .mobile & {
    min-height: 100%;
    max-width: 100%;
    border-radius: 0;
  }
`;
const Form = (props: {children: any; closeButton?: boolean}) => {
    return (
        <FormStyle>
            {props.children}
        </FormStyle>
    );
};
export const FormCloseStyle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.whiteBlueA };

  .mobile & {
    position: fixed;
  }
`;
const FormClose = () => {
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, []);
    return (
        <FormCloseStyle onClick={() => stableDispatch(WindowsManagerClear())}>
            <img src={ icons.header.closeA } />
        </FormCloseStyle>
    );
}
const FormContainerStyle = styled.div<{css: any}>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => props.css};
  &.background {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    align-content: center;
    background: #00000080;
    
    .mobile &.background {
      width: 100%;
      overflow-y: auto;
      z-index: 4;
    }
  }
  .mobile & {}
`;
export const FormContainer = (props: {children: any; css?: any; background?: boolean}) => {
    return (
        <FormContainerStyle className={props.background ? 'background': ''} css={props.css}>
            <Form>
                {props.background ? <FormClose></FormClose> : '' }
                {props.children}
            </Form>
        </FormContainerStyle>
    );
};

export const FormList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  min-height: 100px;
  border-radius: 40px;

  & div {
    margin: 10px 0;
  }
  & input {
    min-width: 370px;
  }
  .mobile & {
    margin: 16px;
    & input {
      min-width: 0px;
    }
  }
`;

export const FormListContainer = styled.div`
  overflow-y: auto;
`;