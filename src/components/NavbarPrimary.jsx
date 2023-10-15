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
  return (
    <div className="header__primary " id="back">
        <div className="wrap">
            <div className="container">
                <div className="nav__logo"> 
                    <Link to="/"> 
                        {/* <noscript>
                            <img src="http://www.slashcreative.co/themes/moppers-version-2/wp-content/themes/moppers/assets/images/icons/slcr-logo-simple.svg" alt="logo" className="main__logo " />
                        </noscript>
                        <img src="http://www.slashcreative.co/themes/moppers-version-2/wp-content/themes/moppers/assets/images/icons/slcr-logo-simple.svg" data-src="http://www.slashcreative.co/themes/moppers-version-2/wp-content/themes/moppers/assets/images/icons/slcr-logo-simple.svg" alt="logo" className="main__logo lazyloaded" /> 
                        <noscript>
                            <img src="http://www.slashcreative.co/themes/moppers-version-2/wp-content/themes/moppers/assets/images/icons/slcr-logo-simple.svg" alt="logo" className="sticky__logo " />
                        </noscript>
                        <img src="http://www.slashcreative.co/themes/moppers-version-2/wp-content/themes/moppers/assets/images/icons/slcr-logo-simple.svg" data-src="http://www.slashcreative.co/themes/moppers-version-2/wp-content/themes/moppers/assets/images/icons/slcr-logo-simple.svg" alt="logo" className="sticky__logo ls-is-cached lazyloaded"  />  */}
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
                        <ul className="nav__list nav-list_alt">
                            <li id="menu-item-707" className="nav__item menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children dropdown active menu-item-707 link__active">
                                <Link to="/home" className="mouseover__call">
                                    <span className="inner__item">Home </span>
                                </Link>
                            </li>
                            <li id="menu-item-548" className="nav__item menu-item menu-item-type-post_type menu-item-object-page menu-item-548 link__active">
                                <Link to="/about" className="mouseover__call">
                                    <span className="inner__item">About</span>
                                </Link>
                            </li>
                            <li id="menu-item-9" className="nav__item menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-9 link__active" onMouseLeave={() => handleMouseLeave()}>
                                <Link 
                                    to="#" 
                                    className="mouseover__call" 
                                    onMouseEnter={() => handleMouseEnter()}
                                    >
                                    <span className="inner__item">Services </span>
                                </Link>
                                <ul className={isDropDownVisible ? "submenu__dropdown child depth_0 active":"submenu__dropdown child depth_0"}>
                                    <li id="menu-item-547" className=" dropdown__item  menu-item menu-item-type-post_type menu-item-object-page menu-item-547">
                                        <Link to="/services/all" className="child__hover">All Services</Link>
                                    </li>
                                    <li id="menu-item-554" className=" dropdown__item  menu-item menu-item-type-post_type menu-item-object-page menu-item-554">
                                        <Link to="/services/residential-cleaning" className="child__hover">Residential Cleaning</Link>
                                    </li>
                                    <li id="menu-item-552" className=" dropdown__item  menu-item menu-item-type-post_type menu-item-object-page menu-item-552">
                                        <Link to="/services/commercial-cleaning" className="child__hover">Commercial Cleaning</Link>
                                    </li>
                                    <li id="menu-item-553" className=" dropdown__item  menu-item menu-item-type-post_type menu-item-object-page menu-item-553">
                                        <Link to="/services/construction-cleaning" className="child__hover">Construction Cleaning</Link>
                                    </li>
                                    <li id="menu-item-551" className=" dropdown__item  menu-item menu-item-type-post_type menu-item-object-page menu-item-551">
                                        <Link to="/services/windows-cleaning" className="child__hover">Windows Cleaning</Link>
                                    </li>
                                    <li id="menu-item-550" className=" dropdown__item  menu-item menu-item-type-post_type menu-item-object-page menu-item-550">
                                        <Link to="/services/carpet-cleaning" className="child__hover">Carpet Cleaning</Link>
                                    </li>
                                    <li id="menu-item-549" className=" dropdown__item  menu-item menu-item-type-post_type menu-item-object-page menu-item-549">
                                        <Link to="/services/furniture-cleaning" className="child__hover">Furniture Cleaning</Link>
                                </li>
                            </ul>
                        </li>
                        {/* <li id="menu-item-545" className="nav__item menu-item menu-item-type-post_type menu-item-object-page menu-item-545 link__active">
                            <Link to="http://www.slashcreative.co/themes/moppers-version-2/pricing/" className="mouseover__call">
                                <span className="inner__item">Pricing</span>
                            </Link>
                        </li> */}
                        {/* <li id="menu-item-559" className="nav__item menu-item menu-item-type-post_type menu-item-object-page menu-item-559 link__active">
                            <Link to="http://www.slashcreative.co/themes/moppers-version-2/blog/" className="mouseover__call"><span className="inner__item">Blog</span>
                            </Link>
                        </li> */}
                        <li id="menu-item-546" className="nav__item menu-item menu-item-type-post_type menu-item-object-page menu-item-546 link__active">
                            <Link to="/contacts" className="mouseover__call"><span className="inner__item">Contact</span></Link>
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