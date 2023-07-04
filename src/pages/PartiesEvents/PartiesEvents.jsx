import About from "../../components/About/About"
import CommonImage from "../../components/CommonImage/CommonImage"
import Footer from "../../components/Footer/Footer"
import Img1PartiesAndEvents from "../../components/Img1PartiesAndEvents/Img1PartiesAndEvents"
import Sidebar from "../../components/Sidebar/Sidebar"
import "./partiesEvents.css"

export default function PartiesEvents() {
  return (
    <div className="partiesEvents">
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="parent">

        <CommonImage text1="WE WILL HOST YOUR PARTIES!" link="https://uploads-ssl.webflow.com/559f85c38bde14cf4b3723cf/56a9c591997a42a0231db01c_person-woman-coffee-cup.jpg" text="PARTIES & EVENTS" />

        <About text2="Got a party in mind?" text3="LET'S PARTY!" text4="CAFE & RESTAURANT" text5="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere." />

        <div className="whitePage">
          <div className="partiesAndEventsBox1">
            <Img1PartiesAndEvents partiesAndEventsRightItem2="MODERN SUSHI" partiesAndEventsRightItem3="WORKSHOP" linkParties="https://c1.wallpaperflare.com/preview/1022/332/869/avocado-cuisine-delicious-dinner.jpg" />
          </div>
          <div className="partiesAndEventsBox2">
            <Img1PartiesAndEvents partiesAndEventsRightItem2="COFFEE COMPANY" partiesAndEventsRightItem3="WORKSHOP" linkParties="https://uploads-ssl.webflow.com/559f85c38bde14cf4b3723cf/55d82b1aa811abde4e36a0d7_Coffee.jpg" />
          </div>
          <div className="partiesAndEventsBox3">
            <Img1PartiesAndEvents partiesAndEventsRightItem2="ALL YOU CAN EAT" partiesAndEventsRightItem3="SPARE-RIBS" linkParties="https://uploads-ssl.webflow.com/559f85c38bde14cf4b3723cf/5e3422456902d69b9c4a59ca_group-of-person-eating-indoors-3184187.jpg" />
          </div>
        </div>

        <Footer />
        
      </div>
      
    </div>
  )
}
