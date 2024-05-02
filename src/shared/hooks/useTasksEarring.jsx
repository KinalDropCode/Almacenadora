/* eslint-disable no-extra-boolean-cast */
import { useState } from "react";
import toast from "react-hot-toast";
import { getEarringTasks as getEarringTasksRequest} from "../../services/api.jsx";

export const useCompleted = () => {
    const [ tasks, setTasks  ] = useState([])

    const getEarringTasks = async () => {
        try {
            const tasksData = await getEarringTasksRequest();
            if (tasksData.error) {
                throw new Error(
                    tasksData.e?.response?.data || 'Upss! an error occurred while reading the task list'
                );
            }
            setTasks({tasks: tasksData.data.task});
            toast.success('Excellent! The task list was read successfully');
            
        } catch (error) {
            toast.error(error.message);
        }
    };
    return{
        getEarringTasks, 
        isFetching: !Boolean(tasks),
        allTasks: tasks?.tasks
        // allTasks: tasks
    }
}