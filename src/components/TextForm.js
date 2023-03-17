import React, { useState } from 'react'

export default function TextFrom(props) {
  const[text,setText]=useState("");
  // setText("Enter your text here...");
  const handleuppercase=()=>{
    // console.log('Upper case button was clicked...'+text);
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }
  const handlelowercase=()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleclear=()=>{
    let newText= "";
    setText(newText);
  }

  const handlenumberoftimes=()=>{
    
    let a=0;
    let req_text=prompt("Give the word to search for");
    
    text.split(" ").forEach(element => {
      if(element===req_text){
        a++;
      }
    });
    alert(a + " Times");
    
  }
  const handleCopy = () => {
    var text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
}
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
}

  return (
    <>
    <div className='container'> 
    {/* container used to center the div */}
      <h2>{props.heading}</h2>
<div className="mb-3">
  
  <textarea className="form-control" onChange={handleOnChange} value={text} id="MyBox" rows="12"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleuppercase}>ToUpperCase</button>
<button className="btn btn-primary mx-2" onClick={handlelowercase}>ToLowerCase</button>
<button className='btn btn-primary mx-2' onClick={handleclear}>Clear</button>
<button className='btn btn-primary mx-2' onClick={handlenumberoftimes}>Find</button>
<button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
<button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Delete Extra Spaces</button>
    </div>
    <div className="container my-4">
    <div className='find_output'></div>
<h3>Summary of your input</h3>
<p>{text.split(" ").length-1} words and {text.length} characters....</p>
<p>{(text.split(" ").length-1)*.008} Minutes required to read</p>
<h3>Preview : </h3>
<p>{text}</p>
    </div>
</>
  )
}
