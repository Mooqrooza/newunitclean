import {IStateDelivery} from './DeliveryReducer.types';
import {
  SET_PICKUP_ADDRESS,
  SET_DELIVERY_ADDRESS,
  DeliveryAction
} from "src/actions/DeliveryAction/DeliveryAction.types";

const initialStateDelivery = {
  pickupAddressEmbcode: '',
  pickupAddres: '',
  deliveryAddress: '' 
};


export function DeliveryReducer(state: IStateDelivery = initialStateDelivery, action: DeliveryAction) {
  switch (action.type) {
    case SET_PICKUP_ADDRESS:
      return { ...state, ...action.payload };
    case SET_DELIVERY_ADDRESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
