import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled, {keyframes} from "styled-components";
import {getMapEmbed, DELIVERY} from "src/utils/constants";
import {setPickupAddress} from "src/actions/DeliveryAction/DeliveryAction";
import {icons} from 'src/utils/icons';

export const showAnimation = keyframes`
  0% {
    opacity: 0.2; 
    transform: scale(0.99)
  }
  60% { 
    opacity: 1; 
    transform: scale(1.005); 
  }
  90% { transform: scale(0.995); }
  94% {
    opacity: 1;
    transform: scale(1)
  }
`;
const MainContainer = styled.div`
  display: flex:
  flex-direction: column;
  gap: 20px;
  flex: 1;
  width: 100%;
  min-width: 280px;
  iframe { border-radius: 10px; }
  @media (max-width : 800px) { width: 100%; }
  .mobile & {}
`;
const Address = styled.div`
  width: 100%;
  min-height: 40px;
  margin: 10px 0 0 0;
  padding: 20px 20px 20px 58px;
  border-radius: 40px;
  box-sizing: border-box;
  cursor: pointer;
  background-color: ${ ({theme}) => theme.colors.grayC };
  background-image: url(${icons.mapGreyIco});
  background-position: 20px center;
  background-repeat: no-repeat;

  &.active {
    background-color: ${ ({theme}) => theme.colors.whiteBlueA };
    background-image: url(${icons.mapIco});
    animation: ${showAnimation} 0.16s 1 linear;
  }
  .mobile & {}
`;
const InfoItem = styled.div`
   display: flex;
   align-items: center;
   text-align: left;
   gap: 20px;
   * {
     text-align: left;
     color: ${ ({theme}) => theme.colors.black };
     font-weight: ${ ({theme}) => theme.font.weight[500] };
   } 

   @media (max-width : 800px) { 
      flex-direction: column;
      align-items: start;
      gap: 5px;
      font-size: ${ ({ theme }) => theme.font.size[14] };
   }
  .mobile & {}
`;
const MapAndButtons = (props: {withButtons?: boolean}) => {
    const dispatch = useDispatch();
    const { pickupAddress, pickupAddressEmbcode } = useSelector((store:any) => store.Delivery);
    const pickupAddressList = (DELIVERY.PICKUP_ADDRESS || []);
    const address = pickupAddress || pickupAddressList[0].ADDRESS;
    const MAP = getMapEmbed({ 
        height: 'auto',
        minHeight: '300px',
        width:'100%', 
        embCode: pickupAddressEmbcode || (pickupAddressList.length ? pickupAddressList[0].EMB_CODE : '')
    });
    const onClickAddress = (address:string) => {
        setPickupAddress(address)(dispatch); 
    }
    return (
        <MainContainer>
            {MAP}
            {props.withButtons ? pickupAddressList.map((it, idx) => (
                <Address key={idx} className={address === it.ADDRESS ? ' active' : ''} onClick={() => {onClickAddress(it.ADDRESS)}}>
                    <InfoItem>
                       <div>Самовывоз по адресу:</div>
                       <div>{it.ADDRESS}</div>
                    </InfoItem>
                </Address>
            )) : null}
        </MainContainer>
    );
};
export const MapWithButtons = () => {
    return <MapAndButtons withButtons={true} />
}
export const Map = () => {
    return <MapAndButtons withButtons={false} />
}