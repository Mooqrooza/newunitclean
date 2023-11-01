import React from 'react';
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 30%;
  gap: 30px 30px;
  min-width: 320px;
  padding: 40px;
  box-view: border-box;
  border-radius: 60px;
  transition: left 0.3s;
  background-color: ${({ theme }) => theme.colors.grayC};
`;
const ReviewText = styled.div`
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.font.size[18]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
`;
const Personal =  styled.div`
  display: flex;
  widtth: 100%;
`
const ReviewPhoto = styled.div<{src: string}>`
  height: 84px;
  width: 84px;
  border-radius: 50%;
  background: url(${props => props.src}) no-repeat;
  background-size: cover;
`;
const ReviewSign = styled.div`
  p {
    text-align: left;
    font-size: ${({ theme }) => theme.font.size[16]};
    font-weight: ${({ theme }) => theme.font.weight[500]};
    color: ${({ theme }) => theme.colors.black};
    padding: 0;
    margin: 0;
  }
  p:nth-child(2) {
    margin: 6px 0 0 0;
    color: ${({ theme }) => theme.colors.gray};
    font-weight: ${({ theme }) => theme.font.weight[400]};
    &:first-letter {
      text-transform: uppercase
    }
  }
`;

const Review = (props: {pos: number, photo: string; text: string; name: string; role: string}) => {
    return (
        <Main style={{left: -100 * props.pos + '%'}}>
            <ReviewText>{props.text}</ReviewText>
            <Personal>
                <ReviewPhoto src={props.photo} />
                <ReviewSign>
                    <p>{props.name}</p>
                    <p>{props.role}</p>
                </ReviewSign>
            </Personal>
        </Main>
    );
};

export default Review;