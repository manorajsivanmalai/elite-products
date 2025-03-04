import React from "react";
import { FaTrash } from "react-icons/fa";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, setCartItems }) => {
  // console.log(cartItems);

  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout");
  };
  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <div className="cart-items-container">
        <h2>Shopping Cart</h2>
        <div className="cart-header">
          <div>PRODUCT</div>
          <div>PRICE</div>
          <div>QUANTITY</div>
          <div>TOTAL</div>
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-product">
                <img src={item.image} alt={item.title} className="cart-product-image" />
                <div className="cart-product-info">
                  <p>{item.title}</p>
                </div>
              </div>
              <div>₹{item.price.toFixed(2)}</div>
              <div className="cart-item-quantity">
                <button className="btn-quantity" onClick={() => handleQuantityChange(item.id, -1)}>
                  -
                </button>
                <input type="text" value={item.quantity} readOnly />
                <button className="btn-quantity" onClick={() => handleQuantityChange(item.id, 1)}>
                  +
                </button>
              </div>
              <div>₹{(item.price * item.quantity).toFixed(2)}</div>
              <div className="cart-remove" onClick={() => handleRemove(item.id)}>
                <FaTrash />
              </div>
            </div>
          ))
        ) : (
          <p className="empty-cart">Your cart is empty.</p>
        )}

        <div className="cart-notes">
          <p>🎁 Get free shipping on prepaid orders onwards ₹249</p>
          <p>🔒 Secure Shopping Guarantee</p>
        </div>
      </div>

      {/* Right Section - Order Summary */}
      <div className="order-summary">
        <h3>ORDER SUMMARY</h3>
        <div className="summary-item">
          <span>Subtotal</span> <span>₹{total.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Coupon Code</span>
          <input type="text" placeholder="Enter Coupon Code" />
        </div>
        <div className="summary-item total">
          <span>TOTAL</span> <span>₹{total.toFixed(2)}</span>
        </div>
        <button className="checkout-btn" disabled={cartItems.length==0} onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
        <button className="continue-shopping-btn"><Link to="/">CONTINUE SHOPPING</Link></button>
      </div>
    </div>
  );
};

export default Cart;
