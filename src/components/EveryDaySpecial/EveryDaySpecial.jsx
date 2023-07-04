import "./everyDaySpecial.css"
import { NavLink } from "react-router-dom"
import React , {useState} from "react";
import OurMenu from "../OurMenu/OurMenu";
import Lunch from "../Lunch/Lunch";

export default function EveryDaySpecial() {

    const [showCoffee, setShowCoffee] = useState(false);
    const [showLunch, setShowLunch] = useState(false);

    const handleCoffeeClick = () => {
        setShowCoffee(true);
    };

    const handleLunchClick = () => {
        setShowLunch(true);
    };

    return (
            <>
            {showCoffee ? (
                <OurMenu />
            ) : showLunch ? (
                <Lunch />
            ) : (
                <div className='everyDaySpecial'>
                    <div className="everyDaySpecialBigBox">
                        <div className="everyDaySpecialMenuItem1">
                            OUR MENU
                        </div>
                        <div className="everyDaySpecialMenuItem2">
                            THESE OUR ARE SPECIALS:
                        </div>
                        <div className="bigButtonBox">
                            <div className="buttonContainer">
                                <button className="buttonContainerButton1" onClick={handleCoffeeClick}>COFFEE</button>
                                <button className="buttonContainerButton2" onClick={handleLunchClick}>LUNCH</button>
                                <button className="buttonContainerButton3"><naver3 className="buttonContainerButton1naver3"><NavLink className="buttonContainerButton1navlink3" to={""}>EVERY DAY SPECIALS</NavLink></naver3></button>
                            </div>
                        </div>
                        <div className="transparentEveryDaySpecialBox">

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

                            <div className="transparentBox3">
                                <div className="transparentLeft">
                                    <div className="transparentLeft1">
                                        <div className="transparentLeft1_1">Coffee Of The Day</div>
                                        <div className="transparentLeft1_2">Lorem ipsum dolor sit amet r rginrig rrgnrgn.</div>
                                    </div>
                                    <div className="transparentLeft2">
                                        <div className="transparentLeft2_1">6.50</div>
                                    </div>
                                </div>
                                <div className="transparentRight">
                                    <div className="transparentLeft1">
                                        <div className="transparentLeft1_1">Single Cup Brew t</div>
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
