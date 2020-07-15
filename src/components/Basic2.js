import React, {useState} from 'react';

const Basic2 = () => {

    const [product, setProduct] = useState([])

    const newProduct = () => {
        setProduct([...product, {
            id: product.length,
            name: "hello",
        }])
    }

    return (
        <div>
            <button onClick={newProduct}>Add</button>
            <ul>
                {product.map(product => (
                <li key={product.id}>{product.name}{product.id}</li>
                ))}
            </ul>
        </div>
    )
}

export default Basic2
