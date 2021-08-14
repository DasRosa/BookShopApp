import React, { useState, useEffect } from 'react'
import { axios } from '../../../axios'
import { Link, useParams } from 'react-router-dom'
import EditProduct from '../EditProduct/EditProduct'

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
        <img src={product.img} alt='not available' />
        <h4>Title: {product.title}</h4>
        <h4>Genre: {product.genre}</h4>
        <h4>Author: {product.author}</h4>
        <h4>Release Date: {product.releaseDate}</h4>
        <h4>Description: {product.description}</h4>
        <Link to={`/products/${product._id}/edit`}>
          <h5>Edit</h5>
        </Link>
        <Link to='/products'>Back to Products</Link>
      </div>
    )
}

export default Product
