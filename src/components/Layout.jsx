import { ExpandLessOutlined } from "@mui/icons-material"
import Navbar from "./Navbar"
import Footer from "../pages/Footer/Index"

const Layout = ({children}) => {

    const style = `
    <style>[data-bg-color-650eda535fbf4]:before { content: ""; position: absolute; background: linear-gradient(146deg, rgba(28, 25, 89, 0.95) 35%, rgba(28,25,89,0) 100%); height: 100%; width: 100%; top: 0; left: 0; z-index: 1; } .data-bg-color-650eda535fbf4.vc_row.vc_row-flex::after, .vc_row.vc_row-flex::before { display: inherit; } .data-bg-color-650eda535fbf4.vc_row:after, .vc_row:before { content: " "; display: inherit; }#slcr_row_height_650eda535fc1e{ height:100px; }
                            </style>`
  return (
    <>
        {/* <div className="load__wrapper" data-preloader-position="center" style="display: none;"> 
            <svg className="loading__page" viewBox="25 25 50 50" style="display: none;"> 
                <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2"></circle> 
            </svg>
        </div> */}
        <a href="#0" className="back__top visible">
            <ExpandLessOutlined />
        </a>
        <Navbar />
        <main className="main__content">
            <section className="col-md-12 col-sm-12 col-xs-12 allow-gutenberg">
                <div className="row">
                    <div className="container custom-container">
                        <p style={{display: "none"}}>
                            {style}
                         </p>
                        {children}
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </>    
  )
}
export default Layout