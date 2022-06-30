import { useEffect, useState } from "react";
import "styles/Address.css";
import { AddressModal } from "components";
import {
  AiOutlinePlus,
  AiOutlineArrowRight,
  AiFillEdit,
  AiFillDelete,
} from "react-icons/ai";
import { useCart, useOrder } from "contexts";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Address = () => {
  const { orderState, orderDispatch } = useOrder();
  const { cartState, cartDispatch } = useCart();
  const [totalItemsPrice, setTotalItemsPrice] = useState(0);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const navigate = useNavigate();

  const deleteHandler = (addressId) => {
    orderDispatch({ type: "DELETE_ADDRESS", payload: addressId });
    toast.error("Address deleted");
  };

  const editHandler = (addressId) => {
    orderDispatch({ type: "EDIT_ADDRESS", payload: addressId });
    setShowAddressModal(true);
  };

  const selectHandler = (event, addressId) => {
    if (event.target.checked) {
      orderDispatch({ type: "SELECT_ADDRESS", payload: addressId });
      toast.success("Address selected");
    }
  };

  useEffect(() => {
    const totalItemsPrice = cartState.cart.reduce(
      (acc, curr) => (acc += curr.price * curr.qty),
      0
    );
    setTotalItemsPrice(totalItemsPrice);
  }, [cartState]);

  const totalPrice = totalItemsPrice + 40 - totalItemsPrice * 0.4;

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const proceedPayment = async () => {
    if (orderState.selected) {
      const response = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!response) {
        toast.error("Something went wrong");
      }

      const options = {
        key: "rzp_test_z6nQIw5S8icyta",
        amount: totalPrice * 100,
        curreny: "INR",
        name: "Shopzila",
        description: "Thank you for shopping with us.",
        image: "/assets/logo.png",

        handler: ({ payment_id }) => {
          cartDispatch({ type: "CLEAR_CART" });
          navigate("/order");
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } else {
      toast.error("Select the address first");
    }
  };

  return (
    <section className="addressContainer">
      {showAddressModal && (
        <AddressModal setShowAddressModal={setShowAddressModal} />
      )}
      <h1 className="heading">Address Management</h1>
      <div className="btn-container">
        <button
          className="btn address cursor-pointer"
          onClick={() => setShowAddressModal((prev) => !prev)}
        >
          <span>
            Add New Address
            <AiOutlinePlus className="add-icon" />
          </span>
        </button>
        <button
          className="btn checkout cursor-pointer"
          onClick={() => proceedPayment()}
        >
          <span>
            Proceed to Confirm Order
            <AiOutlineArrowRight className="right-arrow-icon" />
          </span>
        </button>
      </div>
      {orderState.addresses.length ? (
        <main>
          {orderState.addresses.map(
            ({ _id, name, contact, address, landmark, pincode }) => (
              <section className="address-block" key={_id}>
                <input
                  type="radio"
                  className="input cursor-pointer"
                  name="Select address"
                  onChange={(e) => selectHandler(e, _id)}
                />
                <div>
                  <p>Name - {name}</p>
                  <p>Ph No - {contact}</p>
                  <p>Address - {address}</p>
                  <p>Landmark - {landmark}</p>
                  <p>Pincode - {pincode}</p>
                </div>
                <div className="icon">
                  <AiFillEdit
                    className="edit-icon cursor-pointer"
                    onClick={() => editHandler(_id)}
                  />
                  <AiFillDelete
                    className="delete-icon cursor-pointer"
                    onClick={() => deleteHandler(_id)}
                  />
                </div>
              </section>
            )
          )}
        </main>
      ) : (
        <div className="address-empty">
          <h2>Address is empty!!!!</h2>
          <p>Add address to confirm order</p>
        </div>
      )}
      <ToastContainer />
    </section>
  );
};
