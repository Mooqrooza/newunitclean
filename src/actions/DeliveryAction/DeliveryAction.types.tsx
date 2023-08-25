export const SET_PICKUP_ADDRESS = 'SET_PICKUP_ADDRESS';
export const SET_DELIVERY_ADDRESS = 'SET_DELIVERY_ADDRESS';

interface setPickupAddress {
    payload: object;
    type: typeof SET_PICKUP_ADDRESS;
}
interface setDeliveryAddress {
    payload: object;
    type: typeof SET_DELIVERY_ADDRESS;
}  
  export type DeliveryAction = setPickupAddress | setDeliveryAddress;
