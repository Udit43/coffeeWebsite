import CommonImage from "../../components/CommonImage/CommonImage"
import Footer from "../../components/Footer/Footer"
import MailUs from "../../components/MailUs/MailUs"
import Sidebar from "../../components/Sidebar/Sidebar"
import VisitUs from "../../components/VisitUs/VisitUs"
import "./contactUs.css"

export default function ContactUs() {
    return (
        <div className="contactUs">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="parent">
                <CommonImage text1="EASY TIMES CAFE & RESTAURANT" text="CONTACT US" link="https://uploads-ssl.webflow.com/559f85c38bde14cf4b3723cf/55d82b1aa811abde4e36a0d7_Coffee.jpg" />
                <MailUs/>
                <VisitUs linkVisitUs="" linkVisitUsLowerLeft="https://uploads-ssl.webflow.com/559f85c38bde14cf4b3723cf/559f86eb8bde14cf4b37245f_Interior-1.jpg" />
                <Footer/>
            </div>
        </div>
    )
}
