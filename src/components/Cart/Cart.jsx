import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import "./Cart.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addCart,removeFromCart} from "../../features/products/AddtoCardSlice";
import axios from "axios";
const api = "http://localhost:5000";
const Cart = () => {
  const addedcart = useSelector((state) => state.carts.carts);  // Get cart items from state
  const { products } = useSelector((state) => state.products);
  const { isLogin, user } = useSelector((state) => state.auth); 
  const [filteredProducts, setFilteredProducts] = useState([]); // State to hold filtered products
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Map over products to filter them and add quantity from the cart
    const updatedFilteredProducts = products
      .filter((product) => addedcart.some((cartItem) => parseInt(cartItem.product_id) === product.id))  // Filter only products in the cart
      .map((product) => {
        // Find the corresponding cart item to get the quantity
        const cartItem = addedcart.find((item) =>parseInt(item.product_id)=== product.id);
  
        // Return the product with the cart quantity included
        return {
          ...product,
          quantity: cartItem ? cartItem.quantity : 1,  // Add quantity or default to 0 if not found
        };
      });

    // Set the updated filtered products to the state
    setFilteredProducts(updatedFilteredProducts);
  }, [addedcart, products]);

  // Function to handle quantity updates
  const updateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return;  // Prevent decreasing below 1
    
    try {
      if (isLogin) {
        await axios.put(`${api}/api/addtocart/update`, {
          userId: user?.id,
          productId: productId,
          quantity:newQuantity,
        });
      }
    } catch (error) {
      console.log("err :", error);
    }
 

    setFilteredProducts((prev) =>
      prev.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: newQuantity }; // Update quantity
        }
        return item;
      })
    );
  

  };

  // Function to handle removal of an item from the cart
  const handleRemove = (productId) => {
    setFilteredProducts((prevItems) => prevItems.filter((item) => item.id !== productId));
    dispatch(removeFromCart(productId))
  };
  
  // Calculate total based on filtered products
  const total = filteredProducts.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate("/checkout");
  };

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

        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-product">
                <img src={item.images[0]} alt={item.title} className="cart-product-image" />
                <div className="cart-product-info">
                  <p>{item.title}</p>
                </div>
              </div>
              <div>₹{parseInt(parseFloat(item.price).toFixed(2))}</div>
              <div className="cart-item-quantity">
                <button className="btn-quantity" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                  -
                </button>
                <input type="text" value={item.quantity} readOnly />
                <button className="btn-quantity" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
              </div>
              <div>₹{parseInt((parseFloat(item.price) * item.quantity).toFixed(2))}</div>
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
        {/* <div className="summary-item">
          <span>Coupon Code</span>
          <input type="text" placeholder="Enter Coupon Code" />
        </div> */}
        <div className="summary-item total">
          <span>TOTAL</span> <span>₹{total.toFixed(2)}</span>
        </div>
        <button className="checkout-btn" disabled={filteredProducts.length === 0} onClick={handleCheckout}>
          PROCEED TO CHECKOUT
        </button>
        <button className="continue-shopping-btn">
          <Link to="/">CONTINUE SHOPPING</Link>
        </button>
      </div>
    </div>
  );
};

export default Cart;
