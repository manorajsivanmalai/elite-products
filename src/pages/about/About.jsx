import "./About.css";
import "animate.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title animate__animated animate__fadeInUp">
          About Us <br />
          Welcome to K'Elite Global Solutions
        </h1>

        <div className="about-text animate__animated animate__fadeInLeft">
          <p>
            At K'Elite Global Solutions, we believe in redefining personal care
            and hygiene through innovation and excellence.
            <b>Founded by Swathi Reddy,</b> our company is built on a strong
            foundation of expertise and insight, gained from over 15 years of
            experience in MNC healthcare sales. With a deep understanding of
            industry gaps and consumer needs, we strive to bridge the gap
            between traditional practices and modern hygiene solutions.
          </p>
          <p>
            Our Mission To innovate and revolutionize the personal care industry
            by providing high-quality, effective, and safe products that cater
            to the unique needs of individuals. We are committed to delivering
            solutions that enhance hygiene, confidence, and overall well-being.
          </p>
          <p>
            Our Vision To be a global leader in personal care innovation,
            setting new benchmarks in quality and trust, while educating and
            empowering consumers to prioritize intimate and personal hygiene.
          </p>
          <p>
            Our Tagline: <b>"An Innovate Bridge the Gap"</b> This represents our
            core philosophy of identifying industry shortcomings and developing
            innovative solutions to bridge those gaps effectively.
          </p>

          <h2 className="section-heading">Why Choose Us?</h2>

          <ul className="about-list">
            <li>
              Expert-Led Innovation: With Swathi Reddy’s extensive healthcare
              industry experience, we ensure that every product is backed by
              research and formulated for real-world needs.
            </li>
            <li>
              High-Quality Ingredients: Our products are crafted using premium,
              skin friendly, and effective ingredients, free from harmful
              chemicals.
            </li>
            <li>
              {" "}
              Customer-Centric Approach: We prioritize the well-being of our
              customers by focusing on safety, efficacy, and satisfaction.
            </li>
            <li>
              {" "}
              Commitment to Awareness: Beyond selling products, we educate
              consumers about hygiene, self-care, and wellness, fostering a
              healthier society.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
