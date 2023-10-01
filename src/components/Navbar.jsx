import { CloseOutlined, MenuOutlined } from "@mui/icons-material"
import { useState } from "react"
import NavbarPrimary from "./NavbarPrimary"
import NavbarSecondary from "./NavbarSecondary"
import SideBar from "./SideBar"

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false)
  return (
    <header className="header__nav shadow__sm header-light" data-nav-layout="first" data-menu-align="right" data-nav-container="true" data-mobile-nav="simple" data-sidebar-direction="right-to-left" data-header-scheme="light" data-sticky-scheme="light" data-header-shadow="small" data-hover-border="expanding" data-header-fixed="none" data-mobile-fixed="none" data-sticky-scroll="true" data-mobile-scroll="none">
        <NavbarSecondary />
        <NavbarPrimary setIsMobile={setIsMobile} />
        <div className="modern__trigger hidden-md hidden-lg">
            <div className="nav__mobile_mod">
                <div className="nav__background">
                </div>
            </div>
            <div className="mob__trigger">
                <MenuOutlined fontSize="large" />
            </div>
        </div>
        <div id="search" className="header__search">
            <div className="search__wrap">
                <div className="container search__cont">
                    <form> 
                        <i className="search__icon"> 
                            {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 512 512" enable-background="new 0 0 512 512" className="svg__size"> 
                                <g> 
                                    <path d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z" className="svg__fill"></path> 
                                </g> 
                            </svg>  */}
                        </i> 
                        <span className="search__title">What are you looking for?</span> 
                        <input type="text" className="search__input" placeholder="Search" value="" name="s" id="s_page" /> 
                        <input type="hidden" className="search__input" value="main" name="main" id="main_input" />
                    </form>
                    <div className="search__close_btn">
                        <CloseOutlined />
                    </div>
                </div>
            </div>
        </div>
        {isMobile && (
        <SideBar setIsMobile={setIsMobile} />
        )}
    </header>
  )
}
export default Navbar