import React, {Component} from 'react';
import SELECT from "components/shared/forms/primitives/SELECT";
import {selectOption} from "src/utils/types";
import styled from "styled-components";
import {ErrorMessage} from "components/shared/forms/inputText";

export const DefaultSelectStyle = styled.div`
  display: flex;
  align-items: startch;
  justify-content: start;
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
interface SelectProps {
    css?: any;
    setObj?: (obj: any) => void;
    defaultOption?: selectOption;
    options: selectOption[];
    infoText?: string;
};
interface SelectState {
    value: string | undefined;
    error: boolean;
    errorText: string;
    active: boolean;
    errorAnimation: boolean;
    obj: any;
};
export class Select extends Component<SelectProps, SelectState> {
    constructor(props: SelectProps) {
        super(props);
        this.state = {
            value: props.defaultOption?.value, 
            error: false, 
            errorAnimation: false, 
            active: false, 
            obj: this, 
            errorText: ''
        };
        if (this.props.setObj) { this.props.setObj(this.state); }
    }
    componentDidUpdate(prevProps: Readonly<SelectProps>, prevState: Readonly<SelectState>, snapshot?: any) {
        if (this.props.setObj) { this.props.setObj(this.state); }
    }
    check = (value: string | undefined) => {
        if (value) { return false; }
        return true;
    } 
    checkError = () => {
        let val = this.check(this.state.value);
        this.setState({error: val});
        if (val) {
            this.setState({errorAnimation: true});
            setTimeout(() => {
                this.setState({errorAnimation: false});
            }, 500);
        }
        return val
    }
    onInput = (event?: any) => {  this.setState({ value: event.target.value }); }
    onFocus = (active: boolean) => {
        this.setState({active: active});
        if (active) { this.setState({error: false}); }
        else { this.checkError(); }
    }
    clear = () => { this.setState({value: ''}) }
    setError = (errorText?: string) => {
        this.setState({error: true, errorText: errorText ? errorText : this.state.errorText});
    }
    render() {
        return (
            <DefaultSelectStyle className={'select-wrapper'}>
                <SELECT selectState={this.state} selectProps={this.props} onFocus={this.onFocus} onInput={this.onInput} />
                {this.props.infoText ? <InfoText>{this.props.infoText}</InfoText> : null}
                {this.state.error && this.state.errorText ? <ErrorMessage>{this.state.errorText}</ErrorMessage> : null}
            </DefaultSelectStyle>
        );
    }
}