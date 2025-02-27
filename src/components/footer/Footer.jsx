
//images
import logo from "../../assets/images/logos/logo.png"
//css
import "./Footer.css"

const Footer = () => {
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
                                    <li className="nav-item"><a href="" className="nav-link">Home</a></li>
                                    <li className="nav-item"><a href="" className="nav-link">About</a></li>
                                    <li className="nav-item"><a href="" className="nav-link">Contact</a></li>
                                    <li className="nav-item"><a href="" className="nav-link">Cart</a></li>
                                </ul>
                            </div>
                            <div className="col-md-4  col-6">
                                <h3>Quick Links</h3>
                                <ul className="footer-ul-wrapper">
                                    <li className="nav-item"><a href="" className="nav-link">Privacy Policy</a></li>
                                    <li className="nav-item"><a href="" className="nav-link">Terms of Service</a></li>
                                    <li className="nav-item"><a href="" className="nav-link">Contact</a></li>
                                    <li className="nav-item"><a href="" className="nav-link">Cart</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-r-2">
                    <div className="container">
                        <p>Coppyright 2019 by KM - All right reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
