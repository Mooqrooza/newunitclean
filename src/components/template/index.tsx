import React from 'react';
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";
import {getAuth} from "src/store/localStorage";
import Unauthorized from "src/pages/special/unauthorized";

const Template = (props: {children: any; clearBackground?: boolean; auth?: boolean}) => {
    return (
        <div>
            <Header />
            { props.auth && !getAuth().isAuthorized ? <Unauthorized></Unauthorized> : props.children }            
            <Footer />
        </div>
    );
};

export default Template;