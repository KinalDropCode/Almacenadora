/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TaskCard } from "./TaskCard";
import { getCompletedTasks } from "../../services/api";

export const TasksDone = ({tasks}) => {
    const [completedTasks, setCompletedTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCompletedTasks = async () => {
            try {
                const response = await getCompletedTasks();
                setCompletedTasks(response.data.completedTasks);
            } catch (error) {
                console.error("Error fetching completed tasks:", error);
            }
        };

        fetchCompletedTasks();
    }, []);

    const handleNavigateToChannel = (id) => {
        navigate(`/task/${id}`);
    };
    
    return(
        <div className="tasks-container">
            {completedTasks.map((task) => (
                <TaskCard
                    key={task._id} // Agrega la clave única para cada tarea
                    id={task._id}
                    nameTask={task.nameTask}
                    startDate={task.startDate}
                    endDate={task.endDate}
                    statusTask={task.statusTask}
                    author={task.author}
                    description={task.description}
                    navigateToChannelHandler={handleNavigateToChannel}
                />
            ))}
        </div>
    );
};
