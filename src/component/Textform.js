import React, {useState} from 'react';


export default function Textform(props) {
    const [text, setText] = useState("This text is be changed");
    let textsummarry="Text Summary Here";

    const handleToUpper = () =>{
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const onChangeHandler= (event) => {
       setText(event.target.value)
    }
    const handleToLower=()=>{
        let lower=text.toLowerCase();
    setText(lower);

    }
return (
       
        <div className="mb-3">
        <label htmlFor="textarea" className="form-label">{props.title}</label>
        <textarea className="form-control" id="touppercase" value={text} rows="25" onChange={onChangeHandler}></textarea>
        <button type="button" className="btn btn-primary mx-2" onClick={handleToUpper}>To Upper Case</button>
        <button type="button" className="btn btn-secondary mx-2" onClick={handleToLower}>To Lower Case</button>
        
        <div className='container my-3'>
        <label htmlFor="textarea2" className="form-label mb-3">{textsummarry}</label>
        <p>{text.split(" ").length} words and {text.length} charecter.</p>

        </div>  
        </div>
       
        
);
}
