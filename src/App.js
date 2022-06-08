import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import Create from "./component/data/Create";
import ProdudctList from "./component/data/ProdudctList";
import ShowAPIData from "./component/data/ShowAPIData";
import Footer from "./component/footer/Footer";
import Multistepform from "./component/multistepform/Multistepform";
import Navbar from "./component/Navbar";
import Textform from "./component/Textform";

function App() {
  let title = "TextUtils";
  return (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Textform title={title} />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/ShowAPIData" element={<ShowAPIData />}></Route>
            <Route path="/Multistepform" element={<Multistepform />}></Route>
            <Route path="/ProdudctList" element={<ProdudctList />}></Route>
            <Route path="/Create" element={<Create />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
  );
}
export default App;
