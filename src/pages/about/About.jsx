import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__row">
          <div className="about__content">
            <h1 className="about__title">About Us</h1>
            <p className="about__text">
              At <b>Elite Global</b>, we believe personal care should be safe, effective, and tailored to your needs. Our journey began with a simple mission—
              <b> to bridge the gaps in everyday hygiene and hair care with innovative, science-backed, and nature-inspired products.</b>
            </p>
            <p className="about__text">
              We focus on <b>gentle yet powerful formulations</b> designed for kids, athletes, and modern men who prioritize health, hygiene, and confidence. Whether it's protecting young scalps from dandruff and lice or ensuring men stay fresh and comfortable throughout the day, our products are crafted with <b>premium ingredients and zero harsh chemicals</b>.
            </p>
            <p className="about__text">
              <b>Nature Meets Science</b> – Our products are infused with the best of both worlds, blending powerful natural extracts like Tea Tree, Aloe Vera, Neem, and Lactic Acid with advanced dermatological solutions.
            </p>
            <p className="about__text">
              <b>Dermatologically Tested</b> – Safety is our top priority. Our range is <b>pH-balanced, free from sulfates, parabens, and harmful additives</b>, making it ideal for sensitive skin and scalps.
            </p>
            <p className="about__text">
              <b>Confidence Starts with Care</b> – Whether you're a young champion, a busy professional, or someone who values top-tier hygiene, we provide solutions that empower your daily routine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
