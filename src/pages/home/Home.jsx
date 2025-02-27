


//images
//banner images
import bannerimg1 from "../../assets/images/homepage/banners/home-banner-desktop-1.webp"
import bannerimg2 from "../../assets/images/homepage/banners/home-banner-desktop-2.webp"
import bannerimg3 from "../../assets/images/homepage/banners/home-banner-desktop-3.webp"
import bannerimg4 from "../../assets/images/homepage/banners/home-banner-desktop-4.webp"
import bannermobimg1 from "../../assets/images/homepage/banners/home-banner-mob-1.png"
import bannermobimg2 from "../../assets/images/homepage/banners/home-banner-mob-2.png"
import bannermobimg3 from "../../assets/images/homepage/banners/home-banner-mob-3.png"
import bannermobimg4 from "../../assets/images/homepage/banners/home-banner-mob-4.png"
//import Product images
import product1 from "../../assets/images/homepage/products/inner_project01.jpg"
import product2 from "../../assets/images/homepage/products/inner_project02.jpg"
import product3 from "../../assets/images/homepage/products/inner_project03.jpg"
import product4 from "../../assets/images/homepage/products/inner_project04.jpg"


//icons
import { GiBeamsAura } from "react-icons/gi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
//css
import "./Home.css"

const Home = () => {

    const bannerImgs = [
        {
            imgurl: bannerimg1,
            mobbanner: bannermobimg1,
            alt: "Banner image 1"
        },
        {
            imgurl: bannerimg2,
            mobbanner: bannermobimg2,
            alt: "Banner image 2"
        },
        {
            imgurl: bannerimg3,
            mobbanner: bannermobimg3,
            alt: "Banner image 3"
        },
        {
            imgurl: bannerimg4,
            mobbanner: bannermobimg4,
            alt: "Banner image 4"
        },
    ]
    const productsec = [
        {
            imgurl: bannermobimg1,
            alt: "Product 1",
            colsize: "col-lg-4",
        },
        {
            imgurl: bannermobimg1,
            alt: "Product 2",
            colsize: "col-lg-8",
        },
        {
            imgurl: bannermobimg1,
            alt: "Product 3",
            colsize: "col-lg-4",
        },
        {
            imgurl: bannermobimg1,
            alt: "Product 4",
            colsize: "col-lg-4",
        },
        {
            imgurl: bannermobimg1,
            alt: "Product 5",
            colsize: "col-lg-4",
        },
        {
            imgurl: bannermobimg1,
            alt: "Product 6",
            colsize: "col-lg-6",
        },
        {
            imgurl: bannermobimg1,
            alt: "Product 7",
            colsize: "col-lg-6",
        },
    ]
    return (
        <>
            {/* Section 1 Start */}
            <section>
                <div className="container-fluid">
                    <Swiper className="mySwiper">
                        {bannerImgs.map((item, index) =>
                            <SwiperSlide key={index}>
                                {/* <img src={item.imgurl} alt={item.alt} className="w-100" /> */}
                                <picture>
                                    <source media="(max-width: 767px)" srcSet={item.mobbanner} />
                                    <source media="(min-width: 768px)" srcSet={item.imgurl} />
                                    <img src={item.imgurl} className="w-100" alt={item.alt} />
                                </picture>
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
                        <h3 className="sec-2-prod-title"> Shop <br />Our Products</h3>
                    </div>
                    <div className="row row-gap-4">
                        {productsec.map((item, index) =>
                            <div className={`${item.colsize} col-md-6`} key={index}>
                                <div className="home-prod-inner-wrapper">
                                    <a href="" className="homeproda">
                                        <img src={item.imgurl} alt={item.alt} className="w-100" />
                                        <div className="home-prod-hover-wrap">
                                            <h3>Motion Design</h3>
                                            <p>Lorem ipsum dolor</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            {/* Section 2 End */}

            {/* Section 3 Start */}
            <section className="home-abt-sec-3">
                <div className="container-fluid">
                    <div className="row justify-content-end">
                        <div className="col-lg-6 col-md-11 p-0">
                            <div className="sec-3-abt-hm-inner">
                                <h2 className="abt-t-hm">Always focus on what benefits our customers.</h2>
                                <p className="abt-ct-hm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquid, error minus sapiente dolore unde dolorem officia assumenda excepturi? Veniam aperiam, esse quibusdam itaque non quisquam labore id unde ipsa!</p>
                                <div className="row mt-4 row-gap-4">
                                    {[...Array(4)].map((_, i) => (
                                        <div className="col-md-6 " key={i}>
                                            <div className="inner-abt-hm-sec-c">
                                                <GiBeamsAura />
                                                <div>
                                                    <h6 className="abt-hm-sec-title">Expertise and Experience</h6>
                                                    <p className="abt-hm-sec-content">Interior designers possess the skills to create well-designed spaces.</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <a className="abt-hom-rm-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section 3 End */}
            {/* Section 4 Start */}
            <section className="home-sec-4-wrapper">
                <div className="container">
                    <h3 className="sec-2-prod-title">What Our Customers <br /> Are Saying</h3>
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable:true
                        }}
                        navigation={true}
                        slidesPerView={2}
                        loop={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        id="testimonialSwiper"
                    >
                        <SwiperSlide>
                            <div className="home-review-wrapper">   
                                <h3 className="home-test-title">John P </h3>
                                <p className="home-test-cap">Mother of 7-year-old</p>
                                <div className="home-test-start">★★★★★</div>
                                <p className="home-test-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea, similique blanditiis tempore voluptatum tenetur impedit. Ex quam reprehenderit vitae eos, blanditiis illo, sit impedit, voluptatem eligendi accusantium veniam maiores.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home-review-wrapper">   
                                <h3 className="home-test-title">John P </h3>
                                <p className="home-test-cap">Mother of 7-year-old</p>
                                <div className="home-test-start">★★★★★</div>
                                <p className="home-test-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea, similique blanditiis tempore voluptatum tenetur impedit. Ex quam reprehenderit vitae eos, blanditiis illo, sit impedit, voluptatem eligendi accusantium veniam maiores.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home-review-wrapper">   
                                <h3 className="home-test-title">John P </h3>
                                <p className="home-test-cap">Mother of 7-year-old</p>
                                <div className="home-test-start">★★★★★</div>
                                <p className="home-test-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea, similique blanditiis tempore voluptatum tenetur impedit. Ex quam reprehenderit vitae eos, blanditiis illo, sit impedit, voluptatem eligendi accusantium veniam maiores.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home-review-wrapper">   
                                <h3 className="home-test-title">John P </h3>
                                <p className="home-test-cap">Mother of 7-year-old</p>
                                <div className="home-test-start">★★★★★</div>
                                <p className="home-test-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea, similique blanditiis tempore voluptatum tenetur impedit. Ex quam reprehenderit vitae eos, blanditiis illo, sit impedit, voluptatem eligendi accusantium veniam maiores.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            {/* Section 4 End */}

        </>
    )
}

export default Home
