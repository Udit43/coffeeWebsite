import "./sidebar.css"
import { NavLink } from "react-router-dom"

export default function Sidebar() {
return (
    <div className="sidebar">
        <div className="sidebarItem">
            <div className="sidebarItemHead">
                <div className="sidebarItemHead1">
                    <i className="hotcup fa-solid fa-mug-hot"></i>
                </div>
                <div className="sidebarItemHead2">
                    EASY TIMES
                </div>
                <div className="sidebarItemHead3">
                    CAFE & RESTAURANT
                </div>
            </div>

            <div className="line2"></div>

            <div className="list">
                <ul className="listItem">
                    <li className="listItem1"><NavLink className="a1" to={"/"}>HOME</NavLink></li>
                    <li className="listItem1"><NavLink className="a1" to={"/AboutUs"}>ABOUT US</NavLink></li>
                    <li className="listItem1"><NavLink className="a1" to={"/Menu"}>MENU</NavLink></li>
                    <li className="listItem1"><NavLink className="a1" to={"/Gallery"}>GALLERY</NavLink></li>
                    <li className="listItem1"><NavLink className="a1" to={"/PartiesEvents"}>PARTIES & EVENTS</NavLink></li>
                    <li className="listItem1"><NavLink className="a1" to={"/Blog"}>BLOG</NavLink></li>
                    <li className="listItem1"><NavLink className="a1" to={"/ContactUs"}>CONTACT US</NavLink></li>
                    <li className="listItem1"><NavLink className="a1" to={"/Reservation"}>RESERVATION</NavLink></li>
                </ul>                
            </div>
            <div className="afterList">
                <div className="line3"></div>
            </div>
            <div className="socialMedia">
                <i className="socialMedia1 socialMedia2 fa-brands fa-facebook-f"></i>
                <i className="socialMedia1 fa-brands fa-twitter"></i>
                <i className="socialMedia1 fa-brands fa-instagram"></i>
                <i className="socialMedia1 fa-solid fa-message"></i>
            </div>

            <div className="copy">
                Copyright <span>&nbsp; &copy; &nbsp;</span> Restaurant 
            </div>

        </div>
    </div>
)
}
