import { useState,useEffect,useRef } from "react"
import Example5 from "./Example5"
export default function Example4() {
    const [value,setValue] = useState(0)
    const count = useRef(0)
    console.log(count)
    useEffect(()=>{count.current = count.current+1})
  return (
    <>
    <div>
        <Example5/>
        <button onClick={()=>setValue(x=>x+1)}>+</button>
        <h1>{value}</h1>
        <button onClick={()=>setValue(x=>x-1)}>-</button>
        <h2>Render Count {count.current}</h2>
    </div>
    </>
  )
}
