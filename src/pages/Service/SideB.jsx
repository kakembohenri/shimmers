import { Link } from "react-router-dom"
import { ArrowForwardIos } from "@mui/icons-material";

const SideB = () => {
    const style = `
    .slcr-sidebar li a{
        display: flex !important;
        justify-content: space-between;
        align-items: center;
        }
    .slcr-sidebar li a:before{
        content: " " !important;
    }`
  return (
        <div className="col-md-4 col-sm-12 col-xs-12">
            <aside className="woocommerce slcr-sidebar">
                <div id="nav_menu-1" className="widget widget_nav_menu">
                    <h3 className="title">Services</h3>
                    <div className="menu-menu-sidebar-container">
                        <style>{style}</style>
                        <ul id="menu-menu-sidebar" className="menu">
                            <li id="menu-item-539" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-539">
                                <Link to="/services/residential-cleaning">
                                    Residential Cleaning
                                    <ArrowForwardIos />
                                </Link>
                            </li>
                            <li id="menu-item-543" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-543">
                                <Link to="/services/commercial-cleaning">
                                    Commercial Cleaning
                                    <ArrowForwardIos />
                                </Link>
                            </li>
                            <li id="menu-item-544" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-544">
                                <Link to="/services/construction-cleaning">
                                    Construction Cleaning
                                    <ArrowForwardIos />
                                </Link>
                            </li>
                            <li id="menu-item-542" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-500  menu-item-542">
                                <Link to="/services/windows-cleaning">
                                    Windows Cleaning
                                    <ArrowForwardIos />
                                </Link>
                            </li>
                            <li id="menu-item-541" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-541">
                                <Link to="/services/carpet-cleaning">
                                    Carpet Cleaning
                                    <ArrowForwardIos />
                                </Link>
                            </li>
                            <li id="menu-item-540" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-540">
                                <Link to="/services/furniture-cleaning">
                                    Furniture Cleaning
                                    <ArrowForwardIos />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
  )
}
export default SideB