import "./mailUs.css"
import { HashLink as Link } from "react-router-hash-link"

export default function MailUs() {
    return (
        <div className="mailUs">
            <div className="mailUsBigBox">
                <div className="mailUsLeftBox">
                    <div className="mailUsLeftBoxItem1">
                        Have a question?
                    </div>
                    <div className="mailUsLeftBoxItem2">
                        MAIL US
                    </div>
                    <div className="mailUsLeftBoxItem3"></div>
                    <form action="" className="mailUsLeftBoxItem4">
                        <input type="text" id="fname" name="fname" className="mailUsInput1" placeholder="Enter your name"></input>
                        <input type="tel" id="phone" name="phone" placeholder="Phone number" className="mailUsInput2"></input>
                        <input type="email" id="email" name="email" placeholder="Email address" className="mailUsInput3"></input>
                        <textarea id="w3review" name="w3review" placeholder="Enter message..." className="mailUsInput4"></textarea>
                        <button className="mailUsInput5">SUBMIT</button>
                    </form>
                </div>
                <div className="mailUsRightBox">
                    <div className="mailUsRightBoxImgaeDiv">
                        <div className="mailUsRightBoxGradient">
                            <div className="mailUsRightBoxItem1">NEED A TABLE?</div>
                            <div className="mailUsRightBoxItem2">MAKE YOUR RESERVATION ONLINE!</div>
                            <Link className="mailUsRightBoxItem3Link" to="/Reservation"><button className="mailUsRightBoxItem3">RESERVE NOW!</button></Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
