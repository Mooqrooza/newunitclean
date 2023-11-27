import React from 'react';
import styled, {keyframes} from "styled-components";

export const showAnimation = keyframes`
  0% {
    opacity: 0.2; 
    transform: scale(0.96)
  }
  70% { 
    opacity: 1; 
    transform: scale(1.01); 
  }
  90% { transform: scale(0.98); }
  100% {
    opacity: 1;
    transform: scale(1)
  }
`;
const defaultButtonStyle = ` 
  position: relative; 
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  min-width: 140px;
  min-height: 44px;
  border-radius: 22px;
  padding: 10px 20px;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  .mobile & {}
`;
const getDefaultIconStyle = (icon: any) => `
  &::after {
    content: url(${icon});
    position: absolute;
    right: 12px;
    width: 24px;
    height: 24px;
    top: 50%;
    margin-top: -12px;
  }
`;
export const DIV_BUTTON_BLUE_STYLE:any = styled.div<{css?: any; cssMobile?: any, icon?: any}>`
  ${defaultButtonStyle}
  &:hover {
    background-color: ${({theme}) => theme.colors.blueD};
    box-shadow: ${({theme}) => theme.shadows.shadowC};
  }
  font-size: ${ ({ theme }) => theme.font.size[15] };
  font-weight: ${ ({ theme }) => theme.font.weight[500] };
  color: ${ ({ theme }) => theme.colors.white };
  background: ${ ({ theme }) => theme.colors.blue };
  
  ${ props => (props.icon ? getDefaultIconStyle(props.icon) : '') }
  ${ props => props.css}  
  animation: ${showAnimation} 0.16s 1 linear;
  .mobile & { ${props => props.cssMobile} }
`;
export const DIV_BUTTON_SELECT_STYLE = styled(DIV_BUTTON_BLUE_STYLE)<{css?: any; cssMobile?: any, icon?: any}>`
  ${defaultButtonStyle}
  ${props => props.css}  
  width: 100%;
  height: auto;
  border-radius: 40px;
  text-align: left;
  text-transform: none;
  font-size: ${({ theme }) => theme.font.size[18]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  white-space: break-spaces;
  color: ${ ({ theme }) => theme.colors.white };
  background-color: ${ ({ theme }) => theme.colors.grayB };
  transition: all 0.12s 0s linear;
  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
  }
  &.unselected:not(:hover) {
    background: transparent;
    color: ${({ theme }) => theme.colors.black};
  }  
  &.selected {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
  }
  ${ props => (props.icon ? getDefaultIconStyle(props.icon) : '') }
  &.unselected::after {
    disaplay: none;
  }
  .mobile & {}
`;
export const DIV_BUTTON_SOFT_BLUE_STYLE = styled.div<{css?: any; cssMobile?: any, icon?: any}>`
  ${defaultButtonStyle}
  &:hover {
    background-color: ${({theme}) => theme.colors.blueG};
    box-shadow: ${({theme}) => theme.shadows.shadowC};
  }
  font-size: ${ ({ theme }) => theme.font.size[15] };
  font-weight: ${ ({ theme }) => theme.font.weight[500] };
  background: ${ ({ theme }) => theme.colors.whiteBlueA };
  color: ${ ({ theme }) => theme.colors.blue };
  ${ props => (props.icon ? getDefaultIconStyle(props.icon) : '') }
  ${props => props.css}
  .mobile & { 
    ${props => props.cssMobile} 
  }
`;
export const DIV_BUTTON_SOFT_GRAY_STYLE = styled(DIV_BUTTON_SOFT_BLUE_STYLE)<{css?: any; cssMobile?: any, icon?: any}>`
  ${defaultButtonStyle}
  &:hover {
    background-color: ${({theme}) => theme.colors.gray};
    box-shadow: ${({theme}) => theme.shadows.shadowC};
  }
`;