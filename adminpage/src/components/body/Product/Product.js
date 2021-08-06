import React, { useState, useEffect } from 'react'
import { axios } from '../../../axios'
import { Link, useParams } from 'react-router-dom'

const Product = () => {
    const [product, setProduct] = useState('')
    const { id } = useParams()

    const getProduct = async () => {
        const res = await axios.get(`/api/v1/products/${id}`).catch((err) => console.log(err))
        if (res && res.data) {
            setProduct(res.data.product)
        }
    }   

    useEffect(() => {
        getProduct()
    })

    return (
      <div>
        <img src={product.image} alt='not available' />
        <h4>Name: {product.name}</h4>
        <h4>Genra: {product.genra}</h4>
        <h4>Author: {product.author}</h4>
        <Link to={`/products/${product._id}/edit`}>
          <h5>Edit</h5>
        </Link>
        <Link to='/products'>Back to Products</Link>
      </div>
    )
}

export default Product
