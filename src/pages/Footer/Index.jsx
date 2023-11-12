import {Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material"
import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.jpg"

const Index = () => {
    const style=`.special_color{
        background-color: #a3c1ad !important;
    }`
  return (
    <footer className="footer__cont slcr-sidebar col__4 col__alternate " data-footer-layout="first" data-widget-align="center" data-social-location="default" data-bg-overlay="0" data-footer-scheme="dark">
        <style>
            {style}
        </style>
        <div className="footer__main special_color">
            <div className="container no-padding">
                <div className="widget__area">
                    <div className="widget__wrap">
                        <div className="footer__logo"> 
                            {/* <noscript>
                                <img src="http://www.slashcreative.co/themes/moppers-version-2/wp-content/themes/moppers/assets/images/icons/slcr-logo-footer.svg" alt="logo" />
                            </noscript> */}
                            <img className=" lazyloaded" src={logo} alt="logo" />
                        </div>
                        <div className="footer__desc">
                            <p>What is shimma hub <br /><br /> Mail : Shimahub95@gmail.com<br /> Call : 0743 363 774
                            </p>
                        </div>
                        <ul className="footer__social">
                            <li> 
                                <a href="#" target="_blank">
                                <Facebook fontSize="large" style={{ color:"#1877F2" }} />
                                </a>
                            </li>
                            <li> 
                                <a href="#" target="_blank">
                                    <Twitter fontSize="large"  style={{ color:" #1DA1F2" }}/>
                                </a>
                            </li>
                            <li> 
                                <a href="#" target="_blank">
                                    <Instagram fontSize="large" style={{ color:"rgb(253, 29, 142)" }} />
                                </a>
                            </li>
                            <li> 
                                <Link to="#" target="_blank">
                                    <LinkedIn fontSize="large" style={{ /*background:"linear-gradient(to bottom, #833ab4, #fd1d1d, #fd1d8e)"*/ color:"#0077B5" }} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="widget__area">
                    <div className="widget__wrap">
                        <div id="nav_menu-2" className="widget-content widget widget_nav_menu">
                            <h3 className="widget-title">Pages</h3>
                            <div className="menu-footer-pages-container">
                                <ul id="menu-footer-pages" className="menu">
                                    <li id="menu-item-493" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-10 current_page_item menu-item-493">
                                        <Link to="#">Home</Link>
                                    </li>
                                    <li id="menu-item-492" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-492">
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li id="menu-item-491" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-491">
                                        <Link to="/services">Services</Link>
                                    </li>
                                    <li id="menu-item-490" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-490">
                                        <Link to="contact/">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget__area">
                    <div className="widget__wrap">
                        <div id="nav_menu-3" className="widget-content widget widget_nav_menu">
                            <h3 className="widget-title">Services</h3>
                            <div className="menu-menu-sidebar-container">
                                <ul id="menu-menu-sidebar" className="menu">
                                    <li id="menu-item-539" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-539">
                                        <Link to="/services/residential-cleaning">Residential Cleaning</Link>
                                    </li>
                                    <li id="menu-item-543" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-543">
                                        <Link to="/services/commercial-cleaning">Commercial Cleaning</Link>
                                    </li>
                                    <li id="menu-item-544" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-544">
                                        <Link to="/services/construction-cleaning">Construction Cleaning</Link>
                                    </li>
                                    <li id="menu-item-542" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-542">
                                        <Link to="/services/windows-cleaning">Windows Cleaning</Link>
                                    </li>
                                    <li id="menu-item-541" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-541">
                                        <Link to="/services/carpet-cleaning">Carpet Cleaning</Link>
                                    </li>
                                    <li id="menu-item-540" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-540">
                                        <Link to="/services/furniture-cleaning">Furniture Cleaning</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__bottom special_color">
            <div className="container">
                <div className="copyright__text"> 
                    © {new Date().getFullYear()} Shimma Hub. All Rights Reserved.
                </div>
            </div>
        </div>
</footer>
  )
}
export default Index