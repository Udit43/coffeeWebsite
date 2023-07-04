import "./lunch.css"
import { NavLink } from "react-router-dom"
import React , {useState} from "react";
import OurMenu from "../OurMenu/OurMenu";
import EveryDaySpecial from "../EveryDaySpecial/EveryDaySpecial";

export default function Lunch() {

    const [showCoffee, setShowCoffee] = useState(false);
    const [showLunch2, setShowLunch2] = useState(false);

    const handleCoffeeClick = () => {
        setShowCoffee(true);
    };

    const handleLunch2Click = () => {
        setShowLunch2(true);
    };

    return (
        <>
            {showCoffee ? (
            <OurMenu />
            ) : showLunch2 ? (
            <EveryDaySpecial/>
            ) : (
            <div className="lunch">
                <div className="lunchBigBox">
                    <div className="lunchMenuItem1">
                        OUR MENU
                    </div>
                    <div className="lunchMenuItem2">
                        THESE OUR ARE SPECIALS:
                    </div>
                    <div className="bigButtonBox">
                        <div className="buttonContainer">
                            <button className="buttonContainerButton1" onClick= {handleCoffeeClick}>COFFEE</button>
                            <button className="buttonContainerButton2"><naver2 className="buttonContainerButton1naver2"><NavLink className="buttonContainerButton1navlink2" to={""}>LUNCH</NavLink></naver2></button>
                            <button className="buttonContainerButton3" onClick={handleLunch2Click}>EVERY DAY SPECIALS</button>
                        </div>
                    </div>
                    <div className="transparentLunchBox">

                        <div className="transparentBox1">
                            <div className="transparentLeft">
                            <div className="transparentLeft1">
                                <div className="transparentLeft1_1">Single Cup Brew</div>
                                <div className="transparentLeft1_2">Lorem ipsum dolor sit amet r rginrig rrgnrgn.</div>
                            </div>
                            <div className="transparentLeft2">
                                <div className="transparentLeft2_1">6.50</div>
                            </div>
                            </div>
                            <div className="transparentRight">
                            <div className="transparentLeft1">
                                <div className="transparentLeft1_1">Black Eyed Andy</div>
                                <div className="transparentLeft1_2">Lorem ipsum dolor sit amet r rginrig rrgnrgn.</div>
                            </div>
                            <div className="transparentLeft2">
                                <div className="transparentLeft2_1">6.50</div>
                            </div>
                            </div>
                        </div>

                        <div className="transparentBox2">
                            <div className="transparentLeft">
                            <div className="transparentLeft1">
                                <div className="transparentLeft1_1">Cuban Shot</div>
                                <div className="transparentLeft1_2">Lorem ipsum dolor sit amet r rginrig rrgnrgn.</div>
                            </div>
                            <div className="transparentLeft2">
                                <div className="transparentLeft2_1">6.50</div>
                            </div>
                            </div>
                            <div className="transparentRight">
                            <div className="transparentLeft1">
                                <div className="transparentLeft1_1">Single Cup Brew</div>
                                <div className="transparentLeft1_2">Lorem ipsum dolor sit amet r rginrig rrgnrgn.</div>
                            </div>
                            <div className="transparentLeft2">
                                <div className="transparentLeft2_1">6.50</div>
                            </div>
                            </div>
                        </div>
                    </div>
                        
                    <div className="transparentFooter">
                    <button className="footerButton">VIEW OUR COMPLETE MENU</button>
                    </div>

                </div>
            </div>
        )}
        </>
    )
}
