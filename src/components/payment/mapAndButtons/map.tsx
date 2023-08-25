import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from "styled-components";
import {H3} from "components/shared/fonts/specialFonts";
import InfoRow from "components/contacts/info/infoRow";
import {getMapEmbed, INFO, DELIVERY} from "src/utils/constants";
import {setPickupAddress} from "src/actions/DeliveryAction/DeliveryAction";

const MapStyle = styled.div`
  width: 100%;
  height: 100%;
`;

const FrameStyle = styled.div`
  box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.1);

  .mobile & {
    width: 100%;

    & iframe {
      width: 100%;
    }
  }
`;

const Address = styled.div`
  background: white;
  padding: 20px;
  width: calc(100% - 40px);
  cursor: pointer;
`;

const Map = () => {
    const dispatch = useDispatch();

    const { pickupAddress, pickupAddressEmbcode } = useSelector((store:any) => store.Delivery);
    const pickupAddressList = (DELIVERY.PICKUP_ADDRESS || []);
    const address = pickupAddress || pickupAddressList[0].ADDRESS;
    const MAP = getMapEmbed({ 
        height:'220px', 
        width:'100%', 
        embCode: pickupAddressEmbcode || (pickupAddressList.length ? pickupAddressList[0].EMB_CODE : '')
    });
    const onClickAddress = (address:string) => {
        setPickupAddress(address)(dispatch); 
    }
    return (
        <MapStyle>
            <H3>Самовывоз</H3>
            <FrameStyle>
                {MAP}
                {pickupAddressList.map((it, idx) => (
                    <Address key={idx} style={address === it.ADDRESS ? {background: '#f1f1f1'} : {}} onClick={() => {onClickAddress(it.ADDRESS)}}>
                        <InfoRow title={'Адрес'} value={it.ADDRESS}></InfoRow>
                    </Address>
                ))}
            </FrameStyle>
        </MapStyle>
    );
};

export default Map;