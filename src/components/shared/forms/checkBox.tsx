import React, {Component, useState} from 'react'; 
import styled from "styled-components";
import {icons} from "src/utils/icons";
import {createUid} from 'src/utils/functions';

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: start;
`;
const Checkbox =  styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;

  &+label::before {
    content: '';
    flex-shrink: 0;
    flex-grow: 0;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    margin: 0 13px 0 0;
    box-shadow: 0px 0px 0px 1px ${ ({theme}) => theme.colors.grayB };
    background-color: ${ ({theme}) => theme.colors.white };
    background-position: center;
    background-repeat: no-repeat;
    transition: all 0.14s 0s;
  }
  &:checked+label::before {
    background-image: url("${icons.checkIco2}");
    box-shadow: 0px 0px 0px 4px #AFCBEB;
  }
  /* hover style */
  &:not(:disabled):not(:checked)+label:hover::before {}
  /* active */
  &:not(:disabled):active+label::before {}
  /* focus */
  &:focus+label::before {}
  /* focus & unchecked */
  &:focus:not(:checked)+label::before {}
  /* disabled */
  &:disabled+label::before { background-color: #e9ecef; }
`;
const Label = styled.label`
  display: flex;
  justify-content: start;
  text-align: left;
  font-size: ${({ theme }) => theme.font.size[15]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  a { color: ${({ theme }) => theme.colors.blue}; }
  &.error {
    &::before {
      box-shadow: 0px 0px 0px 4px ${ ({theme}) => theme.colors.redTransparent(0.2) };
      background-color: ${ ({theme}) => theme.colors.whiteRed };
    }
  }
`;
interface CheckBoxProps {
    label?: any,
    setObj?: (obj: any) => void;
    defaultValue?: boolean;
    require?: boolean;
    error?: boolean;
};
interface CheckBoxState {
    value: boolean | undefined;
    error: boolean;
    errorText: string;
    errorAnimation: boolean;
    obj: any;
    checkBoxRef: any;
};
export class CheckBox extends Component<CheckBoxProps, CheckBoxState> {
    constructor(props: CheckBoxProps) {
        super(props);
        this.state = {
            obj: this,
            value: !!props.defaultValue, 
            error: false, 
            errorAnimation: false,  
            errorText: '',
            checkBoxRef: React.createRef()
        };
        if (this.props.setObj) { this.props.setObj(this.state); }
    }
    componentDidUpdate(prevProps: Readonly<CheckBoxProps>, prevState: Readonly<CheckBoxState>, snapshot?: any) {
        if (this.props.setObj) { this.props.setObj(this.state); }
    }
    check = (value: boolean | undefined) => {
        if (this.props.require) { return value !== true; } else { return false; }
    } 
    checkError = () => { 
        let val = this.check(this.state.value);
        this.setState({ error: val });
        return val;
    }
    onBlur = () => { this.checkError(); }
    onClick = (e:any) => {
        e.persist()
        const labelEl = e.target;
        const inputEl = labelEl.previousElementSibling;
        if (inputEl) {
            this.setState({ value: !inputEl.checked }, () => { this.checkError(); }); 
        } 
    }
    getType = () => { return 'text' }
    clear = () => { 
      const checkBoxEl = this.state.checkBoxRef.current;
      if (checkBoxEl) { checkBoxEl.checked = false; }
      this.setState({ value: false }); 
    }
    render() {
        const elementId = createUid();
        const className = this.state.error ? 'error' : '';
        return (
            <Container className={className}>
                <Checkbox type={'checkbox'} id={elementId} ref={this.state.checkBoxRef}/>
                {<Label className={className} htmlFor={elementId} onClick={this.onClick} onBlur={this.onBlur}>
                    {this.props.label ? this.props.label : ''}
                </Label>}
            </Container>
        );
    }
}

