import React, { useState } from 'react'
// import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [Text, setText] = useState("Enter the message");

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleOnClick = ()=>{
        let newText = Text.toUpperCase();
        setText(newText);
        props.showalert("converted to uppercase" , "success")
    }

    const handleOnLowClick = ()=>{
        let newText = Text.toLowerCase();
        setText(newText);
        props.showalert("converted to lowercase" , "success")
    }   
    
    const handleClearText = ()=>{
        setText("");
        props.showalert("Text clear" , "success")
    }

    const handleselect =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("copy to clipboard" , "success")
    }

    
    return (
        <>
        
        <div className='container' style={{color:props.mode==="light"?"black":"white"} }>
            <h2 >Enter the Text to emphasize</h2>
            <div className="mb-3">

                <textarea  style={{ backgroundColor:props.mode==='light'?"white":"grey" , color:props.mode==="light"?"black":"white"} }className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary my-3 mx-3' onClick={handleOnClick}>Convert to UpperCase</button>
            <button className='btn btn-primary my-3 mx-3' onClick={handleOnLowClick}>Convert to LowerCase</button>
            <button className='btn btn-primary my-3 mx-3' onClick={handleClearText}>Clear Text</button>
            <button className='btn btn-primary my-3 mx-3' onClick={handleselect}> select </button>
        </div>

        <div className='container my-3'  style={{color:props.mode==="light"?"black":"white"} }>
            <h1>Text Summary</h1>
            <p>{Text.length===0?0:(Text.split(" ").length - ( Text.charAt(Text.length-1)===' '?1:0))} words {Text.length} character</p>
            <h2>Text Preview</h2>
            <p>{Text}</p>
        </div>
        
        </>
    )
}
