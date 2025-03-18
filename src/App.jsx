import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Product1 from "./pages/products/Bahubali/Product1";
import Product2 from "./pages/products/Bahubali/Product2";
import Facewash from "./pages/products/Facewash/Facewash";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout"
import CShampo from "./pages/products/Shampoo/CShampo";
import Policy from "./pages/policy/policy";
import LoginSignup from "./pages/LoginSignup/LoginSignup"
import ResetPassword from "./pages/resetpassword/ResetPassword"
import ProtectedResetRoute from "./pages/resetpassword/ProtectedResetRoute"
import Account from "./pages/account/Account"
import AllProducts from "./pages/AllProducts/AllProducts.jsx";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Blog from "./pages/blog/Blog.jsx";
import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "./features/users/authSlice.js";
import { fetchaddtoCard } from "./api/fetchAddtocard.js";
import { toast, ToastContainer } from "react-toastify";
import { fetchProducts } from "./api/fetchProduct.js";
import {addCart} from "./features/products/AddtoCardSlice.js";
import axios from "axios";
const api = "http://localhost:5000";

const ProtectedRoute = ({ isLogin, routeName, children }) => {
  useEffect(() => {
      if (!isLogin && routeName === "checkout") {
          toast.warning("Please login before checkout!");
      }
  }, [isLogin, routeName]);

  return isLogin ? children : <Navigate to="/login" />;
};

const App = () => {
  const { isLogin, user } = useSelector((state) => state.auth); 
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigate =useNavigate();

 
  const addToCart =async (productItem) => {

    dispatch(addCart({productItem}));
    try {
      if (isLogin) {
       
        await axios.post(`${api}/api/addtocart/add`, {
          userId: user?.id,
          productId: productItem?.id,
          quantity:productItem?.quantity,
        });
        toast.success("Added to cart ❤");
        navigate("/cart");
      } else {
        navigate("/cart");
      }
    } catch (error) {
      console.log("err :", error);
    }
  };
  
  useEffect(() => {
    dispatch(setLoading(true));
    if (token) {
      axios
        .post(
          `${api}/api/users/validate-token`,
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((res) => {
          dispatch(setUser(res.data.user));
        })
        .catch(() => localStorage.removeItem("token"))
        .finally(() => {
          dispatch(setLoading(false));
        });
    }
  }, [token]);

  useEffect(() => {
    if (user) {
      dispatch(fetchaddtoCard(user.id));
    }
  }, [dispatch, user]);


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

 
  
  return (
    <>
     <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <main className="main-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/men-intimate-mist" element={<Product1 addToCart={addToCart} />} /> 
          <Route path="/products/men-intimate-foam" element={<Product2 addToCart={addToCart}/>} />
          <Route path="/products/facewash" element={<Facewash addToCart={addToCart}/>} />
          <Route path="/cart" element={<Cart   />} />
          <Route path="/login" element={<LoginSignup />} />      
          <Route path="/checkout" element={<Checkout   />} /> 
          <Route path="/products/channakya-shampoo" element={<CShampo  addToCart={addToCart} />} /> 
          <Route path="/policy" element={<Policy />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route
            path="/blog" element={<Blog />}/>
         <Route
            path="/reset-password"
            element={
              <ProtectedResetRoute>
                <ResetPassword />
              </ProtectedResetRoute>
            }
          />
        <Route
            path="/account"
            element={
              <ProtectedRoute isLogin={isLogin} routeName={"account"}>
                <Account />
              </ProtectedRoute>
            }
          /> 
        </Routes>
      </main>
      <Footer  />
    </>
  ) 
};

export default App;
