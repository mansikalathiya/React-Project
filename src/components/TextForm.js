import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("upper case was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleLoClick=()=>{
      //console.log("lower case was clicked" + text);
      let newText=text.toLowerCase();
      setText(newText)
  }

  // const handleItClick=()=>{
  
  //   let newText=String.italics(); 

  //   setText(newText)
  // }

  

  const handleClearClick=()=>{
    //console.log("lower case was clicked" + text);
    let newText='';
    setText(newText)
}

const handleExtraSpaces=()=>{
  //console.log("lower case was clicked" + text);
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
}



    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const[text,setText]=useState('');

  return (
    <>
    <div className="conatiner" style={{color:props.mode == 'dark' ? 'white' : '#042743'}}>
     <h1 >{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode == 'dark' ? 'grey' : 'white',color:props.mode == 'dark' ? 'white' : '#042743'}} id="mytext" rows="8"></textarea>
</div>
  <label htmlFor="mytext" className="form-label">Example textarea</label>
  
  

</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button> 
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra Spaces</button>
{/* <button className="btn btn-primary mx-2" onClick={handleItClick}>Convert to Italic</button>  */}
 
 
    <div className="container my-2" style={{color:props.mode == 'dark' ? 'white' : '#042743'}}>
    <h2>your text summary</h2>
    <p>{text.split(" ").length} word and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length }Minutes</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  )
}
