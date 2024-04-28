/* eslint-disable no-extra-boolean-cast */
import { useState } from "react";
import toast from "react-hot-toast";
import { getTasks as getTasksRequest } from "../../services/api.jsx";

export const useTasks = () => {
    const [ tasks, setTasks] = useState([])

    const getTasks = async () =>{
        const tasksData = await getTasksRequest()
        if(tasksData.error){
            return toast.error(
                tasksData.e?.response?.data || 'Upss! an error occurred while reading the task list'
            )
        }

        setTasks({
            tasks: tasksData.data.tasks
        })

    }

    return{
        getTasks,
        isFetching: !Boolean(tasks),
        allTasks: tasks?.tasks
    }
}