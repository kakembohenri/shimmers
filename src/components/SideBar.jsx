import { CloseOutlined, ExpandLessOutlined, ExpandMore, ExpandMoreOutlined, AccessTimeOutlined, Facebook, Instagram, MailOutlineOutlined, PhoneOutlined, Twitter, WatchOutlined } from "@mui/icons-material"
import { useState } from "react"
import { Link } from "react-router-dom"

const SideBar = ({setIsMobile}) => {
    // className={isMobile ? 'nav__mobile in-action':'nav__mobile' }
    const [showOptions, setShowOptions] = useState(false)
  return (
    <aside className='nav__mobile in-action'>
    <div className="nav__close" onClick={() => setIsMobile(false)}> 
        <CloseOutlined fontSize="large" />
    </div>
    <div className="nav__section active">
        <div className="nav__module_side">
            <ul className="nav__mobile_list">
                <li id="mobile-menu-item-707" className="nav__mobile_item  parent__menu ">
                    <Link to="#" className="" >Home </Link>
                </li>
                <li id="mobile-menu-item-548" className="nav__mobile_item  parent__menu ">
                    <Link to="/about">About</Link>
                </li>
                <li id="mobile-menu-item-9" className="nav__mobile_item  parent__menu ">
                    <a title="Services" href="#" className="" data-toggle="dropdown">
                        Services 
                        {showOptions ? 
                            <ExpandLessOutlined onClick={() => setShowOptions(false)} />
                            :
                            <ExpandMoreOutlined onClick={() => setShowOptions(true)} />
                        }
                    </a>
                    {showOptions && (
                        <ul className="nav__mobile_list  sub-menu child   depth_0 open-submenu">
                            <li id="mobile-menu-item-547" className="nav__mobile_item ">
                                <Link to="/services/all">All Services</Link>
                            </li>
                            <li id="mobile-menu-item-554" className="nav__mobile_item ">
                                <Link to="/services/residential-cleaning">Residential Cleaning</Link>
                            </li>
                            <li id="mobile-menu-item-552" className="nav__mobile_item ">
                                <Link to="/services/commercial-cleaning">Commercial Cleaning</Link>
                            </li>
                            <li id="mobile-menu-item-553" className="nav__mobile_item ">
                                <Link to="/services/construction-cleaning">Construction Cleaning</Link>
                            </li>
                            <li id="mobile-menu-item-551" className="nav__mobile_item ">
                                <Link to="/services/windows-cleaning">Windows Cleaning</Link>
                            </li>
                            <li id="mobile-menu-item-550" className="nav__mobile_item ">
                                <Link to="/services/carpet-cleaning">Carpet Cleaning</Link>
                            </li>
                            <li id="mobile-menu-item-549" className="nav__mobile_item ">
                                <Link to="/services/furniture-cleaning">Furniture Cleaning</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li id="mobile-menu-item-546" className="nav__mobile_item  parent__menu ">
                    <a title="Contact" href="http://www.slashcreative.co/themes/moppers-version-2/contact/">Contact</a>
                </li>
            </ul>
        </div>
        <div className="nav__module_side sec__links">
            <div className="text__mob_side">
                <ul className="top-bar-content">
                    <li>
                        <PhoneOutlined fontSize="large" />+ (123) 1800-567-8990
                    </li>
                    <li>
                        <AccessTimeOutlined fontSize="large" />Mon - Fri: 9:00 - 19:00 / Closed on Weekends
                    </li>
                    <li>
                        <MailOutlineOutlined fontSize="large" />office@example.com
                    </li>
                </ul>
            </div>
        </div>
        <div className="nav__module_side social">
            <ul className="social__side_mob">
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
</aside>
  )
}
export default SideBar