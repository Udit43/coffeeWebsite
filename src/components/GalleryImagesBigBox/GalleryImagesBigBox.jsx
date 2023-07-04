import "./galleryImagesBigBox.css"

export default function GalleryImagesBigBox() {
    return (
        <div className="galleryImagesBigBox">
            <div className="imageBigBox">

                <div className="imageBoxLeft">
                    <div className="imageBoxUpperLeft">
                        <div className="imageBox1Left">
                            <div className="image1Box1Left"></div>
                            <div className="image2Box1Left"></div>
                        </div>
                        <div className="imageBox2Left">
                            <div className="image1Box2Left"></div>
                            <div className="image2Box2Left"></div>
                        </div>
                    </div>
                    <div className="imageBoxDownLeft">
                        <div className="imageBoxDownLeft1"></div>
                    </div>
                </div>
                
                <div className="imageBoxRight">
                    <div className="imageBoxUpperRight">
                        <div className="imageBoxDownRight1"></div>
                    </div>
                    <div className="imageBoxDownRight">
                        <div className="imageBox1Right">
                            <div className="image1Box1Right"></div>
                            <div className="image2Box1Right"></div>
                        </div>
                        <div className="imageBox2Right">
                            <div className="image1Box2Right"></div>
                            <div className="image2Box2Right"><div className="innerBox"></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
