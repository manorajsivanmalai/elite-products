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
