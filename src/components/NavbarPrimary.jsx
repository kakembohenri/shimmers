import { MenuOutlined } from "@mui/icons-material"
import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../assets/images/logo.jpg"

const NavbarPrimary = ({setIsMobile}) => {
    
    const [isDropDownVisible, setIsDropDownVisible] = useState(false)

    const handleMouseEnter = () => {
        setIsDropDownVisible(true)
    }
    const handleMouseLeave = () => {
        setIsDropDownVisible(false)
    }

    const currentPath = window.location.href.split("/").slice(-1)[0];

   const style = `
    .active_link{
        color: #fff !important;
    }
   `
  return (
    <div className="header__primary" style={{ background: "#5f9ea0" }} id="back">
        <style>
            {style}
        </style>
        <div className="wrap">
            <div className="container">
                <div className="nav__logo"> 
                    <Link to="/"> 
                        <img src={Logo} alt='Company logo' height='40px' />
                    </Link>
                </div>
                <div className="nav__content">
                    <div className="nav__module mob__ham" onClick={() => setIsMobile(true)}>
                        <div className="mob__toggle"> 
                            <MenuOutlined fontSize="large" />
                        </div>
                    </div>
                </div>
                <div className="nav__main text-left ">
                    <nav className="nav__container hidden-xs hidden-sm custom-navbar">
                        <ul className=" nav__list nav-list_alt">
                            <li id="menu-item-707" className="nav_link nav__item menu-item menu-item-type-post_type menu-item-object-page menu-item-548 link__active">
                                <Link to="/home" className={currentPath.includes('home') ? "active_link mouseover__call":"mouseover__call"}>
                                    <span className="inner__item">Home </span>
                                </Link>
                            </li>
                            <li id="menu-item-548" className="nav_link nav__item menu-item menu-item-type-post_type menu-item-object-page menu-item-548 link__active">
                                <Link to="/about" className={currentPath.includes('about') ? "active_link mouseover__call":"mouseover__call"}>
                                    <span className="inner__item">About</span>
                                </Link>
                            </li>
                            <li id="menu-item-9" className="services_link nav_link nav__item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-9 link__active" onMouseLeave={() => handleMouseLeave()}>
                                <Link 
                                    to="#" 
                                    className={currentPath.includes('all') ? "active_link mouseover__call":"mouseover__call"} 
                                    onMouseEnter={() => handleMouseEnter()}
                                    >
                                    <span className="inner__item">Services </span>
                                </Link>
                                <ul className={isDropDownVisible ? "services_list submenu__dropdown child depth_0 active":"submenu__dropdown child depth_0"}>
                                    <li id="menu-item-547" className="services_item dropdown__item  menu-item menu-item-type-post_type menu-item-object-page menu-item-547">
                                        <Link to="/services/all" className="child__hover">All Services</Link>
                                    </li>
                                    <li id="menu-item-554" className="services_item dropdown__item  menu-item menu-item-type-post_type menu-item-object-page menu-item-554">
                                        <Link to="/services/residential-cleaning" className="child__hover">Residential Cleaning</Link>
                                    </li>
                                    <li id="menu-item-552" className="services_item dropdown__item  menu-item menu-item-type-post_type menu-item-object-page menu-item-552">
                                        <Link to="/services/commercial-cleaning" className="child__hover">Commercial Cleaning</Link>
                                    </li>
                                    <li id="menu-item-553" className="services_item dropdown__item  menu-item menu-item-type-post_type menu-item-object-page menu-item-553">
                                        <Link to="/services/construction-cleaning" className="child__hover">Construction Cleaning</Link>
                                    </li>
                                    <li id="menu-item-551" className="services_item dropdown__item  menu-item menu-item-type-post_type menu-item-object-page menu-item-551">
                                        <Link to="/services/windows-cleaning" className="child__hover">Windows Cleaning</Link>
                                    </li>
                                    <li id="menu-item-550" className="services_item dropdown__item  menu-item menu-item-type-post_type menu-item-object-page menu-item-550">
                                        <Link to="/services/carpet-cleaning" className="child__hover">Carpet Cleaning</Link>
                                    </li>
                                    <li id="menu-item-549" className="services_item dropdown__item  menu-item menu-item-type-post_type menu-item-object-page menu-item-549">
                                        <Link to="/services/furniture-cleaning" className="child__hover">Furniture Cleaning</Link>
                                </li>
                            </ul>
                            </li>
                            <li id="menu-item-546" className="nav_link nav__item menu-item menu-item-type-post_type menu-item-object-page menu-item-546 link__active">
                                <Link to="/contacts" className={currentPath.includes('contacts') ? "active_link mouseover__call":"mouseover__call"}><span className="inner__item">Contact</span></Link>
                            </li>
                            <li id="menu-item-546" className="nav_link nav__item menu-item menu-item-type-post_type menu-item-object-page menu-item-546 link__active">
                                <Link to="/careers" className={currentPath.includes('careers') ? "active_link mouseover__call":"mouseover__call"}><span className="inner__item">Careers</span></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}
export default NavbarPrimary