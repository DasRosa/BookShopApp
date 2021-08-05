import React from 'react'
// import { useState, useEffect } from 'react';
// import { axios } from '../../../axios'
import { Link } from 'react-router-dom'
import './Home.css'
import { newBooks, bestSellers } from './books';

const Home = () => {
    // const [books, setBooks] = useState([])
    // const getBooks = async () => {
    //     const res = await axios.get('/api/v1/test').catch((err) => console.log(err))
        
    //     if (res && res.books) {
    //         console.log(res.books.test)
    //         setBooks(res.books.test)
    //     }
    // }

    // useEffect(() => {
    //     getBooks()
    // }, [])

    const Book = ({img, title, author}) => {
    return (
        <article className='book'>
            <img src={img} alt="" width="180" height="260"/>
            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h4>{author}</h4>
        </article>
    );
    };
    return (
        <div>
            <img src="https://i.im.ge/2021/08/05/hQX68.jpg" alt="" className="image"/>
            <div className='block' style={{top: 'cal(50% - 11px / 2 - 1000px)'}}>
                <h4 className='title1'>book shop publishers</h4>
                <h1 className='title2'>BESTSELLERS</h1>
            </div>
            <div className='block' style={{top: 'calc(50% - 11px/2 - 589px)'}}>
                <section className='booklist'>
                    {bestSellers.map((book) => {
                        return (
                            <Book key={book.id} {...book}></Book>
                        );
                    })}
                </section>
            </div>
            {/* Set background */}
            <div className='block' style={{position:'absolute', width:'100%', height:1500, top: '650px', backgroundColor:'#21415e', zIndex:-100}}/>
            <div className='block' style={{top: 'calc(50% - 38px/2 - 177px)'}}>
                <h4 className='title1' style={{color:'white'}}>this month's</h4>
                <h1 className='title2' style={{color:'white'}}>NEW ARRIVALS</h1>
                <section className='booklist'>
                    {newBooks.map((book) => {
                        return (
                            <Book key={book.id} {...book}></Book>
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

{/* <div style={{textDecorationLine:'center'}}>
    <div className='column1'>
        <h3 style={{textDecorationLine: 'underline'}}>new arrivals</h3>
    </div>
    <div className='column2'>
        <section className='booklist'>
            {newBooks.map((book) => {
                return (
                    <Book key={book.id} {...book}></Book>
                );
            })}
        </section>
    </div>
    </div>
    <div className='row' style={{display:'block', marginLeft:'auto', marginRight:'auto', width:'76%'}}>
    <div className='column2'>
        <section className='booklist'>
            {bestSellers.map((book) => {
                return (
                    <Book key={book.id} {...book}></Book>
                );
            })}
    </section>
    </div>
    <div className='column1'>
        <h3 style={{textDecorationLine: 'underline'}}>best sellers</h3>
    </div>
    </div> */}
export default Home
