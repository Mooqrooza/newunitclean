import React from 'react';
import styled from "styled-components";
import {icons} from "src/utils/icons";

const LabelGroup = styled.div`
    display: flex;
    align-items: center;
`;
const Label = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px 0 0;
  background: ${({ theme }) => theme.colors.orangeTransparent(0.1)};
`
const Icon = styled.div`
  width: 24px;
  height: 24px;
  float: left;
  background: ${({ theme }) => theme.colors.orangeTransparent(0.1)};
`;
const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  padding: 0 10px;
  margin: 0;
  float: left;
  font-weight: ${({ theme }) => theme.font.weight[500]};
  color: ${({ theme }) => theme.colors.black};
`
export interface Ilabelinfo {
    text: string;
    icon?: any;
    func?: () => void;
};
export const LabelInfo = (props: Ilabelinfo ) => {
    return (
        <Label onClick={ props.func ? props.func : undefined }>
             <Icon><img src={props.icon || icons.shine} /></Icon>
            <Text>{props.text || '...'}</Text>
        </Label>
    );
};
export const LabelInfoGroup = (props:{ labels: Array<Ilabelinfo>, direction?: string, style?: any; }) => {
    return (
        <LabelGroup style={props.style || null}>
            {props.labels.map((it, idx) => {
                return <LabelInfo text={it.text} icon={it.icon} func={it.func} key={idx} />
            })}
        </LabelGroup>
    )
};
