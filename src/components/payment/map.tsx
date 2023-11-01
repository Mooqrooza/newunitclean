import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from "styled-components";
import {getMapEmbed, DELIVERY} from "src/utils/constants";
import {setPickupAddress} from "src/actions/DeliveryAction/DeliveryAction";

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
  background: ${ ({theme}) => theme.colors.grayC };
  padding: 20px 40px;
  width: 100%;
  box-sizing: border-box;
  margin: 10px 0 0 0;
  border-radius: 40px;
  cursor: pointer;
  .mobile & {}
`;
const InfoItem = styled.div`
   p {
     color: ${ ({theme}) => theme.colors.black };
     font-weight: ${ ({theme}) => theme.font.weight[500] };
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
                <Address key={idx} style={address === it.ADDRESS ? {background: '#f1f1f1'} : {}} onClick={() => {onClickAddress(it.ADDRESS)}}>
                    <InfoItem>
                       <p>Самовывоз по адресу</p>
                       <p>{it.ADDRESS}</p>
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