import vision from "../../assets/images/vision.png"
import { Box } from "@mui/material"

const Vision = () => {
    const style1 = `.slcr_custom_textlink_inner_65105bf86c68e{  font-size: 15px !important; }`
    const style2 = `#slcr_custom_heading_65105bf86c3af{ font-size: 13px;text-align: left;  letter-spacing: 1px; }`
    const style3 = `#slcr_custom_heading_65105bf86c50b{ font-size: 36px;line-height: 48px;text-align: left;  }`
    const style4 = `#slcr_custom_heading_65105bf86c65d{ text-align: left;  }`
    const style5 = `#slcr_custom_heading_65105bf86cbeb{ line-height: 1;text-align: center;  }`
  return (
    <Box sx={{ flexDirection: {lg: 'row',md:'column-reverse', sm: 'column-reverse', xs: 'column-reverse'}}} className="main-component flex-container vc_row wpb_row vc_row-fluid content-dark data-bg-color-65105bf86c0d2 vc_custom_1556211578092 row-z-index-65105bf86c0d2">
    <style>{style1}</style>
    <style></style>
    <Box sx={{ width:{md: '100%', sm: '100%', xs:'100%'} }} className="wpb_column vc_column_container content-dark vc_col-sm-5 column-z-index-65105bf86c80d">
        <div className="vc_column-inner ">
            <div className="wpb_wrapper">
                <div className="vc_empty_space  visible-xs" style={{height: "165px"}}>
                    <span className="vc_empty_space_inner"></span>
                </div>
                <img className="landing-page-img" src={vision} alt='Vision' />
            </div>
        </div>
    </Box>
    <style></style>
    <div className="wpb_column vc_column_container content-dark vc_col-sm-1 column-z-index-65105bf86c74d">
        <div className="vc_column-inner ">
            <div className="wpb_wrapper"></div>
        </div>
    </div>
    {/* <style>.slcr_box_image_css_65105bf86ca52{   }</style> */}
    <style></style>
    
    <Box sx={{ width:{md: '100%', sm: '100%', xs:'100%'} }} className="wpb_column vc_column_container content-dark vc_col-sm-6 column-z-index-65105bf86c1d8">
        <div className="vc_column-inner vc_custom_1555946720709">
            <div className="wpb_wrapper">
                <style>{style2}</style>
                <h6 id="slcr_custom_heading_65105bf86c3af" className="vc_custom_heading sub-heading single font-700">Vision</h6>
                <style>{style3}</style>
                <h2 id="slcr_custom_heading_65105bf86c50b" className="vc_custom_heading vc_custom_1555947922134 font-600">Together we can hope</h2>
                <style>{style4}</style>
                <p id="slcr_custom_heading_65105bf86c65d" className="vc_custom_heading vc_custom_1555947929938 font-400">To build stronger, cleaner, and more prosperous neighborhoods.
                </p>
                <div className="text_link_wrap  text-underline font-600" data-display-type="inline"> 
            </div>
        </div>
    </div>
    </Box>
</Box>
  )
}
export default Vision