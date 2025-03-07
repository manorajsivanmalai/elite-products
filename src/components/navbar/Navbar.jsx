//
import { Link,NavLink } from "react-router-dom";

//images
import logo from "../../assets/images/logos/logo.png"
//icons
import { FaRegUser ,FaRegHeart } from "react-icons/fa";
import { CgShoppingBag } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2"
import { CgClose } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

//css
import "./Navbar.css"
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
    const [navtoggle,setNavtoggle]=useState(false)
    const addedcart = useSelector((state) => state.carts.carts); 
    return (
        <>
            <header>
                <nav className="nav-wrapper">
                    <div className="container">
                        <div className="row align-items-center nav-r-wrapper">
                            <div className="col-md-3 col-5">
                                <Link to="/" ><img src={logo} alt="logo" width="160px"/></Link>
                            </div>
                            <div className="col-lg-5 col-md-6 d-md-block d-none">
                                <ul className="nav-ul-1-wrapper">
                                    <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                                    <li className="nav-item dropdown-li"><Link to="" className="nav-link">Products <MdOutlineKeyboardArrowDown/></Link>
                                            <ul  className="nav-mob-p-ul ul-dropdown">
                                            <li className="nav-item"><Link to="/products/channakya-shampoo" className="nav-link">Chanakya Care Shampoo</Link></li>
                                                <li className="nav-item"><Link to="/products/facewash" className="nav-link">Charcoal face wash</Link></li>
                                                <li className="nav-item"><Link to="/products/men-intimate-mist" className="nav-link">Men Intimate Mist Spray </Link></li>
                                                <li className="nav-item"><Link to="/products/men-intimate-foam" className="nav-link">Men’s Intimate Foaming Wash </Link></li>
                                            </ul>
                                    </li> 
                                    <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
                                    <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-3 d-md-block d-none">
                                <ul className="nav-ul-1-wrapper justify-content-end">
                                    <li className="nav-item"><Link to="login" className="nav-link"><FaRegUser/></Link></li>
                                    {/* <li className="nav-item"><a href="" className="nav-link"><FaRegHeart/></a></li> */}
                                    <li className="nav-item"><Link to="/cart" className="nav-link"><CgShoppingBag/>{addedcart && addedcart?.length>0 && <span className="dot"></span>}</Link></li>
                                    <li className="nav-item"><a href="" className="nav-link"><IoSearchSharp/></a></li>
                                </ul>
                            </div>
                            <div className="col-7 d-md-none d-flex justify-content-end">
                                <button className="nav-toggle-btn" onClick={()=>setNavtoggle(true)}>
                                    <HiOutlineBars3CenterLeft/>
                                </button>
                                    <div className={`nav-mob-toggle d-md-none d-block ${navtoggle ? "toggleanimate":""}`}>
                                        <div className="d-flex align-items-center justify-content-between nav-log-wrap">
                                            <a href=""><img src={logo} alt="logo" width="100px"/></a>
                                            <button className="nav-mob-close-btn" style={!navtoggle?{"transform":"rotate(166deg)","translate":"1s"}:{}} onClick={()=>setNavtoggle(false)}><CgClose/></button>
                                        </div>
                                        <ul className="nav-mob-p-ul">
                                            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                                            <li className="nav-item dropdown-li"><Link to="" className="nav-link">Products <MdOutlineKeyboardArrowDown/></Link>
                                                <ul  className="nav-mob-p-ul ul-dropdown">
                                                <li className="nav-item"><Link to="/products/channakya-shampoo" className="nav-link">Chanakya Care Shampoo</Link></li>
                                                <li className="nav-item"><Link to="/products/facewash" className="nav-link">Charcoal face wash</Link></li>
                                                <li className="nav-item"><Link to="/products/men-intimate-mist" className="nav-link">Men Intimate Mist Spray </Link></li>
                                                <li className="nav-item"><Link to="/products/men-intimate-foam" className="nav-link">Men’s Intimate Foaming Wash </Link></li>
                                                </ul>
                                            </li> 

                                            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                                            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                                            <li className="nav-item"><Link to="/cart" className="nav-link">Cart</Link></li>
                                        </ul>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </nav>
                
                <div className="nav-mob-2-wrapper d-md-none d-block">
                    <ul className="mob-nav-2-ul">
                        <li className="nav-item"><NavLink to="/"  className="nav-link"><AiOutlineHome/> Home</NavLink></li>
                        <li className="nav-item"><NavLink to="/products"  className="nav-link"><IoSearchSharp/> Shop</NavLink></li>
                        <li className="nav-item"><a to="/login"  className="nav-link"><FaRegUser/>Account</a></li>
                        <li className="nav-item"><Link to="/cart" className="nav-link"><CgShoppingBag/>{addedcart && addedcart?.length>0 &&  <span className="dot"></span>}Cart</Link></li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Navbar