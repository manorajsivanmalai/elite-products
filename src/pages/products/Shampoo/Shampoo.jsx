import React from 'react'
import "../Shampoo/Shampoo.css"
import shampoo from "../../../assets/images/shampoo/shampo.png"
import clipboard from "../../../assets/images/shampoo/clipboard.png"
import shampoo1 from "../../../assets/images/shampoo/shampoo-1.png"
import shampp02 from "../../../assets/images/shampoo/shamppo-2.png"
import Spray from "../../../components/Bahubali/Spray"
function Shampoo() {
  return (
  <>
  <section>
    <div className='container-fluid main-banner'>
      <div className='sha-sec-pat'>
      <div className='sha-sec-img'>
            <img src={shampoo} alt=""  />

        </div>
        <div className='sha-sec-content'>
            <h5>Give Your Child the hair Care They Deserve</h5>
            <p>Let Kids be champions with the right Shampoo because strong hair, healthy scalps and confidence start at an early age.</p>

        </div>
        <div className='sha-sec-description text-center'>
            <div className='sha-sec-des'>
                <h4>Chanakya Care Shampoo</h4>
                <h5>The Perfect Shampoo for Growing Kids!</h5>
            </div>
        </div>

      </div>


    </div>

  </section>

  <section className='shampo-sec2'>
    <div className='sham-sec2-img'>
        <img src={clipboard} alt="clipboard" width='100%' />
        <div className='sham-sec-con'>
            <h1>Gentel care for Growing Kids (5-15 years)</h1>
        </div>
        <div className='sham-products-des'>
          
           <img src={shampoo} alt="shampo1" className='shampoo-image1' />
         
           <div className='shamp-content'>
            <h4>Why do parents invest in baby shampoo but overlook proper hair care after age 5?</h4>
            <p>As children grow, maintaining healthy, strong, and dandruff-free hair becomes crucial—especially for school-going kids and young athletes exposed to sweat, dirt, and pollution.
            Introducing Chanakya Care Shampoo: A pH-balanced, sulfate-free formula designed specifically for kids aged 5-15 years. It’s safe, gentle, and packed with natural ingredients to ensure hair remains nourished, strong, and protected during these vital years</p>
            <p>Young athletes are always on the move—training, sweating, and pushing their limits. But with constant exposure to sweat, dirt, and pollution, their scalp health is at risk. Regular shampoos may not provide the protection and nourishment their hair needs.</p>
           </div>


        </div>


        <div className='shamp-desc-two'>
            <div className='shap-des-two-content'>
                <h4>What makes Chanakya Care Shampoo suitable for growing kids?</h4>
                <p>To bridge this gap in hair care, Chanakya Care Shampoo was born—a specialized, pH-balanced, natural formula designed for growing kids to ensure their hair remains healthy, nourished, and protected during these important years.</p>
                <p><strong>Chanaka care Shampoo cares for your:-</strong> Chanakya Care Shampoo is specially formulated for kids aged 5 to 15 years, focusing on sensitive scalps, dandruff control, lice prevention, and overall hair health. It is pH-balanced, sulfate-free, and paraben-free, ensuring safe and gentle care.</p>
                <p>Chanakya Care Shampoo is enriched with natural ingredients that promote healthy hair and scalp. It maintains pH balance, gently exfoliates dead skin, and prevents dandruff. Tea tree oil and neem extract provide antibacterial and antifungal protection, reducing lice and scalp infections. Aloe vera and plant keratin soothe the scalp, hydrate hair, and repair damage. Onion extract strengthens follicles, reducing hair fall and boosting growth, while salicylic acid removes dandruff flakes and controls excess oil, keeping hair fresh and nourished.</p>

            </div>
            <img src={shampoo} alt="shamp2" className='shampoo-image2' />


        </div>

    </div>
  

  </section>




    <section className="shampoo-sec3">
      <div className="shamp-con3">
        <img src={clipboard} alt="clipboard" className="clipboard-img" />

        <div className="clipcontent">
          {/* Item 1 */}
          <div className="clipcontent-item">
            <div className="clipcontent-img">
              <img src={shampoo1} alt="Neem Extract for Lice Control" />
            </div>
            <div className="clipcont-description">
              <h4>Neem Extract for Lice Control</h4>
              <p>
                Neem extract is a powerful natural remedy for lice prevention and scalp protection, 
                making it an essential ingredient in Chanakya Care Shampoo. Rich in azadirachtin, neem 
                helps eliminate lice by disrupting their reproduction cycle while forming a protective 
                barrier against infestations. Its antibacterial and antifungal properties soothe itchy 
                scalps, cleanse away dead lice and nits, and ensure long-term scalp health.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="clipcontent-item">
            <div className="clipcontent-img">
              <img src={shampoo1} alt="Why Young Athletes Need a Special Shampoo" />
            </div>
            <div className="clipcont-description">
              <h4>Why Young Athletes Need a Special Shampoo</h4>
              <p>
                Young athletes constantly face scalp challenges due to sweat buildup, shared sports gear, 
                and exposure to pollution. Excess sweat can clog pores, leading to dandruff and itching, 
                while wearing helmets and caps increases the risk of lice infestation. Chanakya Care Shampoo 
                is specially designed with Tea Tree Oil, Neem, and Aloe Vera to ensure strong and healthy hair.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="clipcontent-item">
            <div className="clipcontent-img">
              <img src={shampoo1} alt="Why Mom’s Shampoo is Not Suitable for Kids" />
            </div>
            <div className="clipcont-description">
              <h4>Why Mom’s Shampoo is Not Suitable for Kids</h4>
              <p>
                Many parents unknowingly use adult shampoos on their kids, not realizing the risks. 
                Adult shampoos contain stronger chemicals, which can cause dryness and scalp sensitivity. 
                Chanakya Care Shampoo is sulfate-free, paraben-free, and pH-balanced to ensure gentle cleansing 
                and healthy hair growth for kids.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section>
        <Spray  images={[shampoo1,shampoo]}
          title="Chanakya Care Shampoo"
          description="Let Kids be champions with the right Shampoo because strong hair, healthy scalps and confidence start at an early age."
          price={541}
          oldPrice={600}>

        </Spray>
    </section>
  
  </>
  )
}

export default Shampoo
