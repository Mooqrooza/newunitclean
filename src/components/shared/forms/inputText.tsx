import React, {Component} from 'react';
import INPUT_TEXT from "./primitives/INPUT_TEXT";
import styled, {StyledComponent} from "styled-components";

export const InputTextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
  width: 100%;
  &:empty { display: none; }
  .mobile & {}
`;
export const InfoText =  styled.div`
  display: flex;
  justify-self: start;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: left;
  font-size: ${({ theme }) => theme.font.size[14]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.colors.gray};

  @media (max-width: 800px) {
    font-weight: ${({ theme }) => theme.font.weight[400]};
    font-size: ${({ theme }) => theme.font.size[12]};
  }
  .mobile & {}
`;
export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.font.size[14]};
  font-weight: ${({ theme }) => theme.font.weight[500]}; 
  text-align: left;
  .mobile & {}
`;
interface InputProps {
    styled?: StyledComponent<any, any>;
    placeholder?: string;
    name?: string;
    setObj?: (obj: any) => void;
    styledContainer?: StyledComponent<any, any>;
    hidden?: boolean;
    defaultValue?: string;
    infoText?: string;
};
export interface InputState {
    value: string;
    error: boolean;
    errorAnimation: boolean;
    errorText: string;
    active: boolean;
    obj: any;
};
export class InputText extends Component<InputProps, InputState> {
    defaultStyled = InputTextContainer;
    constructor(props: InputProps) {
        super(props);
        this.state = {
            value: this.props.defaultValue || '', 
            error: false, 
            errorAnimation: false, 
            active: false, 
            obj: this, 
            errorText: ''
        };
        if (this.props.setObj) {
            this.props.setObj(this.state);
        }
    }
    componentDidUpdate(prevProps: Readonly<InputProps>, prevState: Readonly<InputState>, snapshot?: any) {
        if (this.props.setObj) { this.props.setObj(this.state); }
    }
    check = (value: string) => false;
    checkError = () => {
        let val = this.check(this.state.value);
        this.setState({error: val});
        if (val) {
            this.setState({errorAnimation: true});
            setTimeout(() => { this.setState({errorAnimation: false}); }, 500);
        }
        return val
    }
    setError = (errorText?: string) => {
        this.setState({error: true, errorText: errorText ? errorText : this.state.errorText});
    }
    onInput = (event?: any) => {
        this.setState({value: event.target.value});
    }
    onFocus = (active: boolean) => {
        this.setState({active: active});
        if (active) { this.setState({error: false}); }
        else { this.checkError(); }
    }
    onBlur = (event: any) => {}
    getType = () => { return 'text' }
    clear = () => { this.setState({value: ''})}
    render() {
        const Styled = this.props.styledContainer ? this.props.styledContainer : this.defaultStyled;
        return (
            <Styled className={'input-text-wrapper'} style={this.props.hidden ?  {display: 'none'} : {}}>
                <INPUT_TEXT 
                    inputState={this.state}
                    inputProps={this.props}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onInput={this.onInput}
                    type={this.getType()} 
                />
                {this.props.infoText ? <InfoText>{this.props.infoText}</InfoText> : null}
                {this.state.error && this.state.errorText ? <ErrorMessage>{this.state.errorText}</ErrorMessage> : null }
            </Styled>
        );
    }
}
export class InputPhoneNumber extends InputText {
    onInput = (event?: any) => {
        const el = event.target;
        let value = el.value;
        this.setState({value: value.replace('+7', '7') });
    }
    check = (value: string) => {
        if (/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value) && value.length <= 11) {
            return false
        }
        else { return true; }
    }
}
export class InputEMail extends InputText {
    check = (value: string) => {
        if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
            return false
        }
        else { return true; }
    }
}
export class InputCompany extends InputText {
    check = (value: string) => {
        if (/^.+$/.test(value)) { return false; }
        else { return true; }
    }
}
export class InputUR_INN extends InputText {
    check = (value: string) => {
        if (/^[0-9]{10}$/.test(value)) { return false; }
        else { return true; }
    }
}
export class InputFIZ_OR_UR_INN extends InputText {
    check = (value: string) => {
        if (/^[0-9]{10}$/.test(value) || /^[0-9]{12}$/.test(value)) { return false; }
        else { return true; }
    }
}
export class InputAddress extends InputText {
    check = (value: string) => {
        if (/^.+$/.test(value)) { return false; }
        else { return true; }
    }
}
export class InputUR_KPP extends InputText {
    check = (value: string) => {
        if (/^[0-9]{9}$/.test(value)) { return false; }
        else { return true; }
    }
}
export class InputPromoCode extends InputText {
    check = (value: string) => {
        if (/^[0-9A-z]*$/.test(value)) { return false; }
        else { return true; }
    }
}
export class InputLogin extends InputText {
    check = (value: string) => {
        if (/^.+$/.test(value)) { return false; }
        else { return true; }
    }
}
export class InputPassword extends InputText {
    check = (value: string) => {
        if (/^.+$/.test(value)) { return false; }
        else { return true; }
    }
    getType = () => { return 'password'; }
}
export class InputDate extends InputText {
    check = (value: string) => {
        if (/^.+$/.test(value)) { return false; }
        else { return true; }
    }
    getType = () => {
        if (this.state.value || this.state.active) { return 'date'; }
        else { return 'text'; }
    }
}
export class InputFIO extends InputText {
    check = (value: string) => {
        if (/^[А-я`'\s\.Ёё-]+$/.test(value)) { return false; }
        else { return true; }
    }
}
export class InputLoginOrEMail extends InputText {
    check = (value: string) => {
        if (/^.+$/.test(value)) { return false; }
        else { return true; }
    }
}
export class OutputDetail extends InputText {
    check = (value: string) => { return false; }
    render() {
        return (
            <InputTextContainer style={this.props.hidden ? {display: 'none'} : {}}>
                { this.state.error ? <ErrorMessage>{this.state.errorText}</ErrorMessage> : null }
            </InputTextContainer>
        );
    }
}