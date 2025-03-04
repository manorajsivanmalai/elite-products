import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Products from "./pages/products/Products";
import Product1 from "./pages/products/Bahubali/Product1";
// import Shampoo from "./pages/products/Shampoo/Shampoo";
import Product2 from "./pages/products/Bahubali/Product2";
import Facewash from "./pages/products/Facewash/Facewash";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout"
import CShampo from "./pages/products/Shampoo/CShampo";
import Policy from "./pages/policy/policy";


import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existingProduct = prevCart.find((item) => item.title === product.title);
      
      if (existingProduct) {
        return prevCart.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevCart, product];
      }
    });
  };
  

  return (
    <>
      <Navbar cartItems={cartItems}/>
      <main className="main-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/men-intimate-mist" element={<Product1 addToCart={addToCart} />} />
          {/* <Route path="/products/channakya-shampoo" element={<Shampoo addToCart={addToCart}/>} /> */}
          <Route path="/products/men-intimate-foam" element={<Product2 addToCart={addToCart}/>} />
          <Route path="/products/facewash" element={<Facewash addToCart={addToCart}/>} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} setCartItems={setCartItems} />} /> 
          <Route path="/products/channakya-shampoo" element={<CShampo cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} />} /> 
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </main>
      <Footer cartItems={cartItems} />
    </>
  );
};

export default App;
