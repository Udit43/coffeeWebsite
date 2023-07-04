import "./visitUs.css"

export default function VisitUs(props) {
    return (
        <div className="visitUs">
            <div className="visitUsBigBox">
                <div className="visitUsUpperBox">
                    <div className="visitUsUpperLeftBox">
                        <div className="visitUsUpperLeftBoxItem1">Our Location</div>
                        <div className="visitUsUpperLeftBoxItem2">VISIT US!</div>
                        <div className="visitUsUpperLeftBoxItem3"></div>
                        <div className="visitUsUpperLeftBoxItem4">We are located next to Green House Club.<br/>60 Chalton St, London<br/>NW1 1HS, United Kingdom</div>
                    </div>
                    <div className="visitUsUpperRightBox" style={{ backgroundImage: `url(${props.linkVisitUs})`}}></div>
                </div>
                <div className="visitUsLowerBox">
                    <div className="visitUsLowerLeftBox" style={{ backgroundImage: `url(${props.linkVisitUsLowerLeft})`}}></div>
                    <div className="visitUsLowerRightBox">
                        <div className="visitUsLowerRightBoxItem1">Have a question?</div>
                        <div className="visitUsLowerRightBoxItem2">CONTACT US</div>
                        <div className="visitUsLowerRightBoxItem3"></div>
                        <div className="visitUsLowerRightBoxItem4">
                            <div className="visitUsLowerRightBoxItem4CallUsItems">
                                <div className="visitUsLowerRightBoxItem4CallUs">Call us</div>
                                <div className="visitUsLowerRightBoxItem4CallUsNumber"> : +32 200 3023 11</div>
                            </div>
                            <div className="visitUsLowerRightBoxItem4MailUsItems">
                                <div className="visitUsLowerRightBoxItem4MailUs">Mail us</div>
                                <div className="visitUsLowerRightBoxItem4MailUsLink">: hello@easytimes.co.uk</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
