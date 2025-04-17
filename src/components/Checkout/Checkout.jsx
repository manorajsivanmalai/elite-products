import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { State, City } from "country-state-city";
import "../Checkout/Checkout.css";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import config from "../../config";
import shampoo from "../../../src/assets/images/all-products/shampoo.webp"
import bahubali1 from "../../assets/images/bahubali/Bhahubali_100ML_3D-removebg-preview (1).png"
import fc1 from "../../assets/images/facewash/fc-1.jpg";
import foam1 from "../../../src/assets/images/all-products/Foam.webp"
const imageMap = {
  "shampoo": shampoo,
  "bahubali1":bahubali1,
  "foam1":foam1,
   "fc1":fc1,
};
function Checkout() {
const addedcart = useSelector((state) => state.carts.carts);  
const { products } = useSelector((state) => state.products);
const { isLogin, user } = useSelector((state) => state.auth); 


const navigate = useNavigate();
 const [cartItems, setCartItems] = useState([]); 
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    pincode: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [showSummary, setShowSummary] = useState(false);
  const [stateCode,setStateCode]=useState("");
 useEffect(() => {
    const updatedFilteredProducts = products
      .filter((product) => addedcart.some((cartItem) => parseInt(cartItem.product_id) === product.id))
      .map((product) => {
        const cartItem = addedcart.find((item) =>parseInt(item.product_id)=== product.id);
        return {
          ...product,
          quantity: cartItem ? cartItem.quantity : 1,  
        };
      });

    setCartItems(updatedFilteredProducts);

  }, [addedcart, products]);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    setStates(State.getStatesOfCountry("IN"));

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setStateCode(selectedState)
    const stateName=State.getStateByCodeAndCountry(selectedState,"IN").name;
    setUserDetails((prev) => ({ ...prev, state: stateName, city: "" }));
    setCities(City.getCitiesOfState("IN", selectedState) || []);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value })) ;
  };

  const validateForm = () => {
    let errors = {};
    Object.keys(userDetails).forEach((key) => {
      if (!userDetails[key]) errors[key] = `${key} is required`;
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) setShowSummary(true);
  };

  const handlePayment = async () => {
    try {
      
      const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY;
      if (!razorpayKey) {
        alert("Failed to get Razorpay key");
        return;
      }

      const orderResponse = await fetch(
        `${config.API_URL}/api/order/create-razorpay-order`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: (18/100) * totalAmount + totalAmount }),
        }
      );

      if (!orderResponse.ok) throw new Error("Failed to create Razorpay order");
      const orderData = await orderResponse.json();

      if (!orderData.success) {
        alert("Failed to create Razorpay order");
        return;
      }

      const options = {
        key: razorpayKey,
        amount: ((18/100) * totalAmount + totalAmount) * 100,
        currency: "INR",
        name: "Elite Store",
        order_id: orderData.order.id,
        handler: async function (response) {
          const paymentResponse = await fetch(
            `${config.API_URL}/api/order/verify-payment`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                order_id: orderData.order.id,
                payment_id: response.razorpay_payment_id,
                signature: response.razorpay_signature,
                userDetails: userDetails,
                cartItems,
                totalAmount:((18/100) * totalAmount + totalAmount) * 100,
                user:user.id
              }),
            }
          );

          const paymentData = await paymentResponse.json();
          if (paymentData.success) {
            toast.success("your order has been placed successfully")
            navigate("/");
            // navigate("/order-confirmation", {
            //   state: {
            //     payment_id: response.razorpay_payment_id,
            //     orderId: orderData.order.id,
            //     totalAmount,
            //     email: userDetails.email,
            //   },
            // });
          } else {
            alert("Payment verification failed!");
          }
        },
        prefill: {
          name: userDetails.name,
          email: userDetails.email,
          contact: userDetails.phone,
        },
        theme: { color: "#3399cc" },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error during payment:", error);
      alert("Payment failed. Try again!");
    }
  };


  return (
    <div className="chkout-outer">
      <div className="container chk-out">
        <h2>Enter Shipping Details</h2>
        <div className="row rowgaps" >
          <div className="col-md-8 chk-dtls">
            {!showSummary ? (
              <form onSubmit={handleSubmit}>
                <div className="row">
                  {Object.keys(userDetails).map(
                    (field) =>
                      field !== "state" &&
                      field !== "city" && (
                        <div key={field} className="form-group col-md-6">
                          <label htmlFor={field==="address1" ?"address 1":field}>
                            {field==="address1" ?"Address":field.charAt(0).toUpperCase() + field.slice(1)}:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id={field}
                            name={field}
                            value={userDetails[field]}
                            onChange={handleInputChange}
                            placeholder={`Enter ${field==="address1" ?"address ":field}`}
                          />
                          {formErrors[field] && (
                            <p className="error">{formErrors[field]}</p>
                          )}
                        </div>
                      )
                  )}

                  <div className="form-group col-md-6">
                    <label htmlFor="state">State:</label>
                    <select
                      className="form-control"
                      id="state"
                      name="state"
                      value={stateCode}
                      onChange={handleStateChange}
                    >
                      <option value="">Select State</option>
                      {states.map((state) => (
                        <option key={state.isoCode} value={state.isoCode}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                    {formErrors.state && (
                      <p className="error">{formErrors.state}</p>
                    )}
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="city">City:</label>
                    <select
                      className="form-control"
                      id="city"
                      name="city"
                      value={userDetails.city}
                      onChange={handleInputChange}
                      disabled={!userDetails.state}
                    >
                      <option value="">Select City</option>
                      {cities.map((city) => (
                        <option key={city.name} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                    {formErrors.city && (
                      <p className="error">{formErrors.city}</p>
                    )}
                  </div>

                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary mt-2 mb-3 text-center">
                      Continue
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="summary-section">
                <h3>Review & Pay</h3>
                {Object.entries(userDetails).map(([key, value]) => (
                  <p key={key}>
                    <strong>{key}:</strong> {value}
                  </p>
                ))}
                <p>
                  <strong>Total Amount:</strong> ₹{((18/100) * totalAmount + totalAmount)}
                </p>
                <div className="text-center order-btns">
                  <button
                    className="btn btn-secondary mt-2 px-4"
                    onClick={() => setShowSummary(false)}
                  >
                    Edit Details
                  </button>
                  <button
                    className="btn btn-success mt-2 ml-2"
                    onClick={handlePayment}
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="col-md-4 chkout-summary">
            <h2>Order Summary</h2>

            {cartItems && cartItems.map((item, index) => (
              <div
                key={index}
                className="des-details d-flex align-items-center p-2 border rounded mb-3"
              >
               
                <div className="col-4">
                  <img
                    src={imageMap[item?.images[0]]}
                    alt={item.title}
                    className="img-fluid rounded"
                  />
                </div>

                {/* Product Details */}
                <div className="col-8">
                  <h5 className="mb-1">{item.title}</h5>
                  <p className="mb-0">
                    Qty: <strong>{item.quantity}</strong>
                  </p>
                  <p className="mb-0">
                    Price: ₹<strong>{item.price}</strong>
                  </p>
                  {/* <p className="mb-0">
                    Subtotal: ₹<strong>{item.quantity * item.price}</strong>
                  </p> */}
                </div>
              </div>
            ))}
            <div className="border-top pt-3">
              <h4>
                Total Items:{" "}
                <strong>
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </strong>
              </h4>
              <h4>
                Gst:{" "}
                  {(18/100) * totalAmount}
              </h4>
              <h4>
                Total Price : ₹
                <strong>
                  {(18/100)*totalAmount + totalAmount }
                </strong>
              </h4>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
