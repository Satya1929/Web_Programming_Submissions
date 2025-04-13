import React,{useRef} from "react";

function Focus(){

    const inputRef = useRef("");

    const focusField = (inputRef)=>{
        inputRef.current.focus();
    }
    return(
        <div>
            <button onClick={() => focusField(inputRef)} style={{margin:"10px"}}>Focus Field</button>
            <input type="text" ref={inputRef}/>
        </div>
    );
}
export default Focus;