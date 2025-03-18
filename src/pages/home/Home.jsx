import { Link } from 'react-router-dom';
import bannerimg1 from "../../assets/images/homepage/banners/home-banner-desktop-1.webp";
import bannerimg2 from "../../assets/images/homepage/banners/home-banner-desktop-2.webp";
import bannerimg3 from "../../assets/images/homepage/banners/home-banner-desktop-3.webp";
import bannerimg4 from "../../assets/images/homepage/banners/home-banner-desktop-4.webp";
import bannermobimg1 from "../../assets/images/homepage/banners/home-banner-mob-1.png";
import bannermobimg2 from "../../assets/images/homepage/banners/home-banner-mob-2.png";
import bannermobimg3 from "../../assets/images/homepage/banners/home-banner-mob-3.png";
import bannermobimg4 from "../../assets/images/homepage/banners/home-banner-mob-4.png";

import p1 from "../../assets/images/homepage/p1.png";
import p2 from "../../assets/images/homepage/p2.png";
import p3 from "../../assets/images/homepage/p3.png";
import p4 from "../../assets/images/homepage/p4.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// CSS
import "./Home.css";

const Home = () => {

    const bannerImgs = [
        {
            imgurl: bannerimg3,
            mobbanner: bannermobimg3,
            alt: "Charcoal Fase Wash Banner",
            link: "/products/facewash"
        },
        {
            imgurl: bannerimg1,
            mobbanner: bannermobimg1,
            alt: "Chanakya Care Shampoo Banner",
            link: "/products/channakya-shampoo"
        },
        {
            imgurl: bannerimg2,
            mobbanner: bannermobimg2,
            alt: "Men’s Intimate Foaming Wash ",
            link: "/products/men-intimate-foam"
        },
        {
            imgurl: bannerimg4,
            mobbanner: bannermobimg4,
            alt: "Men Intimate Mist Spray ",
            link: "/products/men-intimate-mist"
        },
    ];

    const productsec = [
        {
            imgurl: p2,
            alt: "Product 1",
            colsize: "col-lg-4",
            name: "Men’s Intimate Foaming Wash",
            link: "/products/men-intimate-foam"
        },
        {
            imgurl: p1,
            alt: "Product 2",
            colsize: "col-lg-8",
            name: "Chanakya Care Shampoo",
            link: "/products/channakya-shampoo"
        },
        {
            imgurl: p3,
            alt: "Product 6",
            colsize: "col-lg-6",
            name: "Men Intimate Mist Spray – Bahubali",
            link: "/products/men-intimate-mist"
        },
        {
            imgurl: p4,
            alt: "Product 7",
            colsize: "col-lg-6",
            name: "Charcoal Face Wash",
            link: "/products/facewash"
        },
    ];

    return (
        <>
            {/* Section 1 Start */}
            <section>
                <div className="container-fluid">
                    <Swiper
                        className="mySwiper"
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false, 
                        }}
                        modules={[Autoplay]}
                    >
                        {bannerImgs.map((item, index) =>
                            <SwiperSlide key={index}>
                                <Link to={item.link} target='_blank'>
                                    <picture>
                                        <source media="(max-width: 767px)" srcSet={item.mobbanner} />
                                        <source media="(min-width: 768px)" srcSet={item.imgurl} />
                                        <img src={item.imgurl} className="w-100" alt={item.alt} loading="lazy" height={window.innerWidth >=768 ?"897px":"400px"} />
                                    </picture>
                                </Link>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </section>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <section className="home-sec-2-wrapper">
                <div className="container">
                    <div>
                        <h3 className="sec-2-prod-title">Shop <br />Our Products</h3>
                    </div>
                    <div className="row row-gap-4">
                        {productsec.map((item, index) =>
                            <div className={`${item.colsize} col-md-6`} key={index}>
                                <Link to={item.link}>
                                    <div className="home-prod-inner-wrapper">
                                        <div className="homeproda">
                                            <img src={item.imgurl} alt={item.alt} className="w-100" loading="lazy" />
                                            <div className="home-prod-hover-wrap">
                                                <h3 style={{ color: "rgb(207 187 187)" }}>{item.name}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            {/* Section 2 End */}

            {/* Section 3 Start */}
            <section className="home-abt-sec-3">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-11 p-0">
                            <div className="sec-3-abt-hm-inner">
                                <h2 className="abt-t-hm">Our Story</h2>
                                <p className="abt-ct-hm">At K'Elite Global Solutions, we believe that your personal care routine should be as unique and important as you are. We create high-quality, innovative products that blend the power of nature with advanced scientific formulations. Whether you're caring for your children’s delicate hair, maintaining freshness and hygiene, or improving your skin's appearance, our products are designed to meet your needs with care and precision.</p>
                                <p className="abt-ct-hm">Our goal is to offer effective, eco-friendly, and safe products that empower you to feel your best every day.</p>
                                 <Link to='/about' className="abt-hom-rm-btn">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 3 End */}

            {/* Section 4 Start */}
            <section className="home-sec-4-wrapper">
                <div className="container">
                    <h3 className="sec-2-prod-title mb-2">Happy Customers Speak!</h3>
                    <h5 className='hm-sec-sub-t'>Don't just take our word for it – hear from our satisfied customers!"</h5>
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true
                        }}
                        navigation={true}
                        loop={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        id="testimonialSwiper"
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="home-review-wrapper">
                                <h3 className="home-test-title">Sarah P </h3>
                                <p className="home-test-cap">Mother of a 7-year-old</p>
                                <div className="home-test-start">★★★★★</div>
                                <p className="home-test-content">Chanakya Care Shampoo has made bath time so much easier for my son! It's gentle and doesn't irritate his eyes. His hair feels soft and clean every time!</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home-review-wrapper">
                                <h3 className="home-test-title">Rajesh K</h3>
                                <p className="home-test-cap">Fitness Enthusiast</p>
                                <div className="home-test-start">★★★★★</div>
                                <p className="home-test-content">I’ve been using the Bahubali Men Intimate Mist Spray, and I’m impressed! It keeps me fresh and comfortable all day long. Definitely a game-changer!</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home-review-wrapper">
                                <h3 className="home-test-title">Arun T</h3>
                                <p className="home-test-cap">Working Professional</p>
                                <div className="home-test-start">★★★★★</div>
                                <p className="home-test-content">The Charcoal Face Wash is amazing! My skin feels so much cleaner and refreshed. It really works to detoxify without drying out my skin.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            {/* Section 4 End */}
        </>
    );
}

export default Home;
