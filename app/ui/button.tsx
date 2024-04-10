import {useState} from 'react';
export default function ButtonPrinter() {
    const [count, setCount] = useState(0);

    function outputStuff() {
        console.log("I'm touched!");
        setCount(count + 1);
    }

    return (
        <button onClick={outputStuff} className="text-black flex">Touch me! Clicked: ({count})</button>
    )
    
    
        
}