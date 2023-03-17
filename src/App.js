// import logo from './logo.svg';
// import './App.css';

// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextForm";


function App() {
  return (
    <>
   <Navbar title="TextUtils"/>
   <div className="container my-2">
    <TextFrom heading="Enter the text to analyze: "/>
   </div>
   {/* <About/> */}
    </>
  );
}

export default App;
