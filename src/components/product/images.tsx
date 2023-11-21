import React, {useState, useEffect} from 'react';
import styled, {keyframes} from "styled-components";
import {BASE_URL} from "src/utils/constants";

const bigImageShowAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;
const minImageToucheAnimation = keyframes`
  0% {
    opacity: 0; 
    transform: scale(0.8)
  }
  70% { 
    opacity: 1; 
    transform: scale(1.02); 
  }
  86% { transform: scale(0.96); }
  100% {
    opacity: 1;
    transform: scale(1)
  }
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 1;
  @media (max-width: 1000px) {}
`;
const BigImage = styled.div<{src: string}>`
  background-image: url(${props => props.src});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat; 
  position: relative;
  height: 100%;
  min-height: 480px;
  border-radius: 60px;
  background-color: ${({ theme }) => theme.colors.grayC};
  animation: ${bigImageShowAnimation} 0.3s 1 linear forwards;

  @media (max-width: 1000px) {
    min-height: 400px;
  }
  .mobile & {}
  &.noImage {}
`;
const SmallImagesContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  height: auto;
  .mobile & {}
`;
const Image = styled.div<{src: string}>`
  position: relative;
  aspect-ratio: 1;
  min-height: 100px;
  border-radius: 20px;
  cursor: pointer;
  opacity: 0.7;
  background-image: url(${props => props.src});
  background-color: ${({ theme }) => theme.colors.grayC};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: box-shadow 0.2s 0s;

  &:hover{
    box-shadow: ${({theme}) => theme.shadows.shadowA};
    opacity: 1;
  }
  &.selected { 
    box-shadow: ${({theme}) => theme.shadows.shadowA}; 
    opacity: 1;
    animation: ${minImageToucheAnimation} 0.2s 1 linear;
  }
`;
const SmallImage = (props: {src: string; self: number; func: (i: number) => void; selected: boolean}) => {
    function click() { props.func(props.self); }
    return ( <Image className={props.selected ? 'selected' : undefined} src={BASE_URL + props.src} onClick={click} /> );
}
const Images = (props: {images: string[]}) => {
    const [selected, setSelected] = useState(0);
    const select = (i: number) => { setSelected(i); }
    return (
        <MainContainer>
            <BigImage 
                src={props.images[selected] ? BASE_URL + props.images[selected] : ''}
                className={props.images[selected] ? '' : 'noImage'} 
            />
            <SmallImagesContainer>
                { props.images.map((image, i) => <SmallImage selected={selected == i} key={i} func={select} self={i} src={image} />) }
            </SmallImagesContainer>
        </MainContainer>
    );
};

export default Images;