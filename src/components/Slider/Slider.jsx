import "./slider.css"
import React from "react"
import ReactDOM from "react-dom"
// import Carousel from "react-responsive-carousel"
// import Carousel from "react-elastic-carousel"
import Pic1 from "../Pic1/Pic1"
import Pic2 from "../Pic2/Pic2"
import Pic3 from "../Pic3/Pic3"


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 1, itemsToShow: 2 },
    { width: 1, itemsToShow: 3 },
]

export default function Slider() {
    return (
        <div className="slider">
            <Carousel breakPoints={breakPoints}>
                <Pic1 />
                <Pic2 />
                <Pic3 />
            </Carousel>
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Slider />, rootElement);
