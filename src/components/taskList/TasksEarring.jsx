/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TaskCard } from "./TaskCard";
import { getEarringTasks } from "../../services/api";

export const TasksEarring = ({tasks}) => {
    const [earringTasks, setEarringTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEarringTasks = async () => {
            try {
                const response = await getEarringTasks();
                setEarringTasks(response.data.earringTasks);
            } catch (error) {
                console.error("Error fetching earring tasks:", error);
            }
        };

        fetchEarringTasks();
    }, []);

    const handleNavigateToChannel = (id) => {
        navigate(`/task/${id}`);
    };
    
    return(
        <div className="tasks-container">
            {earringTasks.map((task) => (
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
