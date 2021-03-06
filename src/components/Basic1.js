import React, {useState} from 'react'

const Basic1 = () => {

    const [product, setProduct] = useState({name: "", price: ''})

    return (
        <div>
            <form>
            <input type="text" value={product.name}
                onChange={evt => setProduct({...product, name: evt.target.value})}>
                </input>               
                <input type="text" value={product.price}
                onChange={evt => setProduct({...product, price: evt.target.value})}>
                </input>
            </form>
            <h3>product name is {product.name}</h3>
            <h3>product price is {product.price}</h3>
        </div>
    )
}

export default Basic1
