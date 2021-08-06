import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { axios } from '../../../axios'
import { useParams } from 'react-router-dom'

const EditProduct = () => {
    const {register, handleSubmit} = useForm()
    const [product, setProduct] = useState([{
        name: '',
        author: '',
        dateOfRealease: '',
        image: '',
        genra: ''

    }])
    const { id } = useParams()

    const getProduct = async () => {
        const res = await axios.get(`/api/v1/products/${id}`).catch((err) => console.log(err))
        if (res && res.data) {
            setProduct(res.data.product)
            console.log(res.data.product)
        }

        register.defaultValue = res.data.product
    }

    useEffect(() => {
      getProduct()
      // eslint-disable-next-line
    }, [])

    const onSubmit = async (data) => {
        data.genra = data.genra.split(" ")
        console.log(data)
        await axios.patch(`/api/v1/products/${id}`, data).then((res) => console.log(res)).catch((err) => console.log(err))
        data = { }
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name: </label>
        <input
        type='text'
        name='name'
        defaultValue={product.name}
        {...register('name', {
            required: true,
        })}
        />
        <label htmlFor='author'>Author: </label>
        <input
        type='text'
        name='author'
        defaultValue={product.author}
        {...register('author', {
            required: true,
        })}
        />
        <div>
          <label>Release Date: </label>
          <input
            type='text'
            name='dateOfRealease'
            defaultValue={product.dateOfRealease}
            {...register('dateOfRelease', {
              required: true,
            })}
          />
        </div>
        <div>
          <label>Genra: </label>
          <input
            type='text'
            name='genra'
            defaultValue={product.genra}
            {...register('genra', {
              required: true,
            })}
          />
        </div>
        <div>
          <label>Image: </label>
          <input
            type='text'
            name='image'
            defaultValue={product.image}
            {...register('image', {
              required: true,
            })}
          />
        </div>
        <input type="submit" />
      </form>
    )
}

export default EditProduct
