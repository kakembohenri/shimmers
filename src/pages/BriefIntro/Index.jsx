import Svg from "./Svg"

const BriefIntro = () => {

    const style1 = `#slcr_custom_heading_650ee07e18cca{ font-size: 13px;text-align: left;  letter-spacing: 1px; }`
    const style2 = `#slcr_custom_heading_650ee07e19423{ font-size: 17px;color: rgba(255,255,255,0.7);line-height: 29px;text-align: left;  }`

    const style3 = `.slcr_icon_html_last_css_650ee07e19d9d{  padding-left: 25px !important; } #btn_slcr_650ee07e19da7{  font-size: 13px;}  #btn_slcr_650ee07e19da7:hover{ }`

    const style4 = `.special_color:before{
        background: #31aeb3 !important;
    }`
    // background: linear-gradient(146deg, #49796b 35%, rgba(28,25,89,0) 100%) !important;

    // style={{position: "relative", left: "-89.5px", boxSizing: "border-box", width: "1349px", paddingLeft: "89.5px", paddingRight: "89.5px"}}
  return (
    <div data-vc-full-width="true" data-vc-full-width-init="true" className="special_color main-component intro-custom slcr_row_curve vc_row wpb_row vc_row-fluid content-light data-bg-color-650ee07e18324 vc_custom_1639235925789 vc_row-has-fill row-z-index-650ee07e18324 intro" data-bg-overlay="10" data-bg-color-650ee07e18324="10" style={{marginLeft: "0 !important"}}>
            <div className="wpb_column vc_column_container content-dark vc_col-sm-8 vc_col-lg-6 vc_col-md-9 vc_col-xs-12 column-z-index-650ee07e1874a" style={{ width:"100%" }}>
                <div className="vc_column-inner vc_custom_1555946261937">
                    <div className="wpb_wrapper" style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
                        <style>
                            {style1}
                            {style4}
                        </style>
                        <h6 id="slcr_custom_heading_65105bf8707e2" className="vc_custom_heading sub-heading center font-700">Introducing Shimma Hub Co.Ltd</h6>
                        <div className="wpb_text_column wpb_content_element  vc_custom_1556213108911" style={{ textAlign:"center" }}>
                            <div className="wpb_wrapper">
                                <h1 className="font-300" style={{fontSize: "58px", lineHeight: "75px"}}>Worried about<br /> your <span className="font-700">home</span> &amp; 
                                    <span className="font-700">office </span>cleaning?
                                </h1>
                            </div>
                        </div>
                        <div className="vc_row wpb_row vc_inner vc_row-fluid">
                            <div className="wpb_column vc_column_container vc_col-sm-10">
                                <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                        <style>
                                            {style2}
                                        </style>
                                        <p id="slcr_custom_heading_650ee07e19423" className="vc_custom_heading vc_custom_1556213137619 font-400">Hire us! We are a professional cleaning company offering all type of cleaning and maintenance services.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="wpb_column vc_column_container vc_col-sm-2">
                                <div className="vc_column-inner">
                                    <div className="wpb_wrapper"></div>
                                </div>
                            </div>
                        </div>
                        <style>
                            {style3}
                        </style>
                        <div className="vc_btn3-container vc_btn3-left"> 
                            <a href="#" id="btn_slcr_650ee07e19da7" className="btn   vc_custom_1555927878202  btn--lg font-700 btn--rounded    btn-shadow  btn--secondary  btn--icon-simple " style={{ background:"#00f5ff" }}>      <span>REQUEST A DEMO</span><i className="vc_btn3-icon fa fa-arrow-right slcr_icon_html_last_css_650ee07e19d9d"></i> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        <style></style>
        <div className="wpb_column vc_column_container content-dark vc_col-sm-6 vc_hidden-sm vc_hidden-xs column-z-index-650ee07e19e68">
            <div className="vc_column-inner ">
                <div className="wpb_wrapper">
                </div>
            </div>
        </div>
        <div className="row__shape" data-shape-type="Waves_md_left" data-curve-height="100px" data-curve-animation="no" data-shape-direction="Bottom" id="slcr_row_height_650ee07e18374" style={{height: "100px"}}> 
            <Svg />
        </div>
        </div>
  )
}
export default BriefIntro