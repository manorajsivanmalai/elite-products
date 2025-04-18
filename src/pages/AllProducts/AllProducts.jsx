import "./AllProducts.css";
import { Link } from "react-router-dom";
import Foam from "../../../src/assets/images/all-products/Foam.webp";
import spary from "../../../src/assets/images/all-products/spary.webp";

import shampoo from "../../../src/assets/images/all-products/shampoo.webp";
import facewash from "../../../src/assets/images/all-products/facewash.webp";
import bodylotion from "../../../src/assets/images/all-products/bodylotion.webp";
import sunscreen from "../../../src/assets/images/all-products/sunscreen.webp";
import faceserum from "../../../src/assets/images/all-products/faceserum.webp";
import Hairremoval from "../../../src/assets/images/all-products/Hairremoval.webp";
import Sanitizer from "../../../src/assets/images/all-products/Sanitizer.webp";
import combo from "../../../src/assets/images/all-products/combo.webp";
// import {} from '../../features/products/ProductSlice'

import productBahubaliCombo from "../../assets/images/all-products/products-bahubali-combo.png"
import productcharcoal from "../../assets/images/all-products/products-charcoal.png"
import productspray from "../../assets/images/all-products/products-spray.png"
import productwash from "../../assets/images/all-products/products-wash.png"
import productshampoo from "../../assets/images/all-products/products-shampoo.png"


import { useSelector } from "react-redux";

function AllProducts() {
  const { products } = useSelector((state) => state.products);
  const foamingWash = products.find((product) => product.id === 1);
  const menIntimateMistSpray = products.find((product) => product.id === 2);
  const charcoalfacewash = products.find((product) => product.id === 3);
  const careshampoo = products.find((product) => product.id === 4);
  // const foamingProduct = products.find(product => product.id === 1);
  const Allproducts = [
    {
      name: "Bhahubali Men Intimate wash",
      price: "₹" + foamingWash.price,
      path: "/products/men-intimate-foam",
      status: true,
      image: productwash,
    },
    {
      name: "Bhahubali Men intimate mist",
      price: "₹" + menIntimateMistSpray.price,
      path: "/products/men-intimate-mist",
      status: true,
      image: productspray,
    },
    {
      name: "chanakya care shampoo kids",
      price: "₹" + careshampoo.price,
      path: "/products/channakya-shampoo",
      status: true,
      image: productshampoo,
    },
    {
      name: "charcoal face wash",
      price: "₹" + charcoalfacewash.price,
      path: "/products/facewash",
      status: true,
      image: productcharcoal,
    },
    {
      name: "Combo Men intimate wash + Men intimate mist ",
      price: "₹" + charcoalfacewash.price,
      path: "/products/men-intimate-mist#cart",
      status: true,
      image: productBahubaliCombo,
    },
    {
      name: "Chanakya care body lotion",
      price: "₹291",
      path: "",
      status: false,
      image: bodylotion,
    },
    {
      name: "Chanaka care sunscreen spray",
      price: "₹791",
      path: "",
      status: false,
      image: sunscreen,
    },
    {
      name: "Chanakya care face serum kids",
      price: "₹491",
      path: "",
      status: false,
      image: faceserum,
    },
    {
      name: "Kelite Hair removal spray",
      price: "₹791 ",
      path: "",
      status: false,
      image: Hairremoval,
    },
    {
      name: " wiper toilet seat spary ",
      price: "₹291",
      path: "",
      status: false,
      image: Sanitizer,
    },
  ];

  return (
    <section className="all-products-sec">
      <div className="container">
        <div className="row row-gap-4 ">
          {Allproducts.map((product, index) => (
            <div className="col-lg-3 col-md-4 col-6 all-prod-col" key={index}>
              <div className="all-product-inner-wrap">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-100 allproduct-images"
                />
                <div className="all-product-body">
                  <h5 className="all-prod-b-title">{product.name}</h5>
                  <div className="all-product-inner-b">
                    <p>{product.price}</p>
                    {!product.status && (
                      <p className="all-prod-sold-out">Sold Out</p>
                    )}
                  </div>
                  <Link
                    to={product.path}
                    className={`all-prod-link-btn ${
                      product.path == "" ? "disabled-link" : ""
                    }`}
                  >
                    View Product
                  </Link>
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
