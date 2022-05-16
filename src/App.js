import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import About from "./component/About";
import Footer from "./component/footer/Footer";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";
import ShowAPIData from "./component/data/ShowAPIData"
import Multistepform from "./component/multistepform/Multistepform";

function App() {
  let title = "TextUtils";
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
          <Route path="/" element={<Textform title={title}/>}></Route>          
          <Route path="/about" element={<About/>}></Route>  
          <Route path="/ShowAPIData" element={<ShowAPIData/>}></Route>   
          <Route path="/Multistepform" element={<Multistepform/>}></Route>  
    </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
