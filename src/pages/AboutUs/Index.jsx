import { Link } from "react-router-dom"

const AboutUs = () => {
    const style1 = `.slcr_custom_textlink_inner_65105bf86c68e{  font-size: 15px !important; }`
    const style2 = `#slcr_custom_heading_65105bf86c3af{ font-size: 13px;text-align: left;  letter-spacing: 1px; }`
    const style3 = `#slcr_custom_heading_65105bf86c50b{ font-size: 36px;line-height: 48px;text-align: left;  }`
    const style4 = `#slcr_custom_heading_65105bf86c65d{ text-align: left;  }`
    const style5 = `#slcr_custom_heading_65105bf86cbeb{ line-height: 1;text-align: center;  }`
  return (
    <div className="main-component vc_row wpb_row vc_row-fluid content-dark data-bg-color-65105bf86c0d2 vc_custom_1556211578092 row-z-index-65105bf86c0d2">
        <style>{style1}</style>
        <style></style>
        <div className="wpb_column vc_column_container content-dark vc_col-sm-6 column-z-index-65105bf86c1d8">
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
    </div>
    <style></style>
    <div className="wpb_column vc_column_container content-dark vc_col-sm-1 column-z-index-65105bf86c74d">
        <div className="vc_column-inner ">
            <div className="wpb_wrapper"></div>
        </div>
    </div>
    {/* <style>.slcr_box_image_css_65105bf86ca52{   }</style> */}
    <style></style>
    <div className="wpb_column vc_column_container content-dark vc_col-sm-5 column-z-index-65105bf86c80d">
        <div className="vc_column-inner ">
            <div className="wpb_wrapper">
                <div className="vc_empty_space  visible-xs" style={{height: "165px"}}>
                    <span className="vc_empty_space_inner"></span>
                </div>
                {/* <div className="boxes box-3 box-rounded bg-default   vc_custom_1555951220182  slcr_box_image_css_65105bf86ca52">
                    <div className="inner text-left">
                        <style>{style5}</style>
                        <h4 id="slcr_custom_heading_65105bf86cbeb" className="vc_custom_heading vc_custom_1555951001524 font-600">Book a Service</h4>
                        <div role="form" className="wpcf7" id="wpcf7-f56-p10-o1" lang="en-US" dir="ltr">
                            <div className="screen-reader-response"></div>
                            <form action="/themes/moppers-version-2/#wpcf7-f56-p10-o1" method="post" className="wpcf7-form" novalidate="novalidate">
                                <div style={{display: "none"}}> 
                                    <input type="hidden" name="_wpcf7" value="56" /> 
                                    <input type="hidden" name="_wpcf7_version" value="5.1.7" /> 
                                    <input type="hidden" name="_wpcf7_locale" value="en_US" /> 
                                    <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f56-p10-o1" /> 
                                    <input type="hidden" name="_wpcf7_container_post" value="10" />
                                </div>
                                <p>
                                    <label> Your Name </label><br /> 
                                    <span className="wpcf7-form-control-wrap your-name">
                                        <input type="text" name="your-name" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" />
                                    </span>
                                </p>
                                <p>
                                    <label> Phone Number </label><br /> 
                                    <span className="wpcf7-form-control-wrap your-email">
                                        <input type="email" name="your-email" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" />
                                    </span>
                                </p>
                                <p>
                                    <label> ZIP Code</label><br /> 
                                    <span className="wpcf7-form-control-wrap your-zip">
                                        <input type="text" name="your-zip" value="" size="40" className="wpcf7-form-control wpcf7-text" aria-invalid="false" />
                                    </span>
                                </p>
                                <p>
                                    <label>Choose a Service</label><br /> 
                                    <span className="wpcf7-form-control-wrap your-service">
                                        <select name="your-service" className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required" aria-required="true" aria-invalid="false">
                                            <option value="Residential Cleaning">Residential Cleaning</option>
                                            <option value="Commercial Cleaning">Commercial Cleaning</option>
                                            <option value="Construction Cleaning">Construction Cleaning</option>
                                            <option value="Windows Cleaning">Windows Cleaning</option>
                                        </select>
                                    </span>
                                </p>
                                <p>
                                    <input type="submit" value="Submit Details" className="wpcf7-form-control wpcf7-submit btn--primary btn-submit" />
                                    <span className="ajax-loader"></span>
                                </p>
                                <div className="wpcf7-response-output wpcf7-display-none"></div>
                            </form>
                        </div>
                    </div>
                </div> */}
                {/* <img src={mission} alt='Mission' /> */}
            </div>
        </div>
    </div>
    </div>
  )
}
export default AboutUs