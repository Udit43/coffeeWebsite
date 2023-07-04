import About from "../../components/About/About"
import Footer from "../../components/Footer/Footer"
import MenuSection from "../../components/MenuSection/MenuSection"
import OurMenu from "../../components/OurMenu/OurMenu"
import Pic1 from "../../components/Pic1/Pic1"
import Sidebar from "../../components/Sidebar/Sidebar"
import Tasteful from "../../components/Tasteful/Tasteful"
import "./main.css"

export default function Main() {
    return (
        <div className="main">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="parent">
                <Pic1 />
                <About text2="Welcome" text3="ABOUT US" text4="CAFE & RESTAURANT" text5="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere." />
                <MenuSection/>
                <OurMenu />
                <Tasteful/>
                <Footer/>
            </div>
        </div>
    )
}
