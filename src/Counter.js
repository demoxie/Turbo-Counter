import React,{useState} from 'react';

export default function Counter({stepValue}) {
    const [value,setStepValue] = useState(stepValue);
    const handleStepIncrement = ()=>{
          setStepValue((value)=>value + stepValue);
    }
    const handleStepDecrement = ()=>{
        setStepValue((value)=>value - stepValue);
  }

    return (
        <>
        <div>
            <h1>{value}</h1>
            <button onClick={handleStepIncrement}>Increment</button>
            <button onClick={handleStepDecrement}>Decrement</button>
        </div>
        </>
    )
}
