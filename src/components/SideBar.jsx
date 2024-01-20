import { CloseOutlined, ExpandLessOutlined, ExpandMore, ExpandMoreOutlined, AccessTimeOutlined, Facebook, Instagram, MailOutlineOutlined, PhoneOutlined, Twitter, WatchOutlined, LinkedIn } from "@mui/icons-material"
import { useState } from "react"
import { Link } from "react-router-dom"

const SideBar = ({setIsMobile}) => {
    // className={isMobile ? 'nav__mobile in-action':'nav__mobile' }
    const [showOptions, setShowOptions] = useState(false)

    const [isDropDownVisible, setIsDropDownVisible] = useState(false)

    const handleMouseEnter = () => {
        setIsDropDownVisible(true)
    }
    const handleMouseLeave = () => {
        setIsDropDownVisible(false)
    }


  return (
    <aside className='nav__mobile in-action' style={{ background: "#a0d6b4" }}>
    <div className="nav__close" onClick={() => setIsMobile(false)}> 
        <CloseOutlined fontSize="large" />
    </div>
    <div className="nav__section active">
        <div className="nav__module_side">
            <ul className="nav__mobile_list">
                <li id="mobile-menu-item-707" className="nav__mobile_item  parent__menu ">
                    <Link to="/home" className="" >Home </Link>
                </li>
                <li id="mobile-menu-item-548" className="nav__mobile_item  parent__menu ">
                    <Link to="/about">About</Link>
                </li>
                <li id="mobile-menu-item-9" className="nav__mobile_item  parent__menu " 
                onClick={() => setShowOptions((prev) => !prev)}
                >
                    <Link 
                        to="#" 
                        className="mouseover__call" 
                        onClick={() => setShowOptions((prev) => !prev)}
                        >
                            <span>
                                Services 
                                {showOptions ? 
                                    <ExpandLessOutlined onClick={() => setShowOptions(false)} />
                                    :
                                    <ExpandMoreOutlined onClick={() => setShowOptions(true)} />
                                }
                            </span>
                    </Link>
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
                    <Link title="Contact" to="/contacts">Contact</Link>
                </li>
                <li id="mobile-menu-item-546" className="nav__mobile_item  parent__menu ">
                    <Link title="Contact" to="/careers">Careers</Link>
                </li>
            </ul>
        </div>
        <div className="nav__module_side sec__links">
            <div className="text__mob_side">
                <ul className="top-bar-content">
                    <li className="link-secondary">
                        <PhoneOutlined fontSize="large" />+(256) 743 363 774
                    </li>
                    <li className="link-secondary">
                        <AccessTimeOutlined fontSize="large" />Mon - Fri: 9:00 - 19:00 / Closed on Weekends
                    </li>
                    <li className="link-secondary">
                        <MailOutlineOutlined fontSize="large" />Shimahub95@gmail.com
                    </li>
                </ul>
            </div>
        </div>
        <div className="nav__module_side social">
            <ul className="social__side_mob">
            <li> 
                <Link to="#" target="_blank">
                    <Facebook fontSize="large" style={{ color:"#1877F2" }} />
                </Link>
            </li>
            <li> 
                <Link to="#" target="_blank">
                    <Twitter fontSize="large" style={{ color:" #1DA1F2" }} />
                </Link>
            </li>
            <li> 
                <Link to="#" target="_blank">
                    <Instagram fontSize="large" style={{ /*background:"linear-gradient(to bottom, #833ab4, #fd1d1d, #fd1d8e)"*/ color:"rgb(253, 29, 142)" }} />
                </Link>
            </li>
            <li> 
                <Link to="#" target="_blank">
                    <LinkedIn fontSize="large" style={{ /*background:"linear-gradient(to bottom, #833ab4, #fd1d1d, #fd1d8e)"*/ color:"#0077B5" }} />
                </Link>
            </li>
            </ul>
        </div>
    </div>
</aside>
  )
}
export default SideBar