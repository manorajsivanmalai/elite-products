import "./Cart.css";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {removeFromCart} from "../../features/products/AddtoCardSlice";
import axios from "axios";
import shampoo from "../../../src/assets/images/all-products/shampoo.webp"
import bahubali1 from "../../assets/images/bahubali/Bhahubali_100ML_3D-removebg-preview (1).png"
import fc1 from "../../assets/images/facewash/fc-1.jpg";
import foam1 from "../../../src/assets/images/all-products/Foam.webp"
import { toast } from "react-toastify";
import config from "../../config";
const imageMap = {
  "shampoo": shampoo,
  "bahubali1":bahubali1,
  "foam1":foam1,
   "fc1":fc1,
};
const api = config.API_URL;
const Cart = () => {
  const addedcart = useSelector((state) => state.carts.carts);  
  const { products } = useSelector((state) => state.products);
  const { isLogin, user } = useSelector((state) => state.auth); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    // Set the updated filtered products to the state
    setFilteredProducts(updatedFilteredProducts);
  }, [addedcart, products]);


  const updateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return;  
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

  const handleRemove = async (productId) => {
 
    setFilteredProducts((prevItems) => prevItems.filter((item) => item.id !== productId));
    dispatch(removeFromCart(productId))
    try {
      if (isLogin) {
        await axios.delete(`${api}/api/addtocart/remove`, {
          data: { userId: user.id, productId: productId },
        });
      }
    
      toast.success("Item removed from cart");
    } catch (error) {
      console.error("Error removing item: ", error);
    }
    
  };
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
                <img src={imageMap[item.images[0]]} alt={item.title} className="cart-product-image" />
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

      <div className="order-summary">
        <h3>ORDER SUMMARY</h3>
        <div className="summary-item">
          <span>Subtotal</span> <span>₹{total.toFixed(2)}</span>
        </div>
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
