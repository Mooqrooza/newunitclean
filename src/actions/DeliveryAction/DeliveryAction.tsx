import {Dispatch} from 'redux';
import {DELIVERY} from "src/utils/constants";
import {SET_PICKUP_ADDRESS, SET_DELIVERY_ADDRESS} from "src/actions/DeliveryAction/DeliveryAction.types";

export const setPickupAddress = (pickupAddress: string ) => (dispatch:Dispatch) => {
    const findAddrData = DELIVERY.PICKUP_ADDRESS.find((it) => pickupAddress === it.ADDRESS);
    const addrData = findAddrData || DELIVERY.PICKUP_ADDRESS[0];
    const addrEmbCode = addrData ? addrData.EMB_CODE : '';
    const payload:object = { pickupAddress: pickupAddress, pickupAddressEmbcode: addrEmbCode };
    dispatch({ type: SET_PICKUP_ADDRESS, payload });
}

export const setDeliveryAddress = (address?: string) => (dispatch:Dispatch) => {
    dispatch({
        type: SET_DELIVERY_ADDRESS, payload: address 
    });
}