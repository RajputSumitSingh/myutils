import React, { useState } from 'react';
// import PropTypes from 'prop-types';


export default function Form(props) {
    const handleOnChange= (event)=>{
        // console.log("upper case was clicked" + text);
        setText(event.target.value);
    }
    const handleUpClick= ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted into Upper Case", "success");
    }
    const handleLoClick= ()=>{
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Text converted into lower case", "success");
    }

    const handleClear = ()=>{
        let newText = " ";
        setText(newText);
        props.showAlert("all Text are Cleared", "danger");
    }

    const handleCopy = ()=>{
        let text = document.getElementById('Textarea1');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text have been coppied", "success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed all the extra Spaces", "success");
    }




    const [text,setText] = useState('');
  return (
    <>

    <div className="container my-3" style={props.toggleMode === "light"?{color : "black"}:{color:"white"}}>
        {/* <h1>HEADING IS : {text}</h1> */}
    <div className="form-group ">
        <label htmlFor="Textarea1">Example textarea</label>
        <textarea className="form-control" id="Textarea1"  style={props.toggleMode === "light"?{color : "black"}:{color:"black",backgroundColor:"grey"}} rows="6" value={text} onChange={handleOnChange}></textarea>
        <button onClick={handleUpClick} className="btn btn-primary mx-2 my-2">ChangeUpCase</button>
        <button onClick={handleLoClick} className="btn btn-primary mx-2 my-2">ChangeLoCase</button>
        <button onClick={handleClear} className="btn btn-primary mx-2 my-2">Clear</button>
        <button onClick={handleCopy} className="btn btn-primary mx-2 my-2">Text Copy</button>
        <button onClick={handleExtraSpaces} className="btn btn-primary mx-2 my-2">Remove Extra Space</button>
    </div>
    </div>

    {/* we will write the HEADING */}

    <div className="container" style={props.toggleMode === "light"?{color : "black"}:{color:"white"}} >

        <h1>Your text SUMMARY</h1>
        <p>TEXT COUNT : {text.length}</p>
        <p>WORD COUNT : {text.split(" ").length-1}</p>
    </div>

    </>
  )
}