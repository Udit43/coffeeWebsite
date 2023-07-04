import CommonImage from "../../components/CommonImage/CommonImage"
import Footer from "../../components/Footer/Footer"
import Img1ContainerBlog from "../../components/Img1ConatinerBlog/Img1ContainerBlog"
import Sidebar from "../../components/Sidebar/Sidebar"
import "./blog.css"

export default function Blog() {
    return (
        <div className='blog'>
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="parent">
                <CommonImage text1="OUR BLOG ARCHIVE" text="NEWS & UPDATES" link="https://uploads-ssl.webflow.com/559f85c38bde14cf4b3723cf/56a9c591997a42a0231db01c_person-woman-coffee-cup.jpg" />
                <Img1ContainerBlog />
                <Footer/>
            </div>
        </div>
    )
}
