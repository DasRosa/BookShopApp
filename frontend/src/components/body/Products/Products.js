import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Products.css'
import { axios } from '../../../axios'

const Products = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const res = await axios
            .get('api/v1/products/')
            .catch((err) => console.log(err))
        
            if (res && res.data) {
            setProducts(res.data.products)
            }
    }

    useEffect(() => {
        getProducts()
    }, [])

    const Book = (book) => {
        return (
        <li className='product'>
            <a href={`/products/${book._id}`}>
                <img src={book.img} alt=""/>
            </a>
            <h4>{book.author}</h4>
            <h3>{book.title}</h3>
        </li>
    );
    }

    return (
        <div>
            <div className='block' style={{height:250, backgroundColor:'#99ddff', marginBottom:30}}>
                <h1 className='title3' style={{position:'relative', top:'45%'}}>products</h1>
            </div>
            <div className='block'>
                <ul className='productlist'>
                    {products.map((book) => {
                        return <Book key={book._id} {...book}></Book>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Products