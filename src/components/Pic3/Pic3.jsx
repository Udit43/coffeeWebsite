import Pic1 from "../Pic1/Pic1";
import Pic2 from "../Pic2/Pic2";
import "./pic3.css"
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link"

export default function Pic3() {

  const [showPic2, setShowPic2] = useState(false);
  const [showPic1, setShowPic1] = useState(false);

  const handlePic2Click = () => {
    setShowPic2(true);
  };

  const handlePic1Click = () => {
    setShowPic1(true);
  };

  return (
    <>
      {showPic2 ? (
        <Pic2 />
      ) : showPic1 ? (
        <Pic1 />
      ) : (
      <div className="pic3">
        <div className="opaPic3">

          <div className="pic3Box">
            <div className="arrowLeftPic3" onClick= {handlePic2Click}>
              <i className="leftPic3 fa-solid fa-angle-left"></i>
            </div>
            <div className="middleBoxPic3">

              <div className="middleBoxItem1Pic3">
                Cafe & Restaurant
              </div>
              <div className="middleBoxItem2Pic3">
                DINNER FOR 2
              </div>
              <div className="middleBoxItem3Pic3">
                CHEF'S SPECIAL, EVERY FRIDAY
              </div>
              <div className="middleBoxItem4Pic3">
                <Link className="item4Button1LinkPic3" to={"#about"} smooth><button className="item4Button1Pic3">MORE ABOUT US</button></Link>
                <Link className="item4Button2LinkPic3" to="/Reservation"><button className="item4Button2Pic3">RESERVE A TABLE!</button></Link>
              </div>

            </div>
            <div className="arrowRightPic3" onClick= {handlePic1Click}>
              <i className="rightPic3 fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  )
}
