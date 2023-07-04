import "./bookaTable.css"

export default function BookaTable() {
    return (
        <div className="bookaTable">
            <div className="bookaTableBigBox">
                <div className="bookaTableLeftBox">
                    <div className="bookaTableLeftBoxItem1">
                        Need a reservation?
                    </div>
                    <div className="bookaTableLeftBoxItem2">
                        BOOK A TABLE
                    </div>
                    <div className="bookaTableLeftBoxItem3"></div>
                    <form action="" className="bookaTableLeftBoxItem4">
                        <input type="text" id="fname" name="fname" className="bookaTableInput1" placeholder="Enter your name"></input>
                        <input type="tel" id="phone" name="phone" placeholder="Phone number" className="bookaTableInput2"></input>
                        <div className="bookaTableInput7">
                            <select name="cars" id="cars" className="bookaTableInput3">
                                <option value="volvo">9:00</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                            <select name="cars" id="cars" className="bookaTableInput6">
                                <option value="volvo">Number of guests</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        {/* <input type="email" id="email" name="email" placeholder="Email address" className="bookaTableInput3"></input> */}
                        <textarea id="w3review" name="w3review" placeholder="Enter message..." className="bookaTableInput4"></textarea>
                        <button className="bookaTableInput5">SUBMIT</button>
                    </form>
                </div>

                <div className="bookaTableRightBox">
                    <div className="bookaTableRightBoxImgaeDiv">
                        <div className="bookaTableRightBoxImage1">
                            <div className="bookaTableRightBoxImage1_1"></div>
                        </div>
                        <div className="bookaTableRightBoxImage2">
                            <div className="bookaTableRightBoxImage2_1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
