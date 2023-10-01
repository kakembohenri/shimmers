import { CloseOutlined, ExpandLessOutlined, ExpandMore, ExpandMoreOutlined } from "@mui/icons-material"
import { useState } from "react"

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
                    <a href="#" className="" >Home </a>
                </li>
                <li id="mobile-menu-item-548" className="nav__mobile_item  parent__menu ">
                    <a title="About" href="http://www.slashcreative.co/themes/moppers-version-2/about/">About</a>
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
                                <a title="All Services" href="http://www.slashcreative.co/themes/moppers-version-2/services/">All Services</a>
                            </li>
                            <li id="mobile-menu-item-554" className="nav__mobile_item ">
                                <a title="Residential Cleaning" href="http://www.slashcreative.co/themes/moppers-version-2/services/residential-cleaning/">Residential Cleaning</a>
                            </li>
                            <li id="mobile-menu-item-552" className="nav__mobile_item ">
                                <a title="Commercial Cleaning" href="http://www.slashcreative.co/themes/moppers-version-2/services/commercial-cleaning/">Commercial Cleaning</a>
                            </li>
                            <li id="mobile-menu-item-553" className="nav__mobile_item ">
                                <a title="Construction Cleaning" href="http://www.slashcreative.co/themes/moppers-version-2/services/construction-cleaning/">Construction Cleaning</a>
                            </li>
                            <li id="mobile-menu-item-551" className="nav__mobile_item ">
                                <a title="Windows Cleaning" href="http://www.slashcreative.co/themes/moppers-version-2/services/windows-cleaning/">Windows Cleaning</a>
                            </li>
                            <li id="mobile-menu-item-550" className="nav__mobile_item ">
                                <a title="Carpet Cleaning" href="http://www.slashcreative.co/themes/moppers-version-2/services/carpet-cleaning/">Carpet Cleaning</a>
                            </li>
                            <li id="mobile-menu-item-549" className="nav__mobile_item ">
                                <a title="Furniture Cleaning" href="http://www.slashcreative.co/themes/moppers-version-2/services/furniture-cleaning/">Furniture Cleaning</a>
                            </li>
                        </ul>
                    )}
                </li>
                <li id="mobile-menu-item-545" className="nav__mobile_item  parent__menu ">
                    <a title="Pricing" href="http://www.slashcreative.co/themes/moppers-version-2/pricing/">Pricing</a>
                </li>
                <li id="mobile-menu-item-559" className="nav__mobile_item  parent__menu ">
                    <a title="Blog" href="http://www.slashcreative.co/themes/moppers-version-2/blog/">Blog</a>
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
                        <i className="icon icon_phone"></i>+ (123) 1800-567-8990
                    </li>
                    <li>
                        <i className="icon icon_clock"></i>Mon - Fri: 9:00 - 19:00 / Closed on Weekends
                    </li>
                    <li>
                        <i className="icon icon_mail"></i>office@example.com
                    </li>
                </ul>
            </div>
        </div>
        <div className="nav__module_side social">
            <ul className="social__side_mob">
                <li> 
                    <a href="#" target="_blank">
                        <i className="socicon-facebook"></i>
                    </a>
                </li>
                <li> 
                    <a href="#" target="_blank">
                        <i className="socicon-twitter"></i>
                    </a>
                </li>
                <li> 
                    <a href="#" target="_blank">
                        <i className="socicon-instagram"></i>
                    </a>
                </li>
                <li> 
                    <a href="#" target="_blank">
                        <i className="socicon-houzz"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</aside>
  )
}
export default SideBar