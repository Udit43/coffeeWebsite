import "./commonImage.css"

export default function CommonImage(props) {
    return (
        <div className="commonImage" style={{ backgroundImage: `url(${props.link})`}}>        
            <div className="commonImageColor">
                <div className="commonTopImageBox">
                    <div className="commonTopImageBoxItem1">
                        {props.text}
                    </div>
                    <div className="commonTopImageBoxItem2">
                        {props.text1}
                    </div>
                </div>
            </div>
        </div>
    )
}
