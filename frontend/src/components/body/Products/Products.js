import React from 'react'
import { useState, useEffect } from 'react';
import { newBooks } from '../Home/books';
import './Products.css'

const Products = () => {
    return (
        <div>
            <div className='block' style={{height: 200, marginTop: 50, top: 'calc(50% - 273px/2 - 1274.5px)', background: '#FCDD3A',}}>
                <h1 className='title2' style={{position: 'relative', top:80}}>product</h1>
                <h4 className='title1' style={{position: 'relative', top:85}}>{newBooks[0].title}</h4>
            </div>
            <div className='row' style={{position: 'relative', top: 'calc(50% - 273px/2 - 948.5px)', backgroundColor:'white'}}>
                <div className='column1'>
                    <img src={newBooks[0].img} alt={newBooks[0].title} className='bookCover' />
                    <button type='button' className='btn' style={{position:'absolute', top:550, left:'40%'}}>Add to Cart</button>
                </div>
                
                <div className='column2'>
                    <h1 className='bookTitle'>{newBooks[0].title}</h1>
                    <h4 className='bookAuthor'>by {newBooks[0].author}</h4>
                    <ul style={{position:'relative', left:'20%', lineHeight:3}}>
                        <li>Price: {newBooks[0].price}</li>
                        <li>Genre: {newBooks[0].genre}</li>
                        <li>Language: {newBooks[0].language}</li>
                        <li>Date of release: {newBooks[0].dateOfRelease}</li>
                    </ul>
                    <p className='description'>{newBooks[0].description}</p>
                </div>
            </div>
            <div className='block' style={{height:100, top: 'calc(50% - 423px/2 + 104.5px)', backgroundColor:'#21415E'}}>
                <h1 className='title2' style={{position:'relative', color:'white', top:50, fontSize:20}}>related products</h1>
            </div>
        </div>
    )
}

export default Products