import React from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "src/store/configureStore";
import {IStateWindows} from "src/reducers/WindowsManagerReducer/WindowsManagerReducer.types";

const ReasonStyle = styled.div`
  display: flex; 
  flex: 1;
  flex-direction: column;
  align-items: center;
  flex-shrink: 1;
  min-width: 250px;
  max-width: 330px;
  padding: 30px 40px 40px 40px;
  border-radius: 60px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.grayC};
  &:hover {}
  @media (max-width: 600px) {
    border-radius: 40px;
  }
  @media (max-width: 580px) {
    max-width: 100%;
  }
  .mobile & {}
`;
const Image = styled.img`
  height: 84px;
  width: 84px;
  margin: 0 0 20px 0;
  .mobile & {}
`;
const Text = styled.div`
   display: inline-block;
   text-align: left;
   font-size: ${({ theme }) => theme.font.size[20]};
   font-weight: ${({ theme }) => theme.font.weight[500]};
   color: ${({ theme }) => theme.colors.black};
   .mobile & {}
`;
export interface IReason {
    icon: string;
    text: string;
    clickable?: boolean;
    icon_clicked?: string
};
export const Reason = (props: { reason: IReason}) => {
    const WindowsManager = useTypedSelector((store) => store.WindowsManager);
    const {window} = WindowsManager as IStateWindows;
    const dispatch = useDispatch();
    return (
        <ReasonStyle>
            <Image src={props.reason.icon}/>
            <Text>{props.reason.text}</Text>
        </ReasonStyle>
    );
};
