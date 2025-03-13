import React from "react";
import "./AllProducts.css";
import { Link } from "react-router-dom";
import Foam from "../../../src/assets/images/all-products/Foam.png"
import spary from "../../../src/assets/images/all-products/spary.png"

import shampoo from "../../../src/assets/images/all-products/shampoo.png"
import facewash from "../../../src/assets/images/all-products/facewash.png"
import bodylotion from "../../../src/assets/images/all-products/bodylotion.png"
import sunscreen from "../../../src/assets/images/all-products/sunscreen.png"
import faceserum from "../../../src/assets/images/all-products/faceserum.png"
import Hairremoval from "../../../src/assets/images/all-products/Hairremoval.png"
import Sanitizer from "../../../src/assets/images/all-products/Sanitizer.png"


function AllProducts() {
  const Allproducts = [
    {
      name: "Bhahubali Men Intimate wash",
      price: "₹591",
      path:'/products/men-intimate-foam',
      status:true,
      image: Foam,
    },
    {
      name: "Bhahubali Men intimate mist",
      price: "₹291",
      path:'/products/men-intimate-mist',
      status:true,
      image: spary,
    },
    {
      name: "chanakya care shampoo kids",
      price: "₹691",
      path:'/products/channakya-shampoo',
      status:true,
      image: shampoo,
    },
    {
      name: "charcoal face wash",
      price: "₹491",
      path:'/products/facewash',
      status:true,
      image: facewash,
    },
    {
      name: "Chanakya care body lotion",
      price: "₹291",
      path:'',
      status:false,
      image: bodylotion,
    },
    {
      name: "Chanaka care sunscreen spray",
      price: "₹791",
      path:'',
      status:false,
      image: sunscreen,
    },
    {
      name: "Chanakya care face serum kids",
      price: "₹491",
      path:'',
      status:false,
      image: faceserum,
    },
    {
      name: "Kelite Hair removal spray",
      price: "₹791 ",
      path:'',
      status:false,
      image: Hairremoval,
    },
    {
      name: " wiper toilet seat spary ",
      price: "₹0",
      path:'',
      status:false,
      image: Sanitizer,
    },
  
  ];

  return (
   

    <section className="all-products-sec">
      <div className="container">
        <div className="row row-gap-4 ">
          {Allproducts.map((product,index)=>(
 <div className="col-lg-3 col-md-4 col-6 all-prod-col" key={index}>
 <div className="all-product-inner-wrap">
   <img src={product.image} alt={product.name} className="w-100 allproduct-images" />
   <div className="all-product-body">
     <h5 className="all-prod-b-title">{product.name}</h5>
     <div className="all-product-inner-b">
     <p>{product.price}</p>
     {!product.status && <p className="all-prod-sold-out">Sold Out</p>}
     </div>                
     <Link to={product.path} className={`all-prod-link-btn ${product.path==''?'disabled-link':""}`} >View Product</Link>
   </div>

 </div>

</div>

          ))}
         
        </div>
        
      </div>


    </section>
  );
}

export default AllProducts;
