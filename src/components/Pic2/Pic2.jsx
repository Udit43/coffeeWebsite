import Pic1 from "../Pic1/Pic1";
import Pic3 from "../Pic3/Pic3";
import "./pic2.css"
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link"

export default function Pic2() {

  const [showPic1, setShowPic1] = useState(false);
  const [showPic3, setShowPic3] = useState(false);

  const handlePic1Click = () => {
    setShowPic1(true);
  };

  const handlePic3Click = () => {
    setShowPic3(true);
  };

  return (
    <>
      {showPic1 ? (
        <Pic1 />
      ) : showPic3 ? (
        <Pic3 />
      ) : (
        <div className="pic2">
          <div className="opaPic2">

            <div className="pic2Box">
              <div className="arrowLeftPic2" onClick= {handlePic1Click}>
                <i className="leftPic2 fa-solid fa-angle-left"></i>
              </div>
              <div className="middleBoxPic2">

                <div className="middleBoxItem1Pic2">
                  Cafe & Restaurant
                </div>
                <div className="middleBoxItem2Pic2">
                  CAPPUCCINO
                </div>
                <div className="middleBoxItem3Pic2">
                  THE BEST COFFEE IN LONDON
                </div>
                <div className="middleBoxItem4Pic2">
                  <Link className="item4Button1LinkPic2" to={"#about"} smooth><button className="item4Button1Pic2">MORE ABOUT US</button></Link>
                  <Link className="item4Button2LinkPic2" to="/Reservation"><button className="item4Button2Pic2">RESERVE A TABLE!</button></Link>
                </div>

              </div>
              <div className="arrowRightPic2" onClick= {handlePic3Click}>
                <i className="rightPic2 fa-solid fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
