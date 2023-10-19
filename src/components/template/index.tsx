import React from 'react';
import styled from "styled-components";
import Header from "./header";
import Feedback from "./feedback";
import Footer from "./footer";
import {getAuth} from "src/store/localStorage";
import {URLs} from "src/utils/constants";
import Unauthorized from "src/pages/special/unauthorized";

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  .mobile & {}
`;
const FooterContainer = styled.div`
  .mobile & { background: none;}
`;
const Template = (props: {children: any; clearBackground?: boolean; auth?: boolean}) => {
    return (
        <div>
            <Header></Header>
            { props.auth && !getAuth().isAuthorized ? <Unauthorized></Unauthorized> : props.children }
            <FooterContainer>
                <Feedback></Feedback>
                <Footer></Footer>
            </FooterContainer>
        </div>
    );
};

export default Template;