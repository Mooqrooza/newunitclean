import React, {Component} from 'react';
import INPUT_TEXT_FIELD from "./primitives/INPUT_TEXT_FIELD";
import styled from "styled-components";
import {ErrorMessage} from "components/shared/forms/inputText";

export const InputTextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  ustify-content: start;
  gap: 8px;
  min-width: 260px;
  .mobile & {}
`;
export const InfoText =  styled.div`
  display: flex;
  justify-self: start;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: left;
  width: inherit;
  font-size: ${({ theme }) => theme.font.size[14]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.colors.gray};
  @media (max-width: 800px) {
    font-weight: ${({ theme }) => theme.font.weight[400]};
    font-size: ${({ theme }) => theme.font.size[12]};
  }
  .mobile & {}
`;
interface InputFieldProps {
    placeholder?: string;
    setObj?: (obj: any) => void;
    require?: boolean;
    infoText?: string;
};
interface InputFieldState {
    value: string;
    error: boolean;
    active: boolean;
    obj: any;
    errorText: string;
};
export class InputTextField extends Component<InputFieldProps, InputFieldState> {
    constructor(props: InputFieldProps) {
        super(props);
        this.state = {value: '', error: false, active: false, obj: this, errorText: ''};
        if (this.props.setObj) {
            this.props.setObj(this.state);
        }
    }
    componentDidUpdate(prevProps: Readonly<InputFieldProps>, prevState: Readonly<InputFieldState>, snapshot?: any) {
        if (this.props.setObj) { this.props.setObj(this.state); }
    }
    check = (value: string) => {
        if (this.props.require) { return value.length > 0; } else { return false; }
    }
    checkError = () => {
        let val = this.check(this.state.value);
        this.setState({error: val});
        return val
    }
    onInput = (event?: any) => { this.setState({value: event.target.value}); }
    onFocus = (active: boolean) => {
        this.setState({active: active});
        if (active) { this.setState({error: false}); }
        else { this.checkError(); }
    }
    clear = () => { this.setState({value: ''}); }
    setError = (errorText?: string) => {
        this.setState({error: true, errorText: errorText ? errorText : this.state.errorText});
    }
    render() {
        return (
            <InputTextFieldContainer className={'inputtext-field-wrapper'}>
                <INPUT_TEXT_FIELD 
                    inputFieldState={this.state}
                    inputFieldProps={this.props}
                    onFocus={this.onFocus}
                    onInput={this.onInput}
                />
                {this.props.infoText ? <InfoText>{this.props.infoText}</InfoText> : null}
                { this.state.error && this.state.errorText ? <ErrorMessage>{this.state.errorText}</ErrorMessage> : null }
            </InputTextFieldContainer>
        );
    }
}

export default InputTextField;