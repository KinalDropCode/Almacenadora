/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { TaskCard } from "./TaskCard";

export const TasksDone = ({tasks}) => {
    const navigate  = useNavigate()

    console.log("tasks llegando a TasksDone.jsx");
    console.log(tasks);
    console.log("final TasksDone.jsx");
    const completedTasks = tasks.filter(task => task.statusTask === "Completed");
    const handleNavigateToChannel = (id) => {
        navigate(`/task/${id}`)
    }
    
    console.log("completedTasks from task done")
    console.log(completedTasks)

    
    return(
        <div className="tasks-container">
            {completedTasks.map((task) => (
                <TaskCard
                    id={task.uid}
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
    )
}