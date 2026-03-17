"use client";
import { useState } from 'react';

const Counter = () => {
    const [count,setCount]=useState(0);
    return (
        <div>
            <p>{count}</p>
        <button onClick={()=>setCount(count-1)} className='btn btn-secondary'>- Decrement</button>
        <button onClick={()=>setCount(count+1)} className='btn btn-primary'> + Increment</button>
        </div>
    );
};

export default Counter;