import { Link } from "react-router-dom"

const Header = () => {
    const style1 = `.vc_custom_1639237501924 {
        padding-top: 130px !important;
        padding-bottom: 150px !important;
        background: #555555 url(http://www.slashcreative.co/themes/moppers-version-2/wp-content/uploads/2019/12/moppers-about-hero-1.jpg?id=603) !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
        background-size: cover !important;
    }
    
    `
  return (
    <div data-vc-full-width="true" data-vc-full-width-init="true" className="main-component slcr_row_curve vc_row wpb_row vc_row-fluid content-light data-bg-color-6522828b55809 vc_custom_1639237501924 vc_row-has-fill row-z-index-6522828b55809" data-bg-overlay="5"  data-bg-color-6522828b55809="10" >
        <style>{style1}</style>
        <div className="wpb_column vc_column_container content-dark vc_col-sm-6 vc_col-lg-5 vc_col-md-6 vc_col-xs-12 column-z-index-6522828b55c00">
            <div className="vc_column-inner vc_custom_1556271365097">
                <div className="wpb_wrapper">
                    <style>{`#slcr_custom_heading_6522828b561da{ font-size: 13px;text-align: left;  letter-spacing: 1px; }`}</style>
                    <h6 id="slcr_custom_heading_6522828b561da" className="vc_custom_heading sub-heading single font-700">About Company</h6>
                    <style>{`#slcr_custom_heading_6522828b56314{ font-size: 48px;text-align: left;  }`}</style>
                    <h1 id="slcr_custom_heading_6522828b56314" className="vc_custom_heading vc_custom_1556727054498 font-600">Caring about your cleaning needs</h1>
                    <style>{`#slcr_custom_heading_6522828b56450{ font-size: 16px;color: rgba(255,255,255,0.7);line-height: 27px;text-align: left;  }`}</style>
                    <p id="slcr_custom_heading_6522828b56450" className="vc_custom_heading vc_custom_1556727127310 font-400">At Shimma Hub Co. Ltd, we have made it our mission to transform every space we touch into a spotless and inviting haven. With a commitment to excellence and a passion for cleanliness, we've been serving our clientele base to satisfaction.</p>
                    <style>{`#btn_slcr_6522828b56d30{ font-size: 13px;}  #btn_slcr_6522828b56d30:hover{ }`}</style>
                    {/* <div className="vc_btn3-container vc_btn3-left"> 
                        <Link to="#" id="btn_slcr_6522828b56d30" className="btn   vc_custom_1556271462481  btn--lg font-700 btn--rounded btn-shadow btn--secondary     "> 
                            <span>REQUEST A FREE DEMO</span> 
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
        <style></style>
        <div className="wpb_column vc_column_container content-dark vc_col-sm-7 vc_hidden-sm vc_hidden-xs column-z-index-6522828b56df6">
            <div className="vc_column-inner ">
                <div className="wpb_wrapper"></div>
            </div>
        </div>
        <div className="row__shape" data-shape-type="Waves_md_left" data-curve-height="100px" data-curve-animation="no" data-shape-direction="Bottom" id="slcr_row_height_6522828b55861" style={{height: "100px"}}> 
            {/* <svg version="1.1" className="shape__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1366 231" preserveAspectRatio="none" style="enable-background:new 0 0 1366 231;" xml:space="preserve"><path fill="#ffffff" d="M0,54c0,0,106,134,307,101c246-63,285-39,368-22c106,33,225,90,292,62c109-39,255-191,399-178 c0,128,0,214,0,214H0V54z"></path> <path fill="#ffffff" style="opacity: 0.45" d="M-1,231h188h1178c0,0,2-104,0-214c-297,10-383,309-632,143c-39,0-122,51-325-17C172,216-1,31-1,31"></path> <path fill="#ffffff" style="opacity: 0.45" d="M1366,227c0,0,0-71.03,0-203c-198-44-439,252-559,156c-13,1,0.7-9.44-53-20c-116.23-22.86-254.55-23.5-371-17 C157,121-4,172.01-4,172.01"></path>
            </svg> */}
        </div>
    </div>


  )
}
export default Header