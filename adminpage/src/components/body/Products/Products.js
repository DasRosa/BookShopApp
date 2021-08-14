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

    const deleteProduct = async (id) => {
      await axios.delete(`/api/v1/products/${id}`).catch((err) => console.log(err))
      console.log('delete a product')
      getProducts()
    } 

    return (
      <>
        <Link to={'/products/add'}>
          <button onClick={addProduct}>Add Product</button>
        </Link>
        <h1>This is Product Page</h1>
        {products.map((product) => {
          return (
            <div key={product._id}>
              <Link to={`/products/${product._id}`}>
                <img src={product.img} alt='not available' />
              </Link>
              <h4>Title: {product.title}</h4>
              <h4>Genre: {product.genre && product.genre.join(', ')}</h4>
              <h4>Author: {product.author}</h4>
              <Link to={`/products/${product._id}/edit`}>
                <button>
                  <h5>Edit</h5>
                </button>
              </Link>
              <button onClick={() => deleteProduct(product._id)}>
                <h5>Delete</h5>
              </button> 
            </div>
          )
        })}
      </>
    )
}

export default Products
