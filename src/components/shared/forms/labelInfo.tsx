import React from 'react';
import styled from "styled-components";
import {icons} from "src/utils/icons";

const LabelGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px 10px;
  @media (max-width: 800px) {
      gap: 5px 5px;
  }
  .mobile & {}
`;
const Label = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.orangeTransparent(0.1)};
  .mobile & {}
`;
const Icon = styled.div`
  width: 24px;
  height: 24px;
  float: left;
  background: ${({ theme }) => theme.colors.orangeTransparent(0.1)};
  .mobile & {}
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
  @media (max-width: 800px) {
    min-width: 60px;
    font-weight: ${({ theme }) => theme.font.weight[600]};
    font-size: ${({ theme }) => theme.font.size[12]};
  }
  .mobile & {}
`;
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
