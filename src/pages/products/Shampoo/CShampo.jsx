import React from "react";
import bannerProductimage from "../../../assets/images/shampoo/shampo.png";
import shampoo1 from "../../../assets/images/shampoo/shampoo-1.png";
import shampoo from "../../../assets/images/shampoo/shampo.png";
import Spray from "../../../components/Bahubali/Spray";



import shamppro11 from "../../../assets/images/shampoo/chanakya-care-shampoo-11.jpg";
import shamppro10 from "../../../assets/images/shampoo/chanakya-care-shampoo-10.jpg";
import shamppro3 from "../../../assets/images/shampoo/chanakya-care-shampoo-3.jpg";
import shamppro4 from "../../../assets/images/shampoo/chanakya-care-shampoo-4.jpg";

//css
import { useSelector } from 'react-redux'
import "./CShampo.css";
function CShampo({ addToCart }) {
  const { products } = useSelector((state) => state.products);
  const CharcoalShampoo = products.find(product => product.id === 4);
  return (
    <>
      <div className="c_shampoo">
        <section className="">
          <div className="container-fluid">
            <div className="banner-bg-cshampo">
              <div className="banner-cshampo-content">
                <img
                  src={bannerProductimage}
                  alt=""
                  className="banner-img-cshampo"
                />
                <h3 className="cshampo-title-1">
                Give Your Child the Hair Care They Deserve
                </h3>
                <p className="cshampo-p-1">
                Let kids be champions with the right shampoo—because strong hair, healthy scalps, and confidence start at an early age.
                </p>
                <div className="banner-cshampo-sec2-wrap">
                  <h4>Chanakya Care Shampoo</h4>
                  <p>The Perfect Shampoo for Growing Kids!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sec-2-cshampo-wrap">
          <div className="container-fluid">
            <div className="cshampo-sec-2-bg">
              <div className="sec-2-cshampoo-inner">
                <h3 className="sec-2-c-shampo-title">
                Gentle care for Growing Kids (5-15 years)
                </h3>
                <div className="row sec-2-c-shampo-row align-items-center">
                  <div className="col-lg-4">
                    <img src={bannerProductimage} alt="" className="w-100" />
                  </div>
                  <div className="col-lg-8">
                    <h4 className="sec-2-c-shampo-row-title">
                    Why do parents invest in baby shampoos but overlook proper hair care after age 5? 
                    </h4>
                    <p className="sec-2-c-shampo-row-p">
                    As children grow, maintaining healthy, strong, and dandruff-free hair becomes crucial—especially for school-going kids and young athletes exposed to sweat, dirt, and pollution.
                    </p>
                    <p className="sec-2-c-shampo-row-p">
                    Introducing Chanakya Care Shampoo: A pH-balanced, sulfate-free formula designed specifically for kids aged 5-15 years. It’s safe, gentle, and packed with natural ingredients to ensure hair remains nourished, strong, and protected during these vital years.
                    </p>
                  </div>
                </div>
                <div className="row sec-2-c-shampo-row">
                  <div className="col-lg-8">
                    <h4 className="sec-2-c-shampo-row-title">
                    Why Adult Shampoos Aren't Suitable for Kids
                    </h4>
                    <p className="sec-2-c-shampo-row-p">
                    Adult shampoos are often too harsh for children’s delicate scalps. They contain sulfates, parabens, and chemicals that strip natural oils, causing dryness and irritation. Chanakya Care Shampoo is specially formulated for kids’ softer, more sensitive hair and scalp, offering the gentlest care with natural, effective ingredients.
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <img src={bannerProductimage} alt="" className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "#ffff" }} className="pt-4">
        <Spray 
          id={CharcoalShampoo?.id || 4}
          images={[shamppro10, shamppro11]}
          title={CharcoalShampoo?.title  || "Chanakya Care Shampoo"}
          description={CharcoalShampoo?.description || "Let Kids be champions with the right Shampoo because strong hair, healthy scalps and confidence start at an early age."}
          price={CharcoalShampoo?.price || 691}
          oldPrice={CharcoalShampoo?.oldPrice || 730}   
          addToCart={addToCart}>

        </Spray>
        </section>


        <section>
        <div className="container sha-des">
       <div className="sha-des-holder">
       <div className="row align-items-center">
                <div className="col-lg-6">
                    <img src={shampoo} alt="" className="w-100" />

                </div>
                <div className="col-lg-6">
                  <h4 className="sec-4-cshampoo-h">Neem Extract for Lice Control</h4>
                  <p className="sec-4-cshampoo-p">
                Neem extract is a powerful natural remedy for lice prevention and scalp protection, 
                making it an essential ingredient in Chanakya Care Shampoo. Rich in azadirachtin, neem 
                helps eliminate lice by disrupting their reproduction cycle while forming a protective 
                barrier against infestations. Its antibacterial and antifungal properties soothe itchy 
                scalps, cleanse away dead lice and nits, and ensure long-term scalp health.
              </p>

                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-lg-6">
                <h4 className="sec-4-cshampoo-h">Why Young Athletes Need a Special Shampoo</h4>
              <p className="sec-4-cshampoo-p">
                Young athletes constantly face scalp challenges due to sweat buildup, shared sports gear, 
                and exposure to pollution. Excess sweat can clog pores, leading to dandruff and itching, 
                while wearing helmets and caps increases the risk of lice infestation. Chanakya Care Shampoo 
                is specially designed with Tea Tree Oil, Neem, and Aloe Vera to ensure strong and healthy hair.
              </p>
                </div>
                <div className="col-lg-6">
                    <img src={shampoo} alt="" className="w-100"/>
                </div>

            </div>
       </div>
        </div>

            <div>
                
            </div>
        </section>
        <section className="c_shampoo py-5">
          <div className="container">
            <div className="row my-5">
              <div className="col-md-6 col-12">
                <img src={shamppro3} className="w-100" />
              </div>
              <div className="col-md-6 col-12">
              <img src={shamppro4}  className="w-100"/>

              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CShampo;
