import { useState, useEffect, useRef } from "react"

export default function Example2() {
    const [value,setValue] = useState(0);
    useEffect(()=>{console.log('hello')})

    const count = useRef(0);
    const handleCounter = (()=>{count.current = count.current+1})
    
  return (
    <>
    <div>
        <p>useRef</p>
        <button onClick={()=> setValue(x=>x+1)}>Value</button>
        <h1>{value}</h1>
        <button onClick={handleCounter}>Counter</button>
        <h2>Render Count {count.current}</h2>
    </div>


    </>
  )
}
