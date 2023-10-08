import { ArrowForwardIos } from "@mui/icons-material";
import { useMemo, useState } from "react"

const Header = () => {
    let path = window.location.href.split("/").slice(-1)[0];
    const getService = () => {
        console.log("path:", path)
        switch(path){
            case "residential-cleaning":
                return "Residential Cleaning";
            case "commercial-cleaning":
                return "Commercial Cleaning"
            case "construction-cleaning":
                return "Construction Cleaning"
            case "windows-cleaning":
                return "Windows Cleaning"
            case "carpet-cleaning":
                return "Carpet Cleaning"
            case "furniture-cleaning":
                return "Furniture Cleaning"
            default:
                return "All"
        }
    }
  return (
    <div className="page__header content-light slcr_custom_heading_6521a7d5431ad lazyloaded" data-header-vertical-align="middle" data-header-content-align="left" data-bg="http://www.slashcreative.co/themes/moppers-version-2/wp-content/uploads/2019/12/mopper-inner-header-1.jpg" style={{backgroundImage: "url('http://www.slashcreative.co/themes/moppers-version-2/wp-content/uploads/2019/12/mopper-inner-header-1.jpg')", height: "350px;" }}>
        <div className="content">
            <div className="container">
                <div className="inner">
                    <h1>{getService()}</h1>
                    <ul className="header-list">
                        <li>
                            <a href="/">Home</a>
                            <ArrowForwardIos />
                        </li>
                        <li>
                            <a href="/services/all">Services</a>
                            <ArrowForwardIos />
                        </li>
                        <li>
                            <a href={`/services/${path}`} style={{ color: "slategray" }}>{getService()}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Header