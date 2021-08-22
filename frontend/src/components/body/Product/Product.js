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

    const addToCart = async (id) => {
        await axios.post(`/api/v1/user/${id}`)
        console.log("Add Successfully")
    }

    return (
      <div>
        <div
          className='block'
          style={{ height: 250, backgroundColor: '#99ddff', marginBottom: 30 }}
        >
          <h1 className='title3' style={{ position: 'relative', top: '35%' }}>
            product
          </h1>
          <h4 className='title1' style={{ position: 'relative', top: '38%' }}>
            {product.title}
          </h4>
        </div>
        {/* <div
            className='block'
            style={{
            position: 'relative',
            height:800,
            top: 'calc(50% - 273px/2 - 948.5px)',
            backgroundColor: 'pink',
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
                style={{ position: 'relative', width:150, height:30}}
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
        </div> */}
        <div className='book-container'>
          <img src={product.img} alt={product.title} />
          <div className='book-info'>
            <h1>{product.title}</h1>
            <button onClick={() => addToCart(product._id)}>Add To Cart</button>
            <p>
              <span className='book-data'>author :</span> {product.author}
            </p>
            <p>
              <span className='book-data'>genre :</span>{' '}
              {product.genre && product.genre.join(', ')}
            </p>
            <p>
              <span className='book-data'>date of release :</span>{' '}
              {product.releaseDate}
            </p>
            <p>
              <span className='book-data'>description :</span>{' '}
              {product.description}
            </p>
          </div>
        </div>
      </div>
    )
    }

export default Product
