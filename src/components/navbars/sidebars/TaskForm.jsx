import React from 'react'
import { useForm } from 'react-hook-form'

const TaskForm = () => {
  const { register, handleSubmit } = useForm();

    return (
    <div>
      <h2>Create New HomeWork</h2>
      <form>

        <div>
            <label> Task Name </label>
            <input type='text' name=''/>
        </div>
        <div>
            <label> End Date </label>
            <input type='text' name=''/>
        </div>
        <div>
            <label> Task Name </label>
            <input type='text' name=''/>
        </div>
        <div>
            <label> Task Name </label>
            <input type='text' name=''/>
        </div>
        <input type='submit' value="Enviar"/>
      </form>
    </div>
  )
}

export default TaskForm
