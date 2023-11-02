import React from 'react';
import styled from "styled-components";

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
  .mobile & { ${props => props.cssMobile} }
`;
export const DIV_BUTTON_SELECT_STYLE = styled(DIV_BUTTON_BLUE_STYLE)<{css?: any; cssMobile?: any, icon?: any}>`
  ${defaultButtonStyle}
  ${props => props.css}  
  height: auto;
  border-radius: 40px;
  text-align: left;
  text-transform: none;
  font-size: ${({ theme }) => theme.font.size[18]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  white-space: break-spaces;
  color: ${ ({ theme }) => theme.colors.white };
  background: ${ ({ theme }) => theme.colors.grayB };
  &.unselected:not(:hover) {
    background: transparent;
    color: ${({ theme }) => theme.colors.black};
  }  
  &.selected {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.blue};
    transition: background 0.1s 0s linear;
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