import { AccessTimeOutlined, Facebook, Instagram, MailOutlineOutlined, PhoneOutlined, Twitter, WatchOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"

const NavbarSecondary = () => {
  return (
    <div className="header__secondary hidden-xs hidden-sm">
            <div className="wrap">
                <div className="container">
                    <div className="secondary__content">
                        <div className="top__nav_section hidden-xs">
                            <div className="inner__wrap text__block">
                                <div className="top__content">
                                    <ul className="top-bar-content">
                                        <li>
                                            <PhoneOutlined fontSize="large" /> + (123) 1800-567-8990
                                        </li>
                                        <li>
                                            <AccessTimeOutlined fontSize="large" /> Mon - Fri: 9:00 - 19:00 / Closed on Weekends
                                        </li>
                                        <li>
                                            <MailOutlineOutlined fontSize="large" /> office@example.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="top__nav_section right">
                            <div className="secondary__toggle res__menu pull-right visible-xs visible-sm"> 
                                <i className="icon_menu"></i>
                            </div>
                            <div className="inner__wrap">
                                <ul className="secondary__social">
                                    <li> 
                                        <Link to="#" target="_blank">
                                            <Facebook fontSize="large" />
                                        </Link>
                                    </li>
                                    <li> 
                                        <Link to="#" target="_blank">
                                            <Twitter fontSize="large" />
                                        </Link>
                                    </li>
                                    <li> 
                                        <Link to="#" target="_blank">
                                            <Instagram fontSize="large" />
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
export default NavbarSecondary