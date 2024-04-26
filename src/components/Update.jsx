import React from 'react'
import { MdEdit } from "react-icons/md";

export const Update = () => {
  return (
    <form>
        <input 
        type='text' 
        className='styles-update' 
        name='description' 
        placeholder='Tareas'
         value='Learn'/>

        <button className='update-but-container' type='submit'>
            Editar Tarea
            <MdEdit />
        </button>


    </form>
  )
}

export default Update
