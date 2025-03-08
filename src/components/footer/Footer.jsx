
//images
import logo from "../../assets/images/logos/logo.png"
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
                            <div className="col-md-4 col-12">
                                <a href=""><img src={logo} alt="logo" width="170px" /></a>
                            </div>
                            <div className="col-md-4  col-6">
                                <h3>Quick Links</h3>
                                <ul className="footer-ul-wrapper">
                                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                                    <li className="nav-item"><Link to="/products/channakya-shampoo" className="nav-link">Chanakya Care Shampoo</Link></li>
                                    <li className="nav-item"><Link to="/products/facewash" className="nav-link">Charcoal face wash</Link></li>
                                    <li className="nav-item"><Link to="/products/men-intimate-mist" className="nav-link">Men Intimate Mist Spray </Link></li>
                                    <li className="nav-item"><Link to="/products/men-intimate-foam" className="nav-link">Men’s Intimate Foaming Wash </Link></li>
                                </ul>
                            </div>
                            <div className="col-md-4  col-6">
                                <h3>About</h3>
                                <ul className="footer-ul-wrapper">
                                    <li className="nav-item"><Link to='/policy' className="nav-link">Privacy Policy</Link></li>
                                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                                    <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                                </ul>
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
