import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../contact/Contact.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    comment: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    mobile: '',
    email: '',
    comment: '',
  });

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Enter a valid 10-digit mobile number';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
      isValid = false;
    }

    if (!formData.comment) {
      newErrors.comment = 'Comment is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data:', formData);
     
    }
  };

  return (
    <div className="contact-container">
      
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong><Link to="mailto:Care@keliteglobalsolutions.com" className='contact-link' target='_blank'>Care@keliteglobalsolutions.com </Link></p>
        <p><strong>Phone Number:</strong><Link to="tel:9642850007" className='contact-link'  target='_blank'>+91-9642850007</Link></p>
        <p><strong>WhatsApp:</strong> <Link to="https://wa.me/9642850007" className='contact-link'  target='_blank'>+91-9642850007</Link> </p>
       
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Get in Touch</h3>
        <p className="intro-text">We'd love to hear from you about our entire service. Your comments and suggestions will be highly appreciated. Please complete the form below.</p>

        <div className="form-fields">
          <div className="field-group">
            <label>Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Enter your name" />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="field-group">
            <label>Mobile Number</label>
            <input 
              type="tel" 
              name="mobile" 
              value={formData.mobile} 
              onChange={handleChange} 
              placeholder="Enter your mobile number" />
            {errors.mobile && <p className="error">{errors.mobile}</p>}
          </div>

          <div className="field-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Enter your email" />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className='field-group'>

          </div>

          <div className="field-group-comment">
            <label>Comment</label>
            <textarea 
              name="comment" 
              value={formData.comment} 
              onChange={handleChange} 
              placeholder="Write your message"></textarea>
            {errors.comment && <p className="error">{errors.comment}</p>}
          </div>
        </div>


       <div className='form-button'>
       <button type="submit" className='contact-btn'>Submit</button>
       </div>
      </form>
    </div>
  );
};

export default Contact;
