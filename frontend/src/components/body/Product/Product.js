import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Product.css'
import { axios } from '../../../axios'

const Product = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()

    const getProduct = async () => {
        const res = await axios
          .get(`/api/v1/products/${id}`)
          .catch((err) => console.log(err))
        
          if (res && res.data) {
            setProduct(res.data.product)
          }
    }

    useEffect(() => {
      getProduct()
      // eslint-disable-next-line
    }, [])

    return (
        <div>
        <div
            className='block'
            style={{
            height: 200,
            marginTop: 50,
            top: 'calc(50% - 273px/2 - 1274.5px)',
            background: '#FCDD3A',
            }}
        >
            <h1 className='title2' style={{ position: 'relative', top: 80 }}>
            product
            </h1>
            <h4 className='title1' style={{ position: 'relative', top: 85 }}>
            {product.title}
            </h4>
        </div>
        <div
            className='row'
            style={{
            position: 'relative',
            top: 'calc(50% - 273px/2 - 948.5px)',
            backgroundColor: 'white',
            }}
        >
            <div className='column1'>
            <img
                src={product.img}
                alt={product.title}
                className='bookCover'
            />
            <button
                type='button'
                className='btn'
                style={{ position: 'absolute', top: 550, left: '40%' }}
            >
                Add to Cart
            </button>
            </div>

            <div className='column2'>
            <h1 className='bookTitle'>{product.title}</h1>
            <h4 className='bookAuthor'>by {product.author}</h4>
            <ul style={{ position: 'relative', left: '20%', lineHeight: 3 }}>
                <li>Genre: {product.genre && product.genre.join(", ")}</li>
                <li>Date of release: {product.releaseDate}</li>
            </ul>
            <p className='description'>{product.description}</p>
            </div>
        </div>
        <div
            className='block'
            style={{
            height: 100,
            top: 'calc(50% - 423px/2 + 104.5px)',
            backgroundColor: '#21415E',
            }}
        >
            <h1
            className='title2'
            style={{
                position: 'relative',
                color: 'white',
                top: 50,
                fontSize: 20,
            }}
            >
            related products
            </h1>
        </div>
        </div>
    )
    }

export default Product
