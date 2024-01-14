import { AccessTimeOutlined, Facebook, Instagram, LinkedIn, MailOutlineOutlined, PhoneOutlined, Twitter, WatchOutlined } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const NavbarSecondary = () => {

    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", getHeight)
        return () => window.removeEventListener("scroll", getHeight)
    })

    const getHeight = () => {
        let height = window.scrollY

        if(height > 200){
            setShow(true)
        }else{
            setShow(false)
        }
    }

    const active = {
        background: "#1e2367",
        borderBottom: "#1e2367",
        position: "fixed",
        zIndex: "1000"
    }
    // Old colors
    // background:"#a3c1ad"
    // borderBottom:"#a3c1ad"
  return (
    <div className="header__secondary hidden-xs hidden-sm" style={ show ? active: {background:"#1e2367", borderBottom:"#1e2367" }}>
        <style>{`
        .link-secondary{
            display: flex !important;
            
        }
        `}</style>
            <div className="wrap">
                <div className="container">
                    <div className="secondary__content">
                        <div className="top__nav_section hidden-xs">
                            <div className="inner__wrap text__block">
                                <div className="top__content">
                                    <ul style={{ display: 'flex' }} className="top-bar-content">
                                        <li className="link-secondary" style={{ color:"#fff" }}>
                                            <PhoneOutlined fontSize="large" /> +(256) 743 363 774
                                        </li>
                                        <li className="link-secondary" style={{ color:"#fff" }}>
                                            <AccessTimeOutlined fontSize="large" /> Mon - Fri: 9:00 - 19:00 / Closed on Weekends
                                        </li>
                                        <li className="link-secondary" style={{ color:"#fff" }}>
                                            <MailOutlineOutlined fontSize="large" /> Shimahub95@gmail.com
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
                    </div>
                </div>
            </div>
        </div>
  )
}
export default NavbarSecondary