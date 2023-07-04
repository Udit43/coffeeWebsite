import "./about.css"


export default function About(props) {
    
  return (
    <div className="about" id="about">
        <div className="aboutBox">
            <div className="aboutBoxItem1">
                {props.text2}    
            </div>
            <div className="aboutBoxItem2">
                {props.text3}
            </div>
            <div className="aboutBoxItem3">
                {props.text4}
            </div>
            <div className="line1"></div>
            <div className="aboutBoxItem4">
                {props.text5}
            </div>
        </div>
    </div>
  )
}
