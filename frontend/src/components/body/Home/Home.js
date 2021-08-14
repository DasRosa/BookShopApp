import React from 'react'
import { useState, useEffect } from 'react';
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
        <article className='book'>
            <a href={`/products/${book._id}`}>
                <img src={book.img} alt="" width="180" height="260"/>
                <h1>{book.title}</h1>
            </a>
            <h4>{book.author}</h4>
        </article>
    );
    };

    return (
        <div>
            <img src="https://i.im.ge/2021/08/05/hQX68.jpg" alt="" className="image"/>
            <div className='block' style={{top: 'cal(50% - 11px / 2 - 1000px)'}}>
                <h4 className='title1'>book shop publishers</h4>
                <h1 className='title2'>bestsellers</h1>
            </div>
            <div className='block' style={{top: 'calc(50% - 11px/2 - 589px)'}}>
                <section className='booklist'>
                    {bestSellers.map((book) => {
                        return <Book key={book._id} {...book}></Book>
                    })}
                </section>
            </div>
            {/* Set background */}
            <div className='block' style={{position:'absolute', width:'100%', height:1500, top: 650, backgroundColor:'#21415e', zIndex:-100}}/>
            <div className='block' style={{top: 'calc(50% - 38px/2 - 177px)'}}>
                <h4 className='title1' style={{color:'white'}}>this month's</h4>
                <h1 className='title2' style={{color:'white'}}>new arrivals</h1>
                <section className='booklist'>
                    {newBooks.map((book) => {
                        return (
                            <Book key={book._id} {...book}></Book>
                        );
                    })}
                </section>
                <h1 style={{marginTop:40, marginBottom:20, marginLeft:'26%', marginRight:'26%', fontSize:30, color:'white', textTransform: 'uppercase'}}>"a room without books is like a body without a soul"</h1>
            </div>
            {/* <div className='footer'>
                <p>Created by Team Project</p>
            </div> */}
        </div>
    )
}
export default Home
