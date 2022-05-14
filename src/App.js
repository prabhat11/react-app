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


function App() {
  let title = "TextUtils";
  return (
    <div>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
  
          <Route path="/" element={<Textform title={title}/>}></Route>          
          <Route path="/about" element={<About/>}></Route>         
   
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
