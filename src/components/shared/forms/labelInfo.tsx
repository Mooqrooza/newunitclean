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
const Label = styled.div<{ type?: string, css?: string }>`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.orangeTransparent(0.1)};
  img { background-color: ${({ theme }) => theme.colors.orangeTransparent(0.1)}; }
  ${({css}) => css}
  .mobile & {}
`;
const LabelRed = styled.div<{ type?: string, css?: string }>`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.redTransparent(0.08)};
  img { background-color: ${({ theme }) => theme.colors.redTransparent(0.09)}; }
  ${({css}) => css}
  .mobile & {}
  * {
    color: ${({ theme }) => theme.colors.grayA};
  }
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
  float: left;
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
const LabelMin = styled(Text)<{ type?: string, css?: string }>`
  display: flex;
  align-items: center;
  ${({css}) => css}
  font-size: ${({ theme }) => theme.font.size[14]};
  .mobile & {}
`;
export interface Ilabelinfo {
    text: string;
    icon?: any;
    type?: string;
    css?: string;
    func?: () => void;
};
export const LabelInfoMin = (props: Ilabelinfo ) => {
  return <LabelMin onClick={ props.func ? props.func : undefined } css={props.css ? props.css : ''}>{props.text || '...'}</LabelMin>
};
export const LabelInfo = (props: Ilabelinfo ) => {
    return (
      props?.type === 'redAlert' ?
        <LabelRed onClick={ props.func ? props.func : undefined } css={props.css ? props.css : ''}>
            {props.icon === false ? null : <Icon src={props.icon || icons.alertIcon || ''} />}
            <Text>{props.text || '...'}</Text>
        </LabelRed>
      : <Label onClick={ props.func ? props.func : undefined } css={props.css ? props.css : ''}>
          {props.icon === false ? null : <Icon src={props.icon || icons.shine || ''} />}
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
