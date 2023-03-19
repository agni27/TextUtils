import React, { useState } from 'react'

export default function TextFrom(props) {
  const[text,setText]=useState("");
  // setText("Enter your text here...");
  const handleuppercase=()=>{
    // console.log('Upper case button was clicked...'+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success")
  }
  const handleOnChange=(event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }
  const handlelowercase=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success")
  }
  const handleclear=()=>{
    let newText= "";
    setText(newText);
    props.showAlert("Cleared!","success")
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
    props.showAlert("Copied to clipboard!","success")
}
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra spaces removed, Boss!","success")
}

  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}> 
    {/* container used to center the div */}
      <h2>{props.heading}</h2>
<div className="mb-3">
  
  <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#212322':'white',color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} value={text} id="MyBox" rows="12"></textarea>
</div>
<button className="btn btn-primary mx-2 my-1" onClick={handleuppercase}>ToUpperCase</button>
<button className="btn btn-primary mx-2 my-1" onClick={handlelowercase}>ToLowerCase</button>
<button className='btn btn-primary mx-2 my-1' onClick={handleclear}>Clear</button>
<button className='btn btn-primary mx-2 my-1' onClick={handlenumberoftimes}>Find</button>
<button className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy Text</button>
<button className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces}>Delete Extra Spaces</button>
    </div>
    <div className="container my-4" style={{color:props.mode==='light'?'black':'white'}}>
    <div className='find_output'></div>
<h3>Summary of your input</h3>
<p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters....</p>
<p>{(text.split(" ").filter((element)=>{return element.length!==0}).length)*.008} Minutes required to read</p>
<h3>Preview : </h3>
<p>{text.length>0?text:'Enter Something to preview'}</p>
    </div>
</>
  )
}
