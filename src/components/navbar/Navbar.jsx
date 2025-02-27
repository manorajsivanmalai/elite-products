import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

// Images
import logo from "../../assets/images/logos/logo.png";

// Icons
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { CgShoppingBag } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";

// CSS
import "./Navbar.css";

const Navbar = () => {
    const [navToggle, setNavToggle] = useState(false);

    return (
        <>
            <header>
                <nav className="nav-wrapper">
                    <div className="container">
                        <div className="row align-items-center nav-r-wrapper">
                            <div className="col-md-3 col-5">
                                <Link to="/">
                                    <img src={logo} alt="logo" width="160px" />
                                </Link>
                            </div>
                            <div className="col-md-5 d-md-block d-none">
                                <ul className="nav-ul-1-wrapper">
                                    <li className="nav-item">
                                        <NavLink to="/" className="nav-link">Home</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <NavLink to="" className="nav-link">Products</NavLink>
                                        <ul className="dropdown-menu">
                                        <li><NavLink to="/products/channakya-shampoo">Chanakya Care Shampoo</NavLink></li>
                                                <li><NavLink to="/products/men-intimate-mist">Men Intimate Mist Spray </NavLink></li>
                                                <li><NavLink to="/products/men-intimate-foam">Men’s Intimate Foaming Wash  </NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/about" className="nav-link">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/contact" className="nav-link">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 d-md-block d-none">
                                <ul className="nav-ul-1-wrapper justify-content-end">
                                    <li className="nav-item"><a href="#" className="nav-link"><FaRegUser /></a></li>
                                    <li className="nav-item"><a href="#" className="nav-link"><FaRegHeart /></a></li>
                                    <li className="nav-item"><a href="#" className="nav-link"><CgShoppingBag /></a></li>
                                    <li className="nav-item"><a href="#" className="nav-link"><IoSearchSharp /></a></li>
                                </ul>
                            </div>
                            <div className="col-7 d-md-none d-flex justify-content-end">
                                <button className="nav-toggle-btn" onClick={() => setNavToggle(true)}>
                                    <HiOutlineBars3CenterLeft />
                                </button>
                                <div className={`nav-mob-toggle d-md-none d-block ${navToggle ? "toggleanimate" : ""}`}>
                                    <div className="d-flex align-items-center justify-content-between nav-log-wrap">
                                        <a href="#"><img src={logo} alt="logo" width="100px" /></a>
                                        <button className="nav-mob-close-btn" onClick={() => setNavToggle(false)}>
                                            <CgClose />
                                        </button>
                                    </div>
                                    <ul className="nav-mob-p-ul">
                                        <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                                        <li className="nav-item dropdown">
                                            <NavLink to="" className="nav-link">Products</NavLink>
                                            <ul className="dropdown-menu">
                                            <li><NavLink to="/products/channakya-shampoo">Chanakya Care Shampoo</NavLink></li>
                                                <li><NavLink to="/products/men-intimate-mist">Men Intimate Mist Spray </NavLink></li>
                                                <li><NavLink to="/products/men-intimate-foam">Men’s Intimate Foaming Wash  </NavLink></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
                                        <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                                        <li className="nav-item"><a href="#" className="nav-link">Cart</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
