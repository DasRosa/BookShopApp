import React, { useState, useEffect } from 'react'
import './Cart.css'
import { axios } from '../../../axios'

const Cart = () => {
    const [cart, setCart] = useState()
    const [ userId, setUserId] = useState()

    const getCart = async () => {
        const res = await axios.get('api/v1/user/cart')

        if (res && res.data) {
            setCart(res.data.cart)
        }
    }

    useEffect(() => {
        getCart()
    })
    
    const getUserId = async () => {
        const res = await axios.get('/api/v1/user/id')
        if (res && res.data) {
            setUserId(res.data.id)
        }
    }

    useEffect(() => {
        getUserId()
    }, [])

    const deleteItem = async (id) => {
        await axios.delete(`/api/v1/user/${id}`)
        console.log('Delete Successfully')
    }

    const handleSubmit = () => {
        const newOrder = {
            userId: userId,
            cart
        }

        console.log(newOrder)
    }

    return (
      <div>
          <div><h1>This is Cart Page</h1></div>
        {cart && cart.map((product) => {
          return (
            <div key={product._id}>
              <img src={product.img} alt='' />
              <h4>Title: {product.title}</h4>
              <h4>Price: {product.price}</h4>
              <button onClick={() => deleteItem(product._id)}>Delete</button>
            </div>
          )
        })}
        <button type='submit' onClick={handleSubmit}>Submit</button>
      </div>
    )
}

export default Cart
