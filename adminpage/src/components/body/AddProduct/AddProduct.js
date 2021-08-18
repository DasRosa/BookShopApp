import React, { useState } from 'react'
import { axios } from '../../../axios'
import './AddProduct.css'

const AddProduct = () => {
  const [img, setImg] = useState()
  const [title, setTitle] = useState()
  const [genre, setGenre] = useState()
  const [author, setAuthor] = useState()
  const [newBook, setNewBook] = useState()
  const [bestSeller, setBestSeller] = useState()
  const [releaseDate, setReleaseDate] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()

  const changeImg = (e) => {
    setImg(e.target.value)
  }

  const changeTitle = (e) => {
    setTitle(e.target.value)
  }

  const changeGenre = (e) => {
    setGenre(e.target.value)
  }

  const changeAuthor = (e) => {
    setAuthor(e.target.value)
  }

  const changeReleaseDate = (e) => {
    setReleaseDate(e.target.value)
  }

  const changeDescription = (e) => {
    setDescription(e.target.value)
  }

  const changeNewBook = (e) => {
    setNewBook(e.target.checked)
  }

  const changeBestSeller = (e) => {
    setBestSeller(e.target.checked)
  }

  const changePrice = (e) => {
    setPrice(e.target.value)
  }

  const handleSubmit = async () => {
    console.log(genre)
    const newProduct = {
      img,
      title,
      genre: genre.split(' '),
      author,
      bestSeller,
      newBook,
      releaseDate,
      description,
      price
    }
    await axios
      .post(`/api/v1/products/`, newProduct)
      .catch((err) => console.log(err))
    console.log(newProduct)
  }

  return (
    <div>
      <div className='title'>
        <h2>add product</h2>
        <div className='underline'></div>
      </div>
      <div className='add-container'>
        <div className='add-img'>
          <img src={img} alt='not available' onChange={changeImg} width="100%" height="100%"/>
        </div>
        <form>
          <div>
            <label>Image: </label>
            <input type='text' value={img || ''} onChange={changeImg} className='input-text'/>
          </div>
          <div>
            <label>Title: </label>
            <input type='text' value={title || ''} onChange={changeTitle} className='input-text'/>
          </div>
          <div>  
            <label>Genre: </label>
            <input type='text' value={genre || ''} onChange={changeGenre} className='input-text'/>
          </div>
          <div>
            <label>Author: </label>
            <input type='text' value={author || ''} onChange={changeAuthor} className='input-text'/>
          </div>
          <div>
            <label>New Book: </label>
            <input
              type='checkbox'
              checked={newBook && 'checked'}
              value={newBook || ''}
              onChange={changeNewBook}
              className='input-checkbox'
            />
            <label>Best Seller: </label>
            <input
              type='checkbox'
              checked={bestSeller && 'checked'}
              value={bestSeller || ''}
              onChange={changeBestSeller}
              className='input-checkbox'
            />
          </div>
          <div>
            <label>Release Date: </label>
            <input
              type='text'
              value={releaseDate || ''}
              onChange={changeReleaseDate}
              className='input-text'
              style={{width:130}}
            />
          </div>
          
          <div>
            <label>Price: </label>
            <input
              type='number'
              value={price || ''}
              onChange={changePrice}
              className='input-text'
              style={{width:80}}
            />
          </div>
          <div>
            <label>Description: </label>
            <textarea
              size='150'
              value={description || ''}
              onChange={changeDescription}
              className='input-description'
            />
          </div>
        </form>
      </div>
      <div className='block'>
        <button type='submit' onClick={handleSubmit} className='btn'>
          Submit
        </button>
      </div>
    </div>
  )
}

export default AddProduct
