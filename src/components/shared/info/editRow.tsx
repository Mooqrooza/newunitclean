import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {icons} from "src/utils/icons";

const EditRowStyle = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 20px;
  min-height: 52px;
  @media (max-width : 780px) {}
  &.verified {}
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 70px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  font-size: ${({ theme }) => theme.font.size[16]};
  white-space: nowrap;
  @media (max-width : 780px) {}
  @media (max-width : 640px) {
    width: 50px;
    font-size: ${({ theme }) => theme.font.size[14]};
  }
  .verified & {}
  .mobile & {}
`;
const EditSaveButton = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 28px;
  height: 28px;
  top: 0;
  right: -14px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.whiteBlueA};
  background-position: center;
  background-repeat: no-repeat;
  transition: box-shadow 0.25s ease-in-out;
  
  &.edit {
    background-image: url(${icons.checkIco});
  }
  &.save {
    background-image: url(${icons.editIco});
  }
  &:hover {
    box-shadow: ${({theme}) => theme.shadows.shadowB};
  }
  &:hover > svg {} 
  .mobile & {}
`;
const getDefaultValueStyle = (theme: any) => `
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: start;
  width: 450px;
  height: 52px;
  padding: 0 20px;
  border-radius: 26px 26px 0 0;
  box-sizing: border-box;
  font-size: ${theme.font.size[16]};
  font-weight: ${theme.font.weight[400]};
  color: ${theme.colors.black};
  border-bottom: ${theme.colors.gray} solid 1px;
  background-color: ${theme.colors.whiteA};
  user-select: text;
  @media (max-width : 780px) {
    width: 320px;
  }
  @media (max-width : 640px) {
    width: 100%;
    min-width: 220px;
    padding: 0 10px;
    font-size: ${() => theme.font.size[14]};
  }
  .mobile & {}
`;
const Value = styled.div`
  ${({ theme }) => getDefaultValueStyle(theme)};
`;
const EditValueContainer = styled.div`
  position: relative;
`;
const EditValue = styled.input`
  ${({ theme }) => getDefaultValueStyle(theme)};
  border-width: 0;
  outline: none;
  border-bottom: ${({ theme }) => theme.colors.blue} solid 2px;
  background-color: ${({ theme }) => theme.colors.white};
`;
const VerifiedIco = styled.div`
  justify-self: end;
  margin-left: 20px;
  .mobile & {}
`;
export const EditRows = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justyfy-content: center;
  flex-wrap: wrap;
  gap: 20px;
  border-radius: 40px;
  padding: 60px 60px 60px 40px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.grayC};
  @media (max-width : 640px) {
  padding: 40px 30px 40px 20px;
  font-size: ${({ theme }) => theme.font.size[14]};
  .mobile & {}
`;
const Verified = (verified?: any) => {
  return verified ? <VerifiedIco /> : <div></div>;
}
export const EditRow = (props: {nonEditable?: boolean; title?: string; value: string; verified?: boolean; save?: (val: string) => void}) => {
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(props.value || '');
    const switchEditing = () => { setEditing(!editing); }
    const setVal = (event?: any) => { setValue(event.target.value); }
    const save = () => {
        if (props.save) { props.save(value); }
        switchEditing();
    }
    const isEditableState = !props.nonEditable;
    const isEditState = isEditableState && editing;
    const isSavedState = !isEditableState && !editing;
    return (
        <EditRowStyle className={props.verified ? 'verified' : ''}>
            {/* <Verified verified={!!props.verified} /> */}
            <Title>{props.title || ''}</Title>   
            { isEditState ? 
            <EditValueContainer>
                <EditValue placeholder={value}/>
                {isEditableState ? <EditSaveButton onClick={save} className={'edit'} /> : null}
            </EditValueContainer> :
            <Value>
                {value}
                {isEditableState ? <EditSaveButton onClick={switchEditing} className={'save'} /> : null}
            </Value>
          }
        </EditRowStyle>
    );
};