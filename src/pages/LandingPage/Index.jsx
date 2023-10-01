import Layout from "../../components/Layout"
import BriefIntro from "../BriefIntro/Index"
import AboutUs from "../AboutUs/Index"
import Mission from "../Mission/Index"
import Vision from "../Vision/Index"
import HowItWorks from "../HowItWorks/Index"
import Services from "../Services/Index"
import WhyChooseUs from "../WhyChooseUs/Index"

const Index = () => {

  return (
    <Layout>
        <BriefIntro />
        <Mission />
        <Vision />
        <AboutUs />
        <HowItWorks />
        <Services />
        <WhyChooseUs />
    </Layout>
  )
}
export default Index