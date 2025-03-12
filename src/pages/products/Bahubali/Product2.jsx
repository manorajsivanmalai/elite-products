import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Spray from "../../../components/Bahubali/Spray";

import spray from "../../../assets/images/bahubali/Bhahubali_100ML_3D-removebg-preview (1).png";
import "../Bahubali/Product2.css"
import bannerimg2 from "../../../assets/images/homepage/banners/home-banner-desktop-2.webp"
import bannerimg4 from "../../../assets/images/homepage/banners/home-banner-desktop-4.webp"
import foam1 from "../../../assets/images/bahubali/foam-1.png"
import selfconfidence from "../../../assets/images/bahubali/self_confidence.jpg";
import foam2 from "../../../assets/images/bahubali/foam-2.jpg"
import bannermobimg2 from "../../../assets/images/homepage/banners/home-banner-mob-2.png"
import bannermobimg4 from "../../../assets/images/homepage/banners/home-banner-mob-3.png"
// import seven from "../../../assets/images/bahubali/pH balance.jpg"
// import one from "../../../assets/images/bahubali/sweat.jpg";
// import two from "../../../assets/images/bahubali/odor.jpg";
// import three from "../../../assets/images/bahubali/non.jpg";
// import four from "../../../assets/images/bahubali/oil.jpg"
// import five from "../../../assets/images/bahubali/protection.jpg"
// import six from "../../../assets/images/bahubali/hygiene.jpg"
import Shake from "../../../assets/images/bahubali/Shake.jpg"
import distance from "../../../assets/images/bahubali/distance.jpg"
import workouts from "../../../assets/images/bahubali/workouts.jpg"

import needed from "../../../assets/images/bahubali/needed.jpg"
import intimacy from "../../../assets/images/bahubali/intimacy.jpg"
import dressing from "../../../assets/images/bahubali/dressing.jpg"
import bannerBg from "../../../assets/images/bahubali/banana-banner.png";
import phmeter from "../../../assets/images/bahubali/ph-meter.png"
import fresh from "../../../assets/images/bahubali/fresh.png"
import odorirritation from "../../../assets/images/bahubali/body.png"
import skinprotection from "../../../assets/images/bahubali/skin-protection.png"
import drops from "../../../assets/images/bahubali/drops.png"
import massage from "../../../assets/images/bahubali/massage.png"
import dispenser from "../../../assets/images/bahubali/dispenser.png"
import towel from "../../../assets/images/bahubali/towel.png"

import { useSelector } from 'react-redux';







const points = [
  {
    text: "Prevents odor & irritation",
    img: odorirritation, 
  },
  {
    text: "Maintains pH balance",
    img: phmeter,
  },
  {
    text: "Keeps you fresh all day",
    img:fresh,
  },
  {
    text: "Gentle & soothing for sensitive skin",
    img: skinprotection,
  },

 
];
// const benefits = [
//   { text: "Maintains pH balance and prevents irritation.", img: seven },
//   { text: "Controls sweat and keeps you fresh all day.", img: one },
//   { text: "Eliminates bad odor and prevents bacterial growth.", img: two },
//   { text: "Quick-dry, non-sticky formula for daily use.", img: three },
//   { text: "Enriched with tea tree oil and menthol for soothing effects.", img: four },
//   { text: "Protects against fungal infections and discomfort.", img: five },
//   { text: "Perfect for gym, work, and travel hygiene.", img: six },
// ];
const usageInstructions = [
  { text: "Pump a small amount of the foaming wash onto your palm.", img: dispenser },
  { text: "Massage the foam onto the intimate area for 20-30 seconds", img:massage  },
  { text: "Wash off with water and ensure no residue remains.", img: drops },
  { text: "Use a clean, soft towel to gently dry the area.", img: towel }
 
];


function Product2({addToCart}) {
  const { products } = useSelector((state) => state.products);
  const foamingProduct = products.find(product => product.id === 1);

  return (
    <>
    <section className='bahubali-product'>
      <div className='banner-section'>
      <Swiper
        modules={[ Autoplay]}
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
     
        <div className='col-md-6'>
          <div className='Intimate-image'>
            <img src={foam1} alt=""  width='100%'/>

          </div>

        </div>
        <div className='col-md-6 p-2'>
          <div className='product-item'>
           
            <div className='product-content'>
              <h3>Men’s Intimate Foaming Wash </h3>
              <p>Men’s Intimate Foaming Wash is specially formulated to maintain hygiene, freshness, and confidence. Enriched with Lactic Acid, Tea Tree Oil, Seabuckthorn Oil, Cranberry Extract, and Aloe Vera, it gently cleanses while preventing odor, irritation, and infections. With a refreshing banana fragrance, this pH-balanced formula ensures all-day comfort. </p>
              <button className='buy-btn'><a href="#cart" className='anchor-tag'>BUY NOW</a></button>
            </div>
          </div>

       

        </div>

      </div>
      </div>

    </section>
    <section className='bahu-product-sec3 bg-added' style={{ backgroundImage: `url(${bannerBg})` }}>
      <div className='row'>
     

        <div className='col-md-9'>
        <Swiper
            modules={[ Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
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

        <div className="col-md-3 d-flex align-items-start ps-5 swipe-text">
        <h2 className="text-uppercase">Men's Intimate Foaming Wash cares  <br></br> hygiene, freshness, and confidence.</h2>
        <button className='swipe-btn'><a href="#cart" className='anchor-tag'>SHOP NOW</a></button>
        </div>

      </div>



    </section>
    <section className='bahu-product-sec4'>
      <div className='container '>
        
      <div className='row  intimate-benifits'>
    
        <div className='col-md-6 p-2'>
          <div className='product-benifits-item'>
           
            <div className='product-benifits-content'>
              <h3>Key Ingredients & Their Benefits – Men’s Intimate Foaming Wash </h3>
              <p><b>Lactic Acid </b> – Maintains pH balance, prevents infections, reduces irritation.</p>
              <p><b>Tea Tree Oil (2%)</b> –Antibacterial, prevents odor & irritation, soothes redness.</p>
              <p><b>Seabuckthorn Oil </b> – Rich in antioxidants, nourishes skin, aids healing.</p>
              <p><b>Cranberry Extract</b> –Antibacterial, supports intimate health, hydrates skin.</p>
              <p><b>Aloe Vera Extract </b>– Hydrates, soothes irritation, keeps skin refreshed.</p>
              <p><b>Banana Flavor</b> – Refreshing fragrance, enhances experience, long-lasting freshness.</p>

              <button className='product-benifits-btn'><a href="#cart" className='anchor-tag'>BUY NOW</a></button>
            </div>
          </div>

       

        </div>

        <div className='col-md-6'>
          <div className='Intimate-image'>
            <img src={foam2} alt=""  width='100%'/>

          </div>

        </div>
      

      </div>
      </div>

    </section>
    <section className='bahu-product-sec5 bg-added' style={{ backgroundImage: `url(${bannerBg})` }}>
        <div className='container'>
          <h2 className='section-title text-center text-uppercase'>How to Use</h2>
          <div className='row'>
            <div className='col-md-12'>
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
        id={foamingProduct?.id ||1}
        images={[foam2, foam1]}
        title={foamingProduct?.title || "Men’s Intimate Foaming Wash "}
        description={foamingProduct?.description  || "Men’s Intimate Foaming Wash is specially formulated to maintain hygiene, freshness, and confidence. Enriched with Lactic Acid, Tea Tree Oil, Seabuckthorn Oil, Cranberry Extract, and Aloe Vera, it gently cleanses while preventing odor, irritation, and infections. With a refreshing banana fragrance, this pH-balanced formula ensures all-day comfort."}
        price={foamingProduct?.price || 591}
        oldPrice={foamingProduct?.oldPrice || 691}
        addToCart={addToCart}
      />


      </section>
    
    
    </>
  )
}

export default Product2
