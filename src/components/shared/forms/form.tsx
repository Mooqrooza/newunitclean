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
  min-width: 570px;
  max-width: 680px;
  max-height: 98%;
  border-radius: 40px;
  box-sizing: border-box;
  
  background: ${({ theme }) => theme.colors.white };
  box-shadow: ${({ theme }) => theme.shadows.shadow };
  .background & { overflow-x: auto; }
  @media (max-width: 1000px) {
    width: 100%;
    max-width: 100%;
    min-width: 280px;
    min-height: 100%;
    max-height: 100%;
    border-radius: 0;
    padding: 10px;
  }
`;
const Form = (props: {children: any; closeButton?: boolean}) => {
    return <FormStyle>{props.children}</FormStyle>;
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
  }
  @media (max-width: 800px) {
    &.background {
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
  justify-content: start;
  height: auto;
  min-height: 100px;
  border-radius: 40px;
  & div { margin: 10px 0; }
  & input { min-width: 360px; }
  @media (max-width: 700px) {
    & input { min-width: 280px; }
  }
  .mobile & {}
`;

export const FormListContainer = styled.div`
  overflow-y: auto;
`;