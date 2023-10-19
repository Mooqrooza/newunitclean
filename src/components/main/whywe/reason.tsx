import React from 'react';
import styled from "styled-components";
import reason from "components/main/whywe/reason";
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
  padding: 30px 40px 40px 40px;
  border-radius: 60px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.grayB};
`;
const Image = styled.img`
  height: 84px;
  width: 84px;
  margin: 0 0 20px 0;
`;
const Text = styled.div`
   display: inline-block;
   text-align: left;
   font-size: ${({ theme }) => theme.font.size[20]};
   font-weight: ${({ theme }) => theme.font.weight[500]};
   color: ${({ theme }) => theme.colors.black};
`;
export interface reason {
    icon: string;
    text: string;
    clickable?: boolean;
    icon_clicked?: string
};

const Reason = (props: {reason: reason}) => {
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

export default Reason;