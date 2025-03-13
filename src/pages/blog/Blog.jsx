import React, { useEffect, useState } from "react";
import "./Blog.css";
import blogsData from "../../data/blogs.json";

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
                  <h1 className="blog-head">{blogItem.title}</h1>
                  <p className="blog-para">{blogItem.content}</p>
                  <button className="blog-btn" onClick={() => setSelected(blogItem)}>Read More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selected && (
    <>    <div className="bg-mask"></div>
    <div className="blog-popup">

      <div className="blog-inner">
        <div className="popup-content">
          <button className="close-btnpop" onClick={() => setSelected(null)}>X</button>
          <h2>{selected.title}</h2>
          <p>{selected.content}</p>

        
          {selected.sections && selected.sections.map((section, i) => (
            <div key={i}>
              <h3>{section.heading}</h3>
              <p>{section.content}</p>

         
              {section.myths && (
                <div className="myth-section">
               
                  <ul>
                    {section.myths.map((mythItem, j) => (
                      <li key={j}>
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
              <h3>Key Benefits</h3>
              <ul>
                {selected.benefits.map((benefit, i) => (
                  <li key={i}>
                    <strong>{benefit.benefit}:</strong> {benefit.description}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {selected.key_ingredients && (
            <div className="ingredients-section">
              <h3>Key Ingredients</h3>
              <ul>
                {selected.key_ingredients.map((ingredient, i) => (
                  <li key={i}>
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
