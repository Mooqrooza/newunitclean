import React from 'react';
import styled from "styled-components";

const defaultButtonStyle = `  
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  min-width: 140px;
  min-height: 44px;
  border-radius: 22px;
  padding: 0px 20px;
  box-sizing: border-box;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
`;
export const DIV_BUTTON_BLUE_STYLE = styled.div<{css?: any; cssMobile?: any}>`
  ${defaultButtonStyle}
  font-size: ${ ({ theme }) => theme.font.size[15] };
  font-weight: ${ ({ theme }) => theme.font.weight[500] };
  color: ${ ({ theme }) => theme.colors.white };
  background: ${ ({ theme }) => theme.colors.blue };
  ${props => props.css}  
  .mobile & { ${props => props.cssMobile} }
`;

export const DIV_BUTTON_SOFT_BLUE_STYLE = styled.div<{css?: any; cssMobile?: any}>`
  ${defaultButtonStyle}
  font-size: ${ ({ theme }) => theme.font.size[15] };
  font-weight: ${ ({ theme }) => theme.font.weight[500] };
  background: ${ ({ theme }) => theme.colors.whiteBlueA };
  color: ${ ({ theme }) => theme.colors.blue };
  ${props => props.css}
  .mobile & { ${props => props.cssMobile} }
`;