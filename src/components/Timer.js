import React, {useState, useEffect} from 'react'

const Timer = () => {

    const [count, setCount] = useState(0)

    const time = () => {
        setCount(prev=>prev+1)
    }

    useEffect(() => {
        const inerval = setInterval(time, 1000)
        return () => {
            clearInterval(inerval)
            console.log("clear")
        }
        
    },[])
    
    return (
        <div>
            {count}
        </div>
    )
}

export default Timer
