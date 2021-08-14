import React, { useState } from 'react'
import { axios } from '../../../axios'

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
      <form>
        <div>
          <label>Image: </label>
          <input type='text' value={img || ''} onChange={changeImg} />
        </div>
        <div>
          <img src={img} alt='not available' onChange={changeImg} />
        </div>
        <div>
          <label>Title: </label>
          <input type='text' value={title || ''} onChange={changeTitle} />
        </div>
        <div>
          <label>Genre: </label>
          <input type='text' value={genre || ''} onChange={changeGenre} />
        </div>
        <div>
          <label>Author: </label>
          <input type='text' value={author || ''} onChange={changeAuthor} />
        </div>
        <div>
          <label>New Book: </label>
          <input
            type='checkbox'
            value={newBook || ''}
            onChange={changeNewBook}
          />
        </div>
        <div>
          <label>Best Seller: </label>
          <input
            type='checkbox'
            value={bestSeller || ''}
            onChange={changeBestSeller}
          />
        </div>
        <div>
          <label>Release Date: </label>
          <input
            type='text'
            value={releaseDate || ''}
            onChange={changeReleaseDate}
          />
        </div>
        <div>
          <label>Description: </label>
          <input
            type='text'
            size='150'
            value={description || ''}
            onChange={changeDescription}
          />
        </div>
        <div>
          <label>Price: </label>
          <input
            type='number'
            value={price || ''}
            onChange={changePrice}
          />
        </div>
      </form>
      <div>
        <button type='submit' onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default AddProduct
