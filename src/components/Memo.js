import React, { useState, useMemo } from 'react'


const Memo = () => {

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const addCount1 = () => {
        setCount1(prev=>prev+1)
    }

    const addCount2 = () => {
        setCount2(prev=>prev+1)
    }

    const isOdd = useMemo(() => {
        let i = 0
        while(i < 5000){
            i = i + 1
            console.log(i)
        }
        return count1 % 2 !== 0
    },[count1])

    return (
        <div>
            <button onClick={addCount1}>{count1}</button>
            <br/>
            <span>{isOdd ? "odd number" : "even number"}</span>
            <br/>
            <button onClick={addCount2}>{count2}</button>
        </div>
    )
}

export default Memo
