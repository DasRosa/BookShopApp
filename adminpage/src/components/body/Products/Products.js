import React, { useState, useEffect } from 'react'
import { axios } from '../../../axios'
import { Link } from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const res = await axios.get('api/v1/products').catch((err) => console.log(err))

        if (res && res.data) {
            console.log(res.data.products)
            setProducts(res.data.products)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    const addProduct = () => {
        console.log('add a product')
    }

    return (
        <>
            <h1>This is Product Page</h1>
            {products.map((product) => {
                return (
                  <div key={product._id}>
                    <Link to={`/products/${product._id}`}>
                      <img src={product.image} alt='not available' />
                    </Link>
                    <h4>Name: {product.name}</h4>
                    <h4>Genra: {product.genra}</h4>
                    <h4>Author: {product.author}</h4>
                    <Link to={`/products/${product._id}/edit`}>
                      <h5>Edit</h5>
                    </Link>
                  </div>
                )
            })}
            <Link to={'/products/add'}>
            <button onClick={addProduct} >Add Product</button>
            </Link>
         </>
    )
}

export default Products
