// import logo from './logo.svg';
// import './App.css';

// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextForm";
import React,{useState} from "react";
import Alert from "./components/Alert";





function App() {
  const[alert,setAlert]=useState(null); 
  const showAlert=(message,type)=>{
     setAlert({
      msg: message,
      type: type
     })
     setTimeout(()=>{
      setAlert(null)
     },1500);
  }
  const[mode,setMode]=useState('light');
   const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#212322';
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils-Home(Dark Mode)"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils-Home"
    }
   }
  return (
    <>
  
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-2">  
    <TextFrom showAlert={showAlert} heading="Enter the text to analyze: " mode={mode}/>
   </div>
 {/* <About/> */}
    </>
  );
}

export default App;
