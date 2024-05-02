/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { TaskCard } from "./TaskCard";

export const TasksEarring = ({tasks}) => {
    const navigate  = useNavigate()

    console.log("tasks llegando a TasksDone.jsx");
    console.log(tasks);
    console.log("final TasksDone.jsx");
    const earringTasks = tasks.filter(task => task.statusTask === "Earring");
    const handleNavigateToChannel = (id) => {
        navigate(`/task/${id}`)
    }
    
    console.log("earring tasks from task earring")
    console.log(earringTasks)
    return(
        <div className="tasks-container">
            {earringTasks.map((task) => (
                <TaskCard
                    id={task.uid}
                    nameTask={task.nameTask}
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