import React, { useEffect, useState } from "react";
import "./Blog.css";
import blogsData from "../../data/blogs.json";

import { GoDotFill } from "react-icons/go";

function Blog() {
  const [blog, setBlog] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setBlog(blogsData.blogs);
  }, []);
  return (
    <>
      <div className="blog-total-container">
        <div className="container">
          <h1 className="text-center blog-title">Blog</h1>
          <div className="row row-gap-4">
            {blog.map((blogItem, index) => (
              <div className="col-lg-4" key={index}>
                <div className="blog-cards">
                  <div className="blog-content-head">
                    <h1 className="blog-head">{blogItem.title}</h1>
                  </div>
                  <p className="blog-para">{blogItem.content}</p>
                  <button className="blog-btn" onClick={() => setSelected(blogItem)}>Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      
      <div className="bg-mask d-none"></div>
        <div className="blog-popup d-none">
          <div className="blog-inner">
            <button className="close-btnpop">X</button>
              <div className="blog-popup-content">
                <h3 className="popup-title">Why Intimate Hygiene Matters for Men</h3>
                <p className="popup-p-blog">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum doloribus a non voluptates aliquid ex ullam excepturi impedit aperiam magnam quis est laborum, neque saepe id architecto! Laboriosam, magni id.</p>

                <h3  className="popup-title">Why Intimate Hygiene Matters for Men</h3>
                <p className="popup-p-blog">Cleaning your intimate area is essential for overall health. The genital region’s skin is more sensitive than other parts of the body, so it requires gentle care. Poor hygiene here can lead to foul smells, itching, rashes, or even infections. In contrast, good intimate hygiene keeps you feeling fresh and comfortable throughout the day. It’s also important for sexual wellness – staying clean can boost confidence and reduce the risk of infections for you and your partner.</p>
                <h3  className="popup-title">Common Misconceptions About Men’s Intimate Hygiene</h3>
                <p className="popup-p-blog">Several myths often prevent men from taking intimate hygiene seriously. Here are a few debunked:</p>
                <ul className="popup-blog-ul">
                  <li><GoDotFill/> <span><strong>“It’s only for women.” </strong>Some men think intimate hygiene doesn’t apply to them. Fact: Men’s intimate areas sweat and harbor bacteria too. Ignoring this can lead to odor and infection. Everyone benefits from keeping private parts clean.</span></li>
                </ul>
              </div>
          </div>
        </div>

      

      {selected && (
    <>    <div className="bg-mask" onClick={() => setSelected(null)}></div>
    <div className="blog-popup">

      <div className="blog-inner">
      <button className="close-btnpop" onClick={() => setSelected(null)}>X</button>
        <div className="blog-popup-content">
          <h2 className="popup-title">{selected.title}</h2>
          <p className="popup-p-blog"> {selected.content}</p>

        
          {selected.sections && selected.sections.map((section, i) => (
            <div key={i}>
              <h3 className="popup-title">{section.heading}</h3>
              <p  className="popup-p-blog">{section.content}</p>

         
              {section.myths && (
                <div className="myth-section">
               
                  <ul>
                    {section.myths.map((mythItem, j) => (
                      <li key={j}  className="popup-p-blog">
                        <strong></strong> {mythItem.myth} <br />
                        <strong></strong> {mythItem.fact}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

      
          {selected.benefits && (
            <div className="benefits-section">
              <h3 className="popup-title">Key Benefits</h3>
              <ul>
                {selected.benefits.map((benefit, i) => (
                  <li key={i} className="popup-p-blog">
                    <strong>{benefit.benefit}:</strong> {benefit.description}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {selected.key_ingredients && (
            <div className="ingredients-section">
              <h3 className="popup-title">Key Ingredients</h3>
              <ul>
                {selected.key_ingredients.map((ingredient, i) => (
                  <li key={i} className="popup-p-blog">
                    <strong>{ingredient.ingredient}:</strong> {ingredient.benefit}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div></>   
      )}
    </>
  );
}

export default Blog;
