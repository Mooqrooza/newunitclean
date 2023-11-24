import React from 'react';
import styled from "styled-components";
import Windows from "components/shared/windows";

const Main = styled.div`
  max-width: 1410px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.paddings.contentPadding};
  section {
    margin: ${({ theme }) => theme.margins.sectionMargin};
  } 
  @media (max-width: 800px) {
    justify-content: center;
    padding: ${({ theme }) => theme.paddings.contentPaddingMobile};
    section {
      margin: ${({ theme }) => theme.margins.sectionMarginMobile};
    }
  } 
  .mobile & {}
`;
const Content = (props: {children: any, className?: string}) => {
    return (
        <Main className={props.className || 'main-content'}>
            <Windows />
            {props.children}
        </Main>
    )
}

export default Content;