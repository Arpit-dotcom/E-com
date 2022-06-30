import { useOrder } from "contexts";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export const AddressModal = ({ setShowAddressModal }) => {
  const { orderDispatch, orderState } = useOrder();
  const [addressData, setAddressData] = useState(
    orderState.editAddress ?? {
      name: "",
      contact: "",
      address: "",
      landmark: "",
      pincode: "",
    }
  );

  const dummyHandler = () => {
    setAddressData({
      name: "Arpit",
      contact: "9876543210",
      address: "743B Vishnu Nagar, Yamuna Nagar, Haryana",
      landmark: "Jagadhri Workshop",
      pincode: "135001",
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (orderState.editAddress) {
      orderDispatch({
        type: "UPDATE_ADDRESS",
        payload: addressData,
      });
    } else {
      const newAddress = { _id: uuid(), ...addressData };
      orderDispatch({ type: "ADD_ADDRESS", payload: newAddress });
    }
    setShowAddressModal(false);
  };

  return (
    <section className="address-modal">
      <div className="address-modal-container">
        <h1 className="heading">Add Address</h1>
        <form className="form" onSubmit={(e) => submitHandler(e)}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={addressData.name}
            onChange={(e) =>
              setAddressData({ ...addressData, name: e.target.value })
            }
            required
          />

          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            value={addressData.contact}
            onChange={(e) =>
              setAddressData({ ...addressData, contact: e.target.value })
            }
            required
          />

          <label htmlFor="address">Address</label>
          <input
            type="text"
            value={addressData.address}
            onChange={(e) =>
              setAddressData({ ...addressData, address: e.target.value })
            }
            required
          />

          <label htmlFor="landmark">Landmark</label>
          <input
            type="text"
            value={addressData.landmark}
            onChange={(e) =>
              setAddressData({ ...addressData, landmark: e.target.value })
            }
            required
          />

          <label htmlFor="pincode">Pincode</label>
          <input
            type="text"
            value={addressData.pincode}
            onChange={(e) =>
              setAddressData({ ...addressData, pincode: e.target.value })
            }
            required
          />

          <button
            className="submit cursor-pointer"
            onClick={() => dummyHandler()}
          >
            Add dummy address
          </button>
          <button className="submit cursor-pointer">
            {orderState.editAddress ? "Save address" : "Add address"}
          </button>
        </form>
      </div>
    </section>
  );
};
