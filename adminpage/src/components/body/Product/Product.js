import React, { useState, useEffect } from 'react'
import { axios } from '../../../axios'
import { useGlobalContext } from '../../../context'
import { Link, useParams } from 'react-router-dom'
import './Product.css'
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

    const { openModal } = useGlobalContext();
    return (
        <div>
        {/* <img src={product.img} alt='not available' />
        <h4>Title: {product.title}</h4>
        <h4>Genre: {product.genre}</h4>
        <h4>Author: {product.author}</h4>
        <h4>Release Date: {product.releaseDate}</h4>
        <h4>Description: {product.description}</h4>
        <Link to={`/products/${product._id}/edit`}>
            <h5>Edit</h5>
        </Link>
        <Link to='/products'>Back to Products</Link> */}
        
        <div className='block' style={{padding: '3rem 0'}}>
            <Link to='/products' className='btn-primary'>Back to Products</Link>
            <h2 className='section-title'>
            {product.title}
            </h2>
        </div>
        <div className='book-container'>
            <img 
                src={product.img}
                alt={product.title}
            />
            <div className='book-info'>
                <p>
                    <span className='book-data'>title :</span> {product.title}
                </p>
                <p>
                    <span className='book-data'>author :</span> {product.author}
                </p>
                <p>
                    <span className='book-data'>genre :</span> {product.genre && product.genre.join(", ")}
                </p>
                <p>
                    <span className='book-data'>release date :</span> {product.releaseDate}
                </p>
                <p>
                    <span className='book-data'>description :</span> {product.description}
                </p>
            </div>
        </div>
        <div className='block'>
            <button onClick={openModal} className='btn'>Edit</button>
        </div>
        <EditProduct/>
        </div>
    )
}

export default Product
