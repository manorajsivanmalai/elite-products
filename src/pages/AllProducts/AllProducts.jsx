import React from "react";
import "./AllProducts.css";
import { Link } from "react-router-dom";

function AllProducts() {
  const Allproducts = [
    {
      name: "Bhahubali Men Intimate wash",
      price: "₹591",
      path:'/products/men-intimate-foam',
      status:true,
      image: "https://demos.reytheme.com/london/wp-content/uploads/sites/8/2019/03/23-600x800.jpg",
    },
    {
      name: "Bhahubali Men intimate mist",
      price: "₹291",
      path:'/products/men-intimate-mist',
      status:true,
      image: "https://demos.reytheme.com/london/wp-content/uploads/sites/8/2019/03/23-600x800.jpg",
    },
    {
      name: "chanakya care shampoo kids",
      price: "₹691",
      path:'/products/channakya-shampoo',
      status:true,
      image: "https://demos.reytheme.com/london/wp-content/uploads/sites/8/2019/03/23-600x800.jpg",
    },
    {
      name: "charcoal face wash",
      price: "₹491",
      path:'/products/facewash',
      status:true,
      image: "https://demos.reytheme.com/london/wp-content/uploads/sites/8/2019/03/23-600x800.jpg",
    },
    {
      name: "Chanakya care body lotion",
      price: "₹0",
      path:'',
      status:false,
      image: "https://demos.reytheme.com/london/wp-content/uploads/sites/8/2019/03/23-600x800.jpg",
    },
    {
      name: "Chanaka care sunscreen spray",
      price: "₹0",
      path:'',
      status:false,
      image: "https://demos.reytheme.com/london/wp-content/uploads/sites/8/2019/03/23-600x800.jpg",
    },
    {
      name: "chanakaya care face mist (kids)",
      price: "₹0",
      path:'',
      status:false,
      image: "https://demos.reytheme.com/london/wp-content/uploads/sites/8/2019/03/23-600x800.jpg",
    },
    {
      name: "Chanakya care face serum kids",
      price: "₹0",
      path:'',
      status:false,
      image: "https://demos.reytheme.com/london/wp-content/uploads/sites/8/2019/03/23-600x800.jpg",
    },
    {
      name: "Kelite Hair removal spray",
      price: "₹0",
      path:'',
      status:false,
      image: "https://demos.reytheme.com/london/wp-content/uploads/sites/8/2019/03/23-600x800.jpg",
    },
    {
      name: " wiper toilet seat spary ",
      price: "₹0",
      path:'',
      status:false,
      image: "https://demos.reytheme.com/london/wp-content/uploads/sites/8/2019/03/23-600x800.jpg",
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
