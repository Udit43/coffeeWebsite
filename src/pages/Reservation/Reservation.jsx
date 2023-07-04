import BookaTable from "../../components/BookaTable/BookaTable"
import CommonImage from "../../components/CommonImage/CommonImage"
import Footer from "../../components/Footer/Footer"
import Sidebar from "../../components/Sidebar/Sidebar"
import "./reservation.css"

export default function Reservation() {
    return (
        <div className="reservation">
            <div className="sidebar">
                <Sidebar/>
            </div>

            <div className="parent">
                <CommonImage text1="RESERVATIONS" text="EASY TIMES CAFE & RESTAURANT" link="https://uploads-ssl.webflow.com/559f85c38bde14cf4b3723cf/55d5b56db4ce9258656a0c3a_Photo-1.jpg" />
                <BookaTable />
                <Footer/>
            </div>
        </div>
    )
}
