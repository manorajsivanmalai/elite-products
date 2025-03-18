import React, { useState } from "react";
import ImageMagnify from "react-image-magnify";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Spray.css";

const Spray = ({
  id,
  images,
  title,
  description,
  price,
  oldPrice,
  addToCart,
}) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <section className="bahu-product-container container">
      <div className="row  row-gap-3">
        <div className="col-lg-6 col-12">
          <div className="row bahu-product-left">
            <div className="col-lg-2 col-md-2">
              <div className="thumbnail-gallery">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`thumbnail ${
                      selectedImage === img ? "active" : ""
                    } w-100`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-10 col-md-10">
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
                      width: 1000,
                      height: 1000,
                    },
                    enlargedImageContainerDimensions: {
                      className: "w-100",
                      width: "100%",
                      height: "100%",
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="product-details col-lg-6 col-12">
          <h2 className="product-title">{title}</h2>
          <p className="product-description">{description}</p>
          <div className="pricing">
            <span className="product-price">₹{price * quantity}</span>
            {oldPrice && <span className="old-price">₹{oldPrice}</span>}
          </div>
          <div className="quantity-selector">
            <button className="quantity-btn" onClick={decreaseQuantity}>
              <FaMinus />
            </button>
            <span>{quantity}</span>
            <button className="quantity-btn" onClick={increaseQuantity}>
              <FaPlus />
            </button>
          </div>

          <button
            className="add-to-cart"
            onClick={() => addToCart({ id, quantity })}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </section>
  );
};

export default Spray;
