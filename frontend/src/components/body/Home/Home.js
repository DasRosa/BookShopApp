import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { axios } from '../../../axios'
import './Home.css'

const Home = () => {
    const [newBooks, setNewBooks] = useState([])
    const [bestSellers, setBestSellers] = useState([])

    const getNewBooks = async () => {
        const res = await axios
            .get('api/v1/products/')
            .catch((err) => console.log(err))
        
        if (res && res.data) {
            let newBooks = res.data.products.filter(product => product.newBook === true)
            setNewBooks(newBooks)
        }
    }

    const getBestSellers = async () => {
        const res = await axios.get('api/v1/products').catch((err) => console.log(err))

        if (res && res.data) {
            let bestSellers = res.data.products.filter(product => product.bestSeller === true)
            setBestSellers(bestSellers)
        }
    }


    useEffect(() => {
        getNewBooks()
        getBestSellers()
      // eslint-disable-next-line
    }, [])

    const Book = (book) => {
    return (
        <li className='book'>
            <a href={`/products/${book._id}`}>
                <img src={book.img} alt="" width="180" height="260"/>
                {/* <h1>{book.title}</h1> */}
            </a>
            {/* <h4>{book.author}</h4> */}
        </li>
    );
    };

    return (
        <div>
            <img src="https://graciousleadershipbook.com/wp-content/uploads/2017/12/book-mockup-9.jpg" alt="" className="image"/>
            <div className='event-container1'>
                <h2>Summer Sale</h2>
                <h3>Get 70% Off for All Design Books</h3>
                <p>This season, you have no excuse for being without something good to read—whether you're indoors or on a socially distanced plot of beach somewhere.</p>
                <Link to='/products' className='btn' style={{marginLeft:10, marginBottom:10}}>Shop Now</Link>
            </div>
            <div className='block' style={{top: 'cal(50% - 11px / 2 - 1000px)'}}>
                <h4 className='title1'>book shop publishers</h4>
                <h1 className='title2'>bestsellers</h1>
            </div>
            <div className='block' style={{top: 'calc(50% - 11px/2 - 589px)'}}>
                <ul className='booklist'>
                    {bestSellers.map((book) => {
                        return <Book key={book._id} {...book}></Book>
                    })}
                </ul>
            </div>
            <div className='event-container2'>
                {/* <img src="https://i.im.ge/2021/08/14/wVmFJ.jpg" alt="" style={{width:'100%', height:500}}/> */}
                <div>
                    <h3>Shop wide range of collections</h3>
                    <h2>BOOK FESTIVAL</h2>
                    <p>ALL BOOKS ARE FLAT 50% OFF</p>
                    <Link to='/products' className='btn' style={{marginLeft:10, marginBottom:10}}>Shop Now</Link>
                </div>
            </div>
            
            <div className='block' style={{top: 'calc(50% - 38px/2 - 177px)'}}>
                <h4 className='title1'>this month's</h4>
                <h1 className='title2'>new arrivals</h1>
                <ul className='booklist'>
                    {newBooks.map((book) => {
                        return (
                            <Book key={book._id} {...book}></Book>
                        );
                    })}
                </ul>
                <h1 style={{marginBottom:20, marginLeft:'26%', marginRight:'26%', fontSize:30, textTransform: 'uppercase'}}>"a room without books is like a body without a soul"</h1>
            </div>
            {/* <div className='footer'>
                <p>Created by Team Project</p>
            </div> */}
        </div>
    )
}
export default Home
