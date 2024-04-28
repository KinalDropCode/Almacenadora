/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { TaskCard } from "./TaskCard";

export const Tasks = ({tasks}) => {
    const navigate  = useNavigate()

    const handleNavigateToChannel = (id) => {
        navigate(`/task/${id}`)
    }

    return(
        <div className="tasks-container">
            {tasks.map((task) => (
                <TaskCard
                    id={task.id}
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