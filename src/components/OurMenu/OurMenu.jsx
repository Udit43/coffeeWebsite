import "./ourMenu.css"
import React , {useState} from "react";
import Lunch from "../Lunch/Lunch";
// import Lunch2 from "../Lunch2/Lunch2";
import { NavLink } from "react-router-dom"
import EveryDaySpecial from "../EveryDaySpecial/EveryDaySpecial";


export default function OurMenu() {  

  const [showLunch, setShowLunch] = useState(false);
  const [showLunch2, setShowLunch2] = useState(false);

  const handleLunchClick = () => {
    setShowLunch(true);
  };

  const handleLunch2Click = () => {
    setShowLunch2(true);
  };

  return (
    <>
      {showLunch ? (
        <Lunch />
        ) : showLunch2 ? (
        <EveryDaySpecial />
      ) : (
        <div className="ourMenu">
          <div className="ourMenuBigBox">
            <div className="ourMenuItem1">
              OUR MENU
            </div>
            <div className="ourMenuItem2">
              THESE OUR ARE SPECIALS:
            </div>
            <div className="bigButtonBox">
              <div className="buttonContainer">
                <button className="buttonContainerButton1" ><naver className="buttonContainerButton1naver"><NavLink className="buttonContainerButton1navlink" to={""}>COFFEE</NavLink></naver></button>
                <button className="buttonContainerButton2" onClick= {handleLunchClick}>LUNCH</button>
                <button className="buttonContainerButton3" onClick={handleLunch2Click}  >EVERY DAY SPECIALS</button>
            
              </div>
            </div>
            <div>
            </div>
            <div className="transparentBox">

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
          
              <div className="transparentBox4">
                <div className="transparentLeft">
                  <div className="transparentLeft1">
                    <div className="transparentLeft1_1">Caffe Americano</div>
                    <div className="transparentLeft1_2">Lorem ipsum dolor sit amet r rginrig rrgnrgn.</div>
                  </div>
                  <div className="transparentLeft2">
                    <div className="transparentLeft2_1">6.50</div>
                  </div>
                </div>
                <div className="transparentRight">
                  <div className="transparentLeft1">
                    <div className="transparentLeft1_1">Single Cup Brew gtgt</div>
                    <div className="transparentLeft1_2">Lorem ipsum dolor sit amet r rginrig rrgnrgn.</div>
                  </div>
                  <div className="transparentLeft2">
                    <div className="transparentLeft2_1">6.50</div>
                  </div>
                </div>
              </div>

              <div className="transparentBox5">
                <div className="transparentLeft">
                  <div className="transparentLeft1">
                    <div className="transparentLeft1_1">Cafe Latte</div>
                    <div className="transparentLeft1_2">Lorem ipsum dolor sit amet r rginrig rrgnrgn.</div>
                  </div>
                  <div className="transparentLeft2">
                    <div className="transparentLeft2_1">6.50</div>
                  </div>
                </div>
                <div className="transparentRight">
                  <div className="transparentLeft1">
                    <div className="transparentLeft1_1">Single Cup Brew hmm</div>
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








