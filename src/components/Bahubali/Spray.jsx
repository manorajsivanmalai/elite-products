import React, { useState } from "react";
import ImageMagnify from "react-image-magnify";
import { FaStar, FaPlus, FaMinus } from "react-icons/fa";   
import "./Spray.css"; 

const Spray = ({ images, title, description, price, oldPrice }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <section className="bahu-product-container container">
     <div className="row">
     <div className="bahu-product-left col-md-6 ">
    
       <div className="thumbnail-gallery">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${selectedImage === img ? "active" : ""}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        <div className="product-image">
          <ImageMagnify
            {...{
              smallImage: {
                alt: "Product Image",
                isFluidWidth: true,
                src: selectedImage,
              },
              largeImage: {
                src: selectedImage,
                width: 400,
                height: 500,
              },
              enlargedImageContainerDimensions: {
                width: "50%",
                height: "50%",
              },
            }}
          />
        </div>
   
      </div>

      <div className="product-details col-md-6">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>

        <div className="star-rating">
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
        </div>

        <div className="pricing">
          <span className="product-price">₹{price}</span>
          {oldPrice && <span className="old-price">₹{oldPrice}</span>}
        </div>

        <div className="quantity-selector">
          <button className="quantity-btn" onClick={decreaseQuantity}><FaMinus /></button>
          <span>{quantity}</span>
          <button className="quantity-btn" onClick={increaseQuantity}><FaPlus /></button>
        </div>

        {/* <button className="buy-btn">BUY NOW</button> */}
        <button className="add-to-cart">ADD TO CART</button>
      </div>
     </div>
    </section>
  );
};

export default Spray;
