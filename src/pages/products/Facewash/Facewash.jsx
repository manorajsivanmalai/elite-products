import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Facewash.css";
import Spray from "../../../components/Bahubali/Spray";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import fashwashbanner from "../../../assets/images/facewash/facewash-banner.webp";
import fc1 from "../../../assets/images/facewash/fc-1.jpg";
import fc2 from "../../../assets/images/facewash/fc-2.png";
import fc3 from "../../../assets/images/facewash/fc-3.png";
import usage from "../../../assets/images/facewash/how-to-use-img.webp";
import { useSelector } from "react-redux";

const ingredients = [
  {
    name: "Activated Charcoal",
    benefit:
      "Deeply cleanses and detoxifies the skin by drawing out impurities, dirt, and toxins from the pores, leaving skin refreshed and clear.",
  },
  {
    name: "Neem Extract",
    benefit:
      "Known for its antibacterial and antifungal properties, neem helps combat acne, pimples, and skin irritations, promoting a healthy complexion.",
  },
  {
    name: "Aloe Vera Extract",
    benefit:
      "Soothes and hydrates the skin, reducing redness and irritation, while promoting skin healing and rejuvenation.",
  },
  {
    name: "Tulsi Extract",
    benefit:
      "Acts as a natural antiseptic, fighting bacteria and preventing breakouts, while improving the overall texture of the skin.",
  },
  {
    name: "Tea Tree Oil",
    benefit:
      "Reduces acne-causing bacteria, controls excess oil production, and helps maintain clear skin.",
  },
  {
    name: "Kesar (Saffron) Color",
    benefit:
      "Known for its skin-brightening properties, saffron enhances the skin’s natural glow, giving a fresh and radiant look.",
  },
  {
    name: "Glycerin",
    benefit:
      "Acts as a humectant that attracts moisture, keeping the skin hydrated and soft without making it greasy.",
  },
  {
    name: "Fragrance",
    benefit:
      "Provides a pleasant scent while keeping the facewash refreshing to use.",
  },
];
const steps = [
  {
    title: "Wet Your Face",
    desc: "Splash your face with lukewarm water to open up the pores.",
  },
  {
    title: "Dispense the Foam",
    desc: "Pump a small amount of the foaming face wash onto your palm or directly onto your face.",
  },
  {
    title: "Massage Gently",
    desc: "Use your fingertips to massage the foam in circular motions, focusing on areas with pimples, acne, and open pores. Avoid contact with eyes.",
  },
  {
    title: "Leave for a Few Seconds",
    desc: "Let the active ingredients work on your skin for 10-15 seconds.",
  },
  {
    title: "Rinse Thoroughly",
    desc: "Wash off with lukewarm or cold water and pat dry with a clean towel.",
  },
  {
    title: "Follow Up",
    desc: "Apply a light moisturizer or serum for added hydration.",
  },
];

function Facewash({ addToCart }) {
  const { products } = useSelector((state) => state.products);
  const CharcoalFaceWash = products.find(product => product.id === 3);

  return (
    <>
      <section className="bahubali-product">
        <div className="banner-section">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            className="banner-swiper"
          >
            <SwiperSlide>
              <div className="banner-slide">
                <img
                  src={fashwashbanner}
                  alt="Banner 1"
                  className="banner-image"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className="fc-sec-2">
        <div className="fc-bg-added">
          <div className="container">
            <div className="row">
              <div className="fc-content col-md-6">
                <h4>Charcoal Face Wash</h4>
                <p>
                Get a fresh, clear, and radiant complexion with our Charcoal Face Wash. Activated charcoal deeply cleanses, unclogs pores, and draws out impurities to leave your skin feeling rejuvenated and glowing. Whether you're battling acne or simply want a refreshed, clear look, this foaming face wash offers a powerful yet gentle solution.
                </p>
              </div>
            </div>
            <button className="btn-17">
              <span className="text-container">
                <span className="text"><a href="#cart" className='anchor-tag'>SHOP </a></span>
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="fc-sec-3" id='cart'>
        <section className="bahu-product-sec6">
          <Spray
            id={CharcoalFaceWash?.id || 3}
            images={CharcoalFaceWash?.images || [fc2, fc1, fc3]}
            title={CharcoalFaceWash?.title || "Charcoal Face Wash"}
            description={CharcoalFaceWash?.description || "Charcoal Face Wash Cares for Your Skin, Keeping It Clean, Clear, and Fresh!"}
            price={CharcoalFaceWash?.price || 491}
            oldPrice={CharcoalFaceWash?.oldPrice || 550}
            addToCart={addToCart}
          />
        </section>
      </section>

      <section className="key-ingredients-section">
        <div className="container">
          <h3 className="title-section">Key Ingredients & Their Benefits</h3>
          <div className="row fc-benifits-content">
            {ingredients.map((item, index) => (
              <div key={index} className=" col-lg-3 col-md-4 col-12">
                <div className="ingredient-card">
                  <h5>{item.name}</h5>
                  <p>{item.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="how-to-use-section">
        <div className="container">
          <h3 className="title-section">
            How to Use Charcoal Foaming Face Wash{" "}
          </h3>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <img src={usage} alt="how-to-use" className="usageimage" />
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row usage-content row-gap-3">
                {steps.map((item, index) => (
                  <div key={index} className="col-md-6 p-3">
                   <div className="us-item">
                    <img src="" alt="image" />
                      <h5>{item.title}</h5>
                      <p>{item.desc}</p>
                   </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Facewash;
