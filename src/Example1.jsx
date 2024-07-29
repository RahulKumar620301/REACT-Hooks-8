//useMemo Hook
import { useState, useMemo } from "react"
// useState, useMemo are the hooks
export default function Example1() {
    const [count,setCount] =useState(0);
    const [number, setNumber] = useState(1);
    function factorialOf(n){
        console.log('factorialOf(n) called!');
        return n <= 0 ? 1 : n * factorialOf(n-1);
    }
    const factorial = useMemo(()=>factorialOf(number),[number]);
  return (
    <>
    <div>
        Factorial of 
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
        is {factorial}
    </div>
    <button onClick={()=>setCount(x=>x+1)}>Value</button>
    <h1>{count}</h1>
    </>
  )
}
