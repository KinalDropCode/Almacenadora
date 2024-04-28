/* eslint-disable no-extra-boolean-cast */
import { useState } from "react";
import toast from "react-hot-toast";
import { getTasks as getTasksRequest } from "../../services/api.jsx";

export const useTasks = () => {
    const [ tasks, setTasks] = useState([])

    // const getTasks = async () =>{
    //     const tasksData = await getTasksRequest()
    //     if(tasksData.error){
    //         return toast.error(
    //             tasksData.e?.response?.data || 'Upss! an error occurred while reading the task list'
    //         )
    //     }else {
    //         return toast.success('Excellent! The task list was read successfully')
    //     }

    //     console.log(tasksData.data.tasks)

    //     setTasks({
    //         tasks: tasksData.data.tasks
    //     })

    // }
    const getTasks = async () => {
        try {
            const tasksData = await getTasksRequest();
            if (tasksData.error) {
                throw new Error(
                    tasksData.e?.response?.data || 'Upss! an error occurred while reading the task list'
                );
            }
            setTasks({tasks: tasksData.data.tasks});
            toast.success('Excellent! The task list was read successfully');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return{
        getTasks,
        isFetching: !Boolean(tasks),
        // allTasks: tasks?.tasks
        allTasks: tasks
    }
}