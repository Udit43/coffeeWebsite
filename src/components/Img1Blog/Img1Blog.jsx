import "./img1Blog.css"

export default function Img1Blog(props) {
    return (
        <div className="img1Blog">
            <div className="img1BlogLeftBox">
                <div className="imageBlogLeftBox" style={{ backgroundImage: `url(${props.linkImg1Blog})` }}>
                    <div className="colorBox"></div>
                </div>
            </div>
            <div className="img1BlogRightBox">
                <div className="img1BlogRightBoxItem1">{props.BlogRightBoxItem1Text}</div>
                <div className="img1BlogRightBoxItem2">{props.BlogRightBoxItem2Text}<br />{props.BlogRightBoxItem2_1Text}</div>
                <div className="img1BlogRightBoxItem3"></div>
                <div className="img1BlogRightBoxItem4">{props.BlogRightBoxItem4Text}</div>
                <button className="img1BlogRightBoxItem5">READ MORE</button>
            </div>
        </div>
    )
}
