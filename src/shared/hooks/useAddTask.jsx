import { useState } from 'react';
import { addTask as addTaskRequest } from '../../services/api.jsx'
import toast from "react-hot-toast";

export const useTask = () => {
    const [isLoading, setIsLoading] = useState(false)

    const addTask = async(nameTask, description, startDate, endDate, author) =>{
        setIsLoading(true)

        const response = await addTaskRequest({
            nameTask,
            description,
            startDate,
            endDate,
            author
        })
        setIsLoading(false)

        if(response.error){
            console.log(response.error)
            return toast.error(response.e?.response?.data || 'Ocurrió un error al agregar, intenta de nuevo')
        }

        const { userDetails } = response.data
        localStorage.setItem('task', JSON.stringify(userDetails))
        toast.success('Task added successfully');
    }
    return{
        addTask,
        isLoading
    }
}

export default useTask;