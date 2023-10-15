import { ArrowForward } from "@mui/icons-material"
import carpet from "../../assets/images/carpet.jpg"
import commercial from "../../assets/images/commercial.jpg"
import laundry from "../../assets/images/laundry.jpg"
import sofa from "../../assets/images/sofa.jpg"
import residential from "../../assets/images/residential.jpg"

const Index = () => {
    const style1 = `#slcr_custom_heading_65197de838211{ font-size: 13px;text-align: left;  letter-spacing: 1px; }`
    const style2 = `#slcr_custom_heading_65197de838358{ font-size: 36px;line-height: 46px;text-align: left;  }`
    const style3 = `#slcr_custom_heading_65197de8385fb{ text-align: left;  }`
    const style4 = `#btn_slcr_65197de838ba4{ font-size: 13px;}  #btn_slcr_65197de838ba4:hover{ }`
    const style5 = `
    .arrow-icon{
        color: #6382f7;
    }
    .hover-main:hover .arrow-icon{
        color: white;
      }`
  return (
   <div className="main-component vc_row wpb_row vc_row-fluid content-dark data-bg-color-65197de837ca1 vc_custom_1556343092975 row-z-index-65197de837ca1">
    <style>{style5}</style>
    <div className="wpb_column vc_column_container content-dark vc_col-sm-12 column-z-index-65197de837dd5">
        <div className="vc_column-inner ">
            <div className="wpb_wrapper">
                <div className="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1556212061959 vc_row-o-equal-height vc_row-o-content-bottom vc_row-flex">
                    <div className="wpb_column vc_column_container vc_col-sm-4">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <style>{style1}</style>
                                <h6 id="slcr_custom_heading_65197de838211" className="vc_custom_heading sub-heading single font-700">Services</h6>
                                <style>{style2}</style>
                                <h2 id="slcr_custom_heading_65197de838358" className="vc_custom_heading vc_custom_1556006315769 font-600">Offering Best<br /> Cleaning Services</h2>
                                <div className="vc_empty_space  visible-xs" style={{height: "20px"}}>
                                    <span className="vc_empty_space_inner"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-5">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <style>{style3}</style>
                                <p id="slcr_custom_heading_65197de8385fb" className="vc_custom_heading font-400">We are proving all type of cleaning solutions for every small and big businesses, organizations and homes.</p>
                                <div className="vc_empty_space  visible-xs" style={{height: "20px"}}>
                                    <span className="vc_empty_space_inner"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="wpb_column vc_column_container vc_col-sm-3">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <style>{style4}</style>
                                <div className="vc_btn3-container vc_btn3-right"> 
                                    <a href="#" id="btn_slcr_65197de838ba4" className="btn   vc_custom_1556202625078  btn--lg font-700 btn--rounded btn-shadow btn--primary     btn--full-xs "> 
                                    <span>MORE SERVICES</span> 
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="vc_row wpb_row vc_inner vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-4 vc_col-md-6 vc_col-xs-12">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper"> 
                                <a href="#" title="Residential Cleaning" className="hover-main service__box   slcr_custom_alert_css">
                                    <div className="service__image lazy" data-was-processed="true" style={{ backgroundImage: `url(${residential})`}}>
                                    </div>
                                    <div className="service__info">
                                        <h5>Residential Cleaning</h5>
                                        {/* <p>Starting from <strong>$50</strong></p>  */}
                                        <span className="service__arrow">
                                            <ArrowForward className="arrow-icon" />
                                        </span>
                                    </div> 
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-4 vc_col-md-6 vc_col-xs-12">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper"> 
                                <a href="#" title="Commercial Cleaning" className="hover-main service__box   slcr_custom_alert_css">
                                    <div className="service__image lazy"  data-was-processed="true" style={{backgroundImage: `url(${commercial})`}}></div>
                                    <div className="service__info">
                                        <h5>Commercial Cleaning</h5>
                                        {/* <p>Starting from <strong>$100</strong></p>  */}
                                        <span className="service__arrow"> 
                                        <ArrowForward className="arrow-icon" />
                                        </span>
                                    </div> 
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-4 vc_col-md-6 vc_col-xs-12">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper"> 
                                <a href="#" title="Windows Cleaning" className="hover-main service__box   slcr_custom_alert_css">
                                    <div className="service__image lazy" data-was-processed="true" style={{backgroundImage: `url(${laundry})`}}></div>
                                    <div className="service__info">
                                        <h5>Laundry</h5>
                                        {/* <p>Starting from <strong>$150</strong></p>  */}
                                        <span className="service__arrow"> 
                                            <ArrowForward className="arrow-icon" />
                                        </span>
                                    </div> 
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-4 vc_col-md-6 vc_col-xs-12">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper"> 
                                <a href="#" title="Carpet Cleaning" className="hover-main service__box   slcr_custom_alert_css">
                                    <div className="hover-main service__image lazy"  data-was-processed="true" style={{backgroundImage: `url(${sofa})`}}></div>
                                    <div className="service__info">
                                        <h5>Sofa Cleaning</h5>
                                        {/* <p>Starting from <strong>$200</strong></p>  */}
                                        <span className="service__arrow"> 
                                            <ArrowForward className="arrow-icon" />
                                        </span>
                                    </div> 
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-4 vc_col-md-6 vc_col-xs-12">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper"> 
                                <a href="#" title="Furniture Cleaning" className="hover-main service__box   slcr_custom_alert_css">
                                    <div className="service__image lazy"  data-was-processed="true" style={{backgroundImage: `url(${carpet})`}}></div>
                                    <div className="service__info">
                                        <h5>Carpet Cleaning</h5>
                                        {/* <p>Starting from <strong>$120</strong></p>  */}
                                        <span className="service__arrow"> 
                                            <ArrowForward className="arrow-icon" />
                                        </span>
                                    </div> 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
export default Index