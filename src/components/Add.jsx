import React from 'react'

export const Add = () => {
  return (
    <form>
        <input 
        type='text' 
        className='styles-add' 
        name='description' 
        placeholder='Tareas'
        value='Learn'/>

        <button className='add-but' type='submit'>Agregar</button>


    </form>
  )
}
export default Add
