import React from 'react';
import styled from "styled-components";
import Windows from "components/shared/windows";

const ContentStyle = styled.div`
  padding: ${({ theme }) => theme.paddings.contentPadding};
  
  section {
     margin: ${({ theme }) => theme.margins.sectionMargin}
  } 
  .mobile & {
    padding: ${({ theme }) => theme.paddings.contentPaddingMobile}

    section {
      margin: ${({ theme }) => theme.margins.sectionMarginMobile}
   } 
  }
`;
const Content = (props: {children: any}) => {
    return (
        <ContentStyle>
            <Windows />
            {props.children}
        </ContentStyle>
    )
}

export default Content;