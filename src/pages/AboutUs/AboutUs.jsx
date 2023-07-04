import AboutUsEasyTimes from "../../components/AboutUsEasyTimes/AboutUsEasyTimes"
import CommonImage from "../../components/CommonImage/CommonImage"
import Footer from "../../components/Footer/Footer"
import Sidebar from "../../components/Sidebar/Sidebar"
import VisitUs from "../../components/VisitUs/VisitUs"
import "./aboutUs.css"

export default function AboutUs() {
    return (
        <div className="aboutUs">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="parent">
                <CommonImage text1="EASY TIMES CAFE & RESTAURANT" text="ABOUT US" link="https://uploads-ssl.webflow.com/559f85c38bde14cf4b3723cf/56a9c591997a42a0231db01c_person-woman-coffee-cup.jpg" />
                <AboutUsEasyTimes />
                <VisitUs linkVisitUsLowerLeft="https://uploads-ssl.webflow.com/559f85c38bde14cf4b3723cf/559f86eb8bde14cf4b37245f_Interior-1.jpg" linkVisitUs="https://uploads-ssl.webflow.com/559f85c38bde14cf4b3723cf/56a9c591997a42a0231db01c_person-woman-coffee-cup.jpg" />
                <Footer/>
            </div>
        </div>
    )
}
