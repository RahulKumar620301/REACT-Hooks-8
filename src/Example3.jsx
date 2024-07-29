import { useState, useEffect, useRef } from "react"
export default function Example3() {
    const inputElem = useRef(0);
    const handleClick = (()=>{
        inputElem.current.type = "password";
        inputElem.current.style.background = "red";
    })
  return (
    <>
    <input type="text" ref={inputElem}/>
    <button onClick={handleClick}>Click Here</button>

    </>
  )
}
