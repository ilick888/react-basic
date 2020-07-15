import React, {useState, useEffect} from 'react'

const BasicUseEffect = () => {

    const [count, setCount] = useState(0)
    const [item, setItem] = useState('')

    useEffect(() => {
        console.log("useEffect")
    },[count])

    return (
        <div>
            <button onClick={() => setCount(prev=>prev+1)}>{count}</button>
            <form>
            <input type="text" value={item}
                onChange={evt => setItem(evt.target.value)}>
            </input>
            </form>
        </div>
    )
}

export default BasicUseEffect
