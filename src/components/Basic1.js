import React from 'react'

const Basic1 = (props) => {
    const clickHandler = () => {
        console.log("hello")
    } 

    return (
        <div>
            <button onClick={clickHandler}></button>
            <h1>Hello {props.name}</h1>
            <h1>Hello React2</h1>
        </div>
    )
}

export default Basic1
