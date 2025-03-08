import React from 'react';
import "./policy.css";

const Policy = () => {
  return (
    <>
      <section className='policy-sec-wrapper'>
        <div className="container">
          <h3 className='title-policy'>Shipping, Returns, Exchanges & Special Orders</h3>
          
          <h4 className='policy-sub-title'>Shipping</h4>
          <ul>
            <li><p className='policy-content'>All orders placed on our website are subject to acceptance and availability. We reserve the right to refuse or cancel any order at our discretion.</p></li>
            <li><p className='policy-content'>Shipping times may vary based on location and product availability. We are not responsible for delays caused by external factors like customs, weather conditions, or courier issues.</p></li>
            <li><p className='policy-content'>Products can be returned or exchanged within <strong>7 days</strong> of delivery, provided they are in original condition with packaging intact.</p></li>
            <li><p className='policy-content'>All content on this website, including images, text, and trademarks, is owned by <strong>K' Elite Solutions</strong> and may not be copied, reproduced, or used without permission.</p></li>
          </ul>

          <h4 className='policy-sub-title'>Terms & Conditions</h4>
          <ul>
            <li><p className='policy-content'><strong>Order Acceptance & Payment:</strong> Orders are subject to approval, and payment must be completed before processing.</p></li>
            <li><p className='policy-content'><strong>Shipping & Delivery:</strong> We aim for timely delivery but are not liable for external delays.</p></li>
            <li><p className='policy-content'><strong>Returns & Exchanges:</strong> Return requests must be made within 7 days. Certain items may not be eligible.</p></li>
            <li><p className='policy-content'><strong>Intellectual Property:</strong> All website content is owned by us and cannot be reused without permission.</p></li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Policy;
