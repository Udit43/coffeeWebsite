import "./footer.css"
import { HashLink as Link } from "react-router-hash-link"

export default function Footer() {
  return (
    <div className="footer">
          <Link to={"#pic1"} smooth>
          <div className="rotate">
              <i className="upper fa-solid fa-angle-up"></i>
          </div>
          </Link>
          <div className="bigRow">
              <div className="title1">Copyright &copy;&nbsp;</div>
              <div className="title2">Studio Corvus&nbsp;&nbsp;</div>
              <div className="title3">Powered By&nbsp;</div>
              <div className="title4">Webflow</div>

              <div className="social">
                  <div className="social1 fi">
                       <i className="size fa-brands fa-facebook-f"></i>
                  </div>
                  <div className="social2 fi">
                      <i className="size fa-brands fa-twitter"></i>
                  </div>
                  <div className="social3 fi">
                      <i className="size fa-brands fa-instagram"></i>
                  </div>
                  <div className="social4 fi">
                      <i className="size fa-solid fa-message"></i>
                  </div>
              </div>
          </div>
    </div>
  )
}
