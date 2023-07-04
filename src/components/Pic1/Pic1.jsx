import "./pic1.css"
import { HashLink as Link } from "react-router-hash-link"
import React , {useState} from "react";
import Pic2 from "../Pic2/Pic2";
import Pic3 from "../Pic3/Pic3";

export default function Pic1() {

  const [showPic3, setShowPic3] = useState(false);
  const [showPic2, setShowPic2] = useState(false);

  const handlePic3Click = () => {
    setShowPic3(true);
  };

  const handlePic2Click = () => {
    setShowPic2(true);
  };



  return (
  <>
    {showPic3 ? (
        <Pic3/>
        ) : showPic2 ? (
        <Pic2/>
      ) : (
    <div className="pic1" id="pic1">
      <div className="opa">

        <div className="pic1Box">
          <div className="arrowLeft" onClick= {handlePic3Click}>
            <i className="left fa-solid fa-angle-left"></i>
          </div>
          <div className="middleBox">

            <div className="middleBoxItem1">
              Cafe & Restaurant
            </div>
            <div className="middleBoxItem2">
              WELCOME!
            </div>
            <div className="middleBoxItem3">
              THE BEST COFFEE IN LONDON
            </div>
            <div className="middleBoxItem4">
              <Link className="item4Button1Link" to={"#about"} smooth><button className="item4Button1">MORE ABOUT US</button></Link>
              <Link className="item4Button2Link" to="/Reservation"><button className="item4Button2">RESERVE A TABLE!</button></Link>
            </div>

          </div>
          <div className="arrowRight" onClick= {handlePic2Click}>
            <i className="right fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  )
}
