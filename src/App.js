// import Main from "./pages/Main/Main";
import { Route,  Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs"
import Main from "./pages/Main/Main"
import Menu from "./pages/Menu/Menu";
import Gallery from "./pages/Gallery/Gallery";
import PartiesEvents from "./pages/PartiesEvents/PartiesEvents";
import "./App.css"
import ContactUs from "./pages/ContactUs/ContactUs";
import Blog from "./pages/Blog/Blog";
import Reservation from "./pages/Reservation/Reservation";

function App() {
  return (
  
    <>
      <Routes>
        <Route exact path="/" Component={Main} />
        <Route path="/AboutUs" Component={AboutUs} />
        <Route path="/Menu" Component={Menu} />
        <Route path="/Gallery" Component={Gallery} />
        <Route path="/PartiesEvents" Component={PartiesEvents} />
        <Route path="/ContactUs" Component={ContactUs} />
        <Route path="/Blog" Component={Blog} />
        <Route path="/Reservation" Component={Reservation} />
      </Routes>
    </>






    // <div className="App">
    //   <Main/>
    // </div>
  );
}

export default App;
