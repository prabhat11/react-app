
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';

function App() {
  let title ="TextUtils";
  return (
   
    <>
   <Navbar/>
   <div className="container">
   <Textform title={title}/>
   </div>
   </>
  );
}

export default App;
