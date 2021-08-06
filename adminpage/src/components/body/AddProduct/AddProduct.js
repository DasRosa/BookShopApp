import React from 'react'
import { useForm } from 'react-hook-form'
import { axios } from '../../../axios'

const AddProduct = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    data.genra = data.genra.split(' ')
    console.log(data)
    await axios
      .post('/api/v1/products', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    data = {}
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name: </label>
        <input
          type='text'
          name='name'
          {...register('name', {
            required: true,
          })}
        />
      </div>
      <div>
        <label>Author: </label>
        <input
          type='text'
          name='author'
          {...register('author', {
            required: true,
          })}
        />
      </div>
      <div>
        <label>Release Date: </label>
        <input
          type='text'
          name='dateOfRelease'
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
          {...register('image', {
            required: true,
          })}
        />
      </div>
      <input type='submit' />
    </form>
  )
}

export default AddProduct
