import { useState } from 'react';

export function Button(){
    const [count , setCount] = useState(0);
    function Plus(){
      setCount(count + 1);
    }
    function Minus(){
      setCount(count - 1);
    }
    return (
      <div>
        <p>{count}</p>
        <button onClick={Minus}>-</button>
        <button onClick={Plus}>+</button>
      </div>
    )
}