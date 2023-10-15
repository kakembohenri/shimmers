import { Link } from "react-router-dom"
import about from "../../assets/images/about.png"
import { Box } from "@mui/material"


const AboutUs = () => {
    const style1 = `.slcr_custom_textlink_inner_65105bf86c68e{  font-size: 15px !important; }`
    const style2 = `#slcr_custom_heading_65105bf86c3af{ font-size: 13px;text-align: left;  letter-spacing: 1px; }`
    const style3 = `#slcr_custom_heading_65105bf86c50b{ font-size: 36px;line-height: 48px;text-align: left;  }`
    const style4 = `#slcr_custom_heading_65105bf86c65d{ text-align: left;  }`
    const style5 = `#slcr_custom_heading_65105bf86cbeb{ line-height: 1;text-align: center;  }`
  return (
    <Box sx={{ flexDirection: {lg: 'row',md: 'column', sm: 'column', xs: 'column'}}} className="main-component flex-container vc_row wpb_row vc_row-fluid content-dark data-bg-color-65105bf86c0d2 vc_custom_1556211578092 row-z-index-65105bf86c0d2">
        <style>{style1}</style>
        <style></style>
        <Box sx={{ width:{md: '100%', sm: '100%', xs:'100%'} }} className="wpb_column vc_column_container content-dark vc_col-sm-6 column-z-index-65105bf86c1d8">
            <div className="vc_column-inner vc_custom_1555946720709">
                <div className="wpb_wrapper">
                    <style>{style2}</style>
                    <h6 id="slcr_custom_heading_65105bf86c3af" className="vc_custom_heading sub-heading single font-700">About Us</h6>
                    <style>{style3}</style>
                    <h2 id="slcr_custom_heading_65105bf86c50b" className="vc_custom_heading vc_custom_1555947922134 font-600">Here's what you can know about us</h2>
                    <style>{style4}</style>
                    <p id="slcr_custom_heading_65105bf86c65d" className="vc_custom_heading vc_custom_1555947929938 font-400">At Shimma Hub Co. Ltd, we have made it our mission to transform every space we touch into a spotless and inviting haven. With a commitment to excellence and a passion for cleanliness, we've been serving our clientele base to satisfaction. 
                    </p>
                    <div className="text_link_wrap  text-underline font-600" data-display-type="inline"> 
                        <Link to="/about" className="text_link" > 
                            <span className="inner-link slcr_custom_textlink_inner_65105bf86c68e"> Learn more about company</span> 
                        </Link>
                </div>
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
    <Box sx={{ width:{lg: '45%', md: '100%', sm: '100%', xs:'100%'} }} className="wpb_column vc_column_container content-dark vc_col-sm-5 column-z-index-65105bf86c80d">
        <div className="vc_column-inner ">
            <div className="wpb_wrapper">
                <div className="vc_empty_space  visible-xs" style={{height: "165px"}}>
                    <span className="vc_empty_space_inner"></span>
                </div>
                <img style={{ height: "28rem" }} src={about} alt='Graphs' />
            </div>
        </div>
    </Box>
    </Box>
  )
}
export default AboutUs