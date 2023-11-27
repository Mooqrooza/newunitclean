import React, {Component} from 'react';
import {StyledComponent} from "styled-components";
import {DIV_BUTTON_BLUE_STYLE} from "components/shared/forms/primitives/DIV_BUTTON";
import styled from "styled-components";
import {icons} from "src/utils/icons";

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;
const InfoText =  styled.div`
  display: inline-block;
  justify-self: start;
  width: 100%;
  margin: 0;
  padding: 0 4px 0 27px;
  box-sizing: border-box;
  text-align: left;
  font-size: ${({ theme }) => theme.font.size[15]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  color: ${({ theme }) => theme.colors.black};
  background-image: url(${icons.infoIco});
  background-position: left center;
  background-repeat: no-repeat;
  &.no-ico {
    background-image: none;
    padding: 0 4px;
  }
  .mobile & {}
`;
interface ButtonBlueProps {
    children: any;
    styled?: StyledComponent<any, any>;
    func?: () => void;
    setObj?: (obj: any) => void;
    className?: string,
    icon?: any,
    info?: { text: string, pos?: string, noIco?: boolean }
};
interface ButtonBlueState {
    currentStyle: StyledComponent<any, any>;
    currentChildren: any;
    timeOut: number
};
export class ButtonBlue extends Component<ButtonBlueProps, ButtonBlueState> {
    defaultStyle:any = DIV_BUTTON_BLUE_STYLE;
    defaultChildren:any = '';
    constructor(props: ButtonBlueProps) {
        super(props);
        this.defaultChildren = this.props.children;
        if (this.props.styled) {
            this.defaultStyle = this.props.styled
        }
        this.state = {
            currentStyle: this.defaultStyle,
            currentChildren: this.defaultChildren,
            timeOut: 0
        }
        if (this.props.setObj) { this.props.setObj(this); }
    }
    switchTimeOut = (func: () => void, timeOut: number | undefined) => {
        clearTimeout(this.state.timeOut);
        if (timeOut) {
            this.setState({timeOut: setTimeout(func, timeOut)});
        }
    }
    Animate = (props: {Styled?: StyledComponent<any, any>, Children?: any, timeOut?: number}) => {
        this.setState({
            currentStyle: props.Styled ? props.Styled : this.state.currentStyle,
            currentChildren: props.Children ? props.Children : this.state.currentChildren
        });
        this.switchTimeOut(() => {
            this.setState({
                currentStyle: this.defaultStyle,
                currentChildren: this.defaultChildren
            });
        }, props.timeOut);
    }
    render() {
        const info = this.props.info;
        const infoTop = info && info.text && info.pos === 'top';
        const infoBottom = info && info.text && (!info.pos || info.pos === 'bottom');
        return (
            <ButtonContainer>
                {infoTop ? <InfoText className={info.noIco ? 'no-ico' : ''}>{info.text}</InfoText> : null}
                <this.state.currentStyle icon={this.props.icon} className={this.props.className} onClick={ this.props.func }>
                    { this.state.currentChildren }
                </this.state.currentStyle>
                {infoBottom ? <InfoText className={info.noIco ? 'no-ico' : ''}>{info.text}</InfoText> : null}
            </ButtonContainer>
        );
    }
}

export default ButtonBlue;