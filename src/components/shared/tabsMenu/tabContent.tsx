import React from 'react';
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const TabContent = (props: {children: any}) => {
    return (<Main>{props.children}</Main>);
};

export default TabContent;