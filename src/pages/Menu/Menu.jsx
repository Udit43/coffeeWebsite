import CommonImage from "../../components/CommonImage/CommonImage"
import EverTriedThese from "../../components/EverTriedThese/EverTriedThese"
import Footer from "../../components/Footer/Footer"
import Sidebar from "../../components/Sidebar/Sidebar"
import "./menu.css"

export default function Menu() {
    return (
        <div className="menu">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="parent">
                <CommonImage text1="SELECT MENU BELOW:" text="OUR MENU" link="https://uploads-ssl.webflow.com/559f85c38bde14cf4b3723cf/56a9c591997a42a0231db01c_person-woman-coffee-cup.jpg" />
                <EverTriedThese/>
                <Footer/>
            </div>
        </div>
    )
}
