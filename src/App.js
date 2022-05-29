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
import ProdudctList from "./component/data/ProdudctList";
import Create from "./component/data/Create";

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
          <Route path="/ProdudctList" element={<ProdudctList/>}></Route>
          <Route path="/Create" element={<Create/>}></Route>
    </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
