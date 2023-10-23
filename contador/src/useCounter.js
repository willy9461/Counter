import {useState} from 'react'

export const useCounter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    };
    const handleDecrement = () => {
        if (count >= 1){
            setCount(count - 1);
        }
    };
    const handleReset = () => {
    setCount(0);
    };
    return {
        count,
        handleDecrement,
        handleIncrement,
        handleReset
    }
  
}

