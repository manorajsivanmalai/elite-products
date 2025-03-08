import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Spray from "../../../components/Bahubali/Spray";

import spray from "../../../assets/images/bahubali/Bhahubali_100ML_3D-removebg-preview (1).png";
import "../Bahubali/Product1.css"
import bannerimg2 from "../../../assets/images/homepage/banners/home-banner-desktop-2.webp"
import bannerimg4 from "../../../assets/images/homepage/banners/home-banner-desktop-4.webp"
import bannermobimg2 from "../../../assets/images/homepage/banners/home-banner-mob-2.png"
import bannermobimg4 from "../../../assets/images/homepage/banners/home-banner-mob-3.png"
import mist from "../../../assets/images/bahubali/intimate-mist.png"
import selfconfidence from "../../../assets/images/bahubali/self_confidence.jpg";
import intiamte from "../../../assets/images/bahubali/Men intimate mist.jpg"

import seven from "../../../assets/images/bahubali/pH balance.jpg"
import one from "../../../assets/images/bahubali/sweat.jpg";
import two from "../../../assets/images/bahubali/odor.jpg";
import three from "../../../assets/images/bahubali/non.jpg";
import four from "../../../assets/images/bahubali/oil.jpg"
import five from "../../../assets/images/bahubali/protection.jpg"
import six from "../../../assets/images/bahubali/hygiene.jpg"
import Shake from "../../../assets/images/bahubali/Shake.jpg"
import distance from "../../../assets/images/bahubali/distance.jpg"
import workouts from "../../../assets/images/bahubali/workouts.jpg"

import needed from "../../../assets/images/bahubali/needed.jpg"
import intimacy from "../../../assets/images/bahubali/intimacy.jpg"
import dressing from "../../../assets/images/bahubali/dressing.jpg"
import bannerBg from "../../../assets/images/bahubali/banana-banner.png"

import body from "../../../assets/images/bahubali/body.png"
import needs from "../../../assets/images/bahubali/needs.png"
import skin from "../../../assets/images/bahubali/skin-protection.png"
import fresh from "../../../assets/images/bahubali/fresh.png"
import hand from "../../../assets/images/bahubali/hand.png"
import discomfort from "../../../assets/images/bahubali/dermatology.png"
import success from "../../../assets/images/bahubali/success.png"
import bacteria from "../../../assets/images/bahubali/bacteria.png"



import depilation from "../../../assets/images/bahubali/depilation.png"





import { useSelector } from 'react-redux';







const points = [
  {
    text: "Hygiene – Keeps intimate areas fresh and clean.",
    img: hand,
  },
  {
    text: "Comfort – Prevents irritation, sweat, and discomfort.",
    img: discomfort,
  },
  {
    text: "Confidence – Eliminates unwanted odors instantly.",
    img: success,
  },
  {
    text: "Protection – Fights bacteria, fungi, and infections.",
    img: bacteria,
  },
  {
    text: "Skin Health – Maintains pH balance and soothes skin.",
    img: skin,
  },
  {
    text: "Lifestyle – Perfect for work, gym, travel, and daily hygiene.",
    img: needs,
  },
];
const benefits = [
  { text: "Maintains pH balance and prevents irritation.", img: seven },
  { text: "Controls sweat and keeps you fresh all day.", img: one },
  { text: "Eliminates bad odor and prevents bacterial growth.", img: two },
  { text: "Quick-dry, non-sticky formula for daily use.", img: three },
  { text: "Enriched with tea tree oil and menthol for soothing effects.", img: four },
  { text: "Protects against fungal infections and discomfort.", img: five },
  { text: "Perfect for gym, work, and travel hygiene.", img: six },
];
const usageInstructions = [
  { text: "Shake well before use.", img: Shake },
  { text: "Spray from a distance of 5-8 cm.", img: distance },
  { text: "Use before & after intimate activities or workouts.", img: workouts },
  { text: "Let It Dry: Wait a few seconds for the mist to dry—no need to rinse.", img: needed },
  { text: "Use again during the day, especially if feeling sweaty or uncomfortable", img: intimacy },
  { text: "Allow a few seconds for the spray to dry before dressing", img: dressing },

];


function Product1({ addToCart }) {

  const { products } = useSelector((state) => state.products);
  const sprayProduct = products.find(product => product.id === 2);


  return (
    <>
      <section className='bahubali-product'>
        <div className='banner-section'>
          <Swiper
            modules={[Autoplay]}

            autoplay={{ delay: 3000 }}
            loop={false}
            className="banner-swiper"
          >
            <SwiperSlide>
              <div className="banner-slide">
                <picture>
                  <source media="(max-width: 767px)" srcSet={bannermobimg2} />
                  <source media="(min-width: 768px)" srcSet={bannerimg2} />
                  <img src={bannerimg2} className="w-100 banner-image" alt="Banner 1" />
                </picture>
                <div className="banner-content">

                  <button className="shop-now-btn"><a href="#cart" className='anchor-tag'>SHOP NOW</a></button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="banner-slide">
              <picture>
                  <source media="(max-width: 767px)" srcSet={bannermobimg4} />
                  <source media="(min-width: 768px)" srcSet={bannerimg4} />
                  <img src={bannerimg4} className="w-100 banner-image" alt="Banner 1" />
                </picture>
                <div className="banner-content">

                  <button className="shop-now-btn"><a href="#cart" className='anchor-tag'>SHOP NOW</a></button>
                </div>
              </div>
            </SwiperSlide>



          </Swiper>


        </div>

      </section>
      <section className='bahu-product-sec2'>
        <div className='container '>

          <div className='row intimate-wash'>
            <div className='col-md-6 p-2'>
              <div className='product-item'>

                <div className='product-content'>
                  <h3>Men Intimate Mist Spray – Bahubali</h3>
                  <p>Introducing the ultimate hygiene solution for modern men – Men’s Intimate Mist Spray! Formulated with lactic acid, tea tree oil (2%), aloe vera extract, chamomile extract, and menthol, this quick-dry, non-sticky mist ensures freshness, odor control, and protection from bacteria and sweat</p>
                  <button className='buy-btn'><a href="#cart" className='anchor-tag'>BUY NOW</a></button>
                </div>
              </div>



            </div>
            <div className='col-md-6'>
              <div className='Intimate-image'>
                <img src={mist} alt="" width='100%' />

              </div>

            </div>

          </div>
        </div>

      </section>
      <section className="bahu-product-sec3 bg-added" style={{ backgroundImage: `url(${bannerBg})` }}>
        <div className='row'>
          <div className="col-md-3 d-flex align-items-start ps-5 swipe-text">
            <h2 className="text-uppercase">Men’s Intimate Mist <br></br> Spray Cares for Your</h2>
            <button className='swipe-btn'><a href="#cart" className='anchor-tag'>SHOP NOW</a></button>
          </div>

          <div className='col-md-9'>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={10}
              // navigation
              loop={true}
              // pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                0: {  // Ensure mobile starts at 0px
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              {points.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="swipe-details">
                    <img
                      src={item.img}
                      alt={item.text}
                      className="img-fluid"

                    />
                    <p className="">{item.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>

        </div>



      </section>
      <section className='bahu-product-sec4'>
        <div className='container '>

          <div className='row  intimate-benifits'>
            <div className='col-md-6'>
              <div className='Intimate-image'>
                <img src={intiamte} alt="" width='100%' />

              </div>

            </div>
            <div className='col-md-6 p-2'>
              <div className='product-benifits-item'>

                <div className='product-benifits-content'>
                  <h3>Key Ingredients & Their Benefits – Men’s Intimate Mist Spray</h3>
                  <p><b>Lactic Acid </b> – Maintains pH balance, prevents irritation, and supports skin health</p>
                  <p><b>Tea Tree Oil (2%)</b> – Powerful antibacterial & antifungal properties to combat infections.</p>
                  <p><b>Tea Tree Oil (2%)</b> – Powerful antibacterial & antifungal properties to combat infections.</p>
                  <p><b>Chamomile Extract </b> – Reduces inflammation, irritation, and redness.</p>
                  <p><b>Chamomile Extract</b> – Reduces inflammation, irritation, and redness.</p>
                  <p><b>Menthol </b>– Provides a cooling sensation and instant refreshment.</p>
                  <p><b>Cyclodextrin</b> – Absorbs moisture and controls odor for all-day comfort.</p>

                  <button className='product-benifits-btn'><a href="#cart" className='anchor-tag'>SHOP NOW</a></button>
                </div>
              </div>



            </div>


          </div>
        </div>

      </section>
      <section className='bahu-product-sec5 bg-added' style={{ backgroundImage: `url(${bannerBg})` }}>
        <div className='container'>
          <h2 className='section-title text-center text-uppercase'>Unleash Freshness: Benefits & Uses</h2>
          <div className='row'>

            <div className='col-md-6'>
              <h3 className='text-uppercase benefits-title pb-2'>Why Choose Intimate Mist?</h3>
              <ul className='benefits-list'>
                {benefits.map((item, index) => (
                  <li key={index} className='benefit-item'>
                    <img src={item.img} alt={item.text} className='benefit-icon' />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>


            <div className='col-md-6'>
              <h3 className='text-uppercase usage-title pb-2 text-center'>How to Use :</h3>
              <div className='usage-grid'>
                {usageInstructions.map((item, index) => (
                  <div key={index} className='usage-item text-center'>
                    <img src={item.img} alt={item.text} className='usage-img' />
                    <p className='usage-text'>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='bahu-product-sec6' id='cart'>
        <Spray
          id={sprayProduct?.id || 2}
          images={[spray, mist]}
          title={sprayProduct?.title || "Men Intimate Mist Spray – Bahubali"}
          description={sprayProduct?.description || "Introducing the ultimate hygiene solution for modern men. Formulated with lactic acid, tea tree oil, aloe vera extract, chamomile extract, and menthol, ensuring freshness and odor control."}
          price={sprayProduct?.price || 291}
          oldPrice={sprayProduct?.oldPrice || 500}
          addToCart={addToCart}
        />


      </section>


    </>
  )
}

export default Product1
