import React,{useState} from 'react'
import Counter from './Counter';

export default function TurboCounter() {
    const [stepValue,setStepValue] = useState(0);
    const handleStepIncrement = ()=>{
          setStepValue((stepValue)=>stepValue + 1);
    }
    const handleStepDecrement = ()=>{
        setStepValue((stepValue)=>stepValue<=0?stepValue:stepValue - 1);
  }
    return (
        <>
         <Counter stepValue = {stepValue}/>
        <div>
            <h2>{stepValue}</h2>
            <button onClick={handleStepIncrement}>Step-size +</button>
            <button onClick={handleStepDecrement}>Step-size -</button>
        </div>
        </>
    )
}
