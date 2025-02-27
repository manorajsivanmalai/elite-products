

//Components
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Products from "./pages/products/Products"
import Product1 from "./pages/products/Bahubali/Product1"
import Shampoo from "./pages/products/Shampoo/Shampoo";
import Product2 from './pages/products/Bahubali/Product2'

//
import { Routes, Route } from "react-router-dom"
//css
import "./App.css"

const App = () => {
  return (
    <>
      <Navbar/>
      <main className="main-wrapper">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/men-intimate-mist" element={<Product1/>}/>
          <Route path="/products/channakya-shampoo" element={<Shampoo/>}/>
          <Route path="/products/men-intimate-foam" element={<Product2/>}/>
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App
