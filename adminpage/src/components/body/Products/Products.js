import React, { useState, useEffect } from 'react'
import { axios } from '../../../axios'
import { Link } from 'react-router-dom'
import './Products.css'

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
      <div>
        <div className='block'>
          <div className="title">
            <h2>our products</h2>
            <div className="underline"></div>
          </div>
          <Link to={'/products/add'} onClick={addProduct} className='btn-primary' style={{  marginBottom: 40}}>Add Product</Link>
        </div>
        <div className='section-center'>
          {products.map((product) => {
            return (
              <article key={product._id} className='product-item'>
                <Link to={`/products/${product._id}`}>
                  <img src={product.img} alt='not available' className='photo'/>
                </Link>
                <div className='item-info'>
                  <header>
                    <h4 style={{width: 260}}>{product.title}</h4>
                    <h4 className='price'>${product.price}</h4>
                  </header>
                  <p className='item-text'><span style={{fontWeight:'bold'}}>Genre:</span> {product.genre && product.genre.join(', ')}</p>
                  <p className='item-text'><span style={{fontWeight:'bold'}}>Author:</span> {product.author}</p>
                  {/* <Link to={`/products/${product._id}/edit`}>
                    <button>
                      <h5>Edit</h5>
                    </button>
                  </Link> */}
                  <button onClick={() => deleteProduct(product._id)} className='btn' style={{margin:0}}>
                    <h5>Delete</h5>
                  </button>
                </div>
              </article>
            )
          })}
        </div>
        
      </div>
    )
}

export default Products
