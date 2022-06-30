export const OrderReducer = (orderState, orderAction) => {
  switch (orderAction.type) {
    case "ADD_ADDRESS":
      return {
        ...orderState,
        addresses: [...orderState.addresses, orderAction.payload],
      };
    case "DELETE_ADDRESS":
      return {
        ...orderState,
        addresses: orderState.addresses.filter(
          (addressData) => addressData._id !== orderAction.payload
        ),
      };
    case "EDIT_ADDRESS":
      return {
        ...orderState,
        editAddress: orderState.addresses.find(
          (addressData) => addressData._id === orderAction.payload
        ),
      };
    case "UPDATE_ADDRESS":
      return {
        ...orderState,
        addresses: orderState.addresses.map((addressData) =>
          addressData._id === orderAction.payload._id
            ? {
                ...addressData,
                name: orderAction.payload.name,
                contact: orderAction.payload.contact,
                address: orderAction.payload.address,
                landmark: orderAction.payload.landmark,
                pincode: orderAction.payload.pincode,
              }
            : addressData
        ),
        editAddress: null,
      };
    case "SELECT_ADDRESS":
      return {
        ...orderState,
        selected: orderState.addresses.find(
          (address) => address._id === orderAction.payload
        ),
      };
    default:
      return orderState;
  }
};
