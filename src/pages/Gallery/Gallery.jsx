import CommonImage from "../../components/CommonImage/CommonImage"
import Footer from "../../components/Footer/Footer"
import GalleryImagesBigBox from "../../components/GalleryImagesBigBox/GalleryImagesBigBox"
import Sidebar from "../../components/Sidebar/Sidebar"
import "./gallery.css"

export default function Gallery() {
    return (
        <div className="gallery">

            <div className="sidebar">
                <Sidebar/>
            </div>

            <div className="parent">
                <CommonImage text1="EASY TIMES GALLERY" text="GALLERY" link="https://uploads-ssl.webflow.com/559f85c38bde14cf4b3723cf/55d5b8d8b4ce9258656a0dd5_Beans.jpg" />
                <GalleryImagesBigBox />
                <Footer/>
            </div>

        </div>
    )
}
