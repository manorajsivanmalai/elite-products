
//images
import logo from "../../assets/images/logos/logo.png"
//icons
import { FaWhatsapp,FaFacebookF,FaYoutube ,FaPhoneAlt} from "react-icons/fa";
import {FaXTwitter ,FaInstagram  } from "react-icons/fa6";
//css
import "./Footer.css"
import { Link } from "react-router-dom";


const Footer = ({ cartItems }) => {
    return (
        <>
            <footer className="footer-wrapper">
                <div className="footer-r-1">
                    <div className="container">
                        <div className="row row-gap-5">
                            <div className="col-md-3 col-12">
                                <a href=""><img src={logo} alt="logo" width="170px" /></a>
                            </div>
                            <div className="col-md-3  col-6">
                                <h3 className="ftr-title">Quick Links</h3>
                                <ul className="footer-ul-wrapper">
                                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                                    <li className="nav-item"><Link to="/products/channakya-shampoo" className="nav-link">Chanakya Care Shampoo</Link></li>
                                    <li className="nav-item"><Link to="/products/facewash" className="nav-link">Charcoal face wash</Link></li>
                                    <li className="nav-item"><Link to="/products/men-intimate-mist" className="nav-link">Men Intimate Mist Spray </Link></li>
                                    <li className="nav-item"><Link to="/products/men-intimate-foam" className="nav-link">Men’s Intimate Foaming Wash </Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3  col-6">
                                <h3 className="ftr-title">About</h3>
                                <ul className="footer-ul-wrapper">
                                    <li className="nav-item"><Link to='/policy' className="nav-link">Privacy Policy</Link></li>
                                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                                    <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3  col-12">
                                <h3 className="ftr-title">Get In Touch</h3>
                                <ul className="footer-ul-social">
                                    <li className="nav-item"><Link to='' className="nav-link"><FaWhatsapp/></Link></li>
                                    <li className="nav-item"><Link to="" className="nav-link"><FaFacebookF/></Link></li>
                                    <li className="nav-item"><Link to="" className="nav-link"><FaYoutube/></Link></li>
                                    <li className="nav-item"><Link to="" className="nav-link"><FaXTwitter /></Link></li>
                                    <li className="nav-item"><Link to="" className="nav-link"><FaInstagram  /></Link></li>
                                </ul>
                                <div >
                                    <Link to="" className="footer-call"><FaPhoneAlt /> +91-000-000-0000</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-r-2">
                    <div className="container">
                        <p>© 2025 K Elite Global Solutions. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
