/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { TaskCard } from "./TaskCard";

export const Tasks = ({tasks}) => {
    const navigate  = useNavigate()

    console.log("tasks llegando a Tasks.jsx");
    console.log(tasks);
    console.log("final Tasks.jsx");
    const handleNavigateToChannel = (id) => {
        navigate(`/task/${id}`)
    }
    

    return (
        <div className="tasks-container">
          {tasks.map((task) => (
            <TaskCard
              key={task.uid} 
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
    );
}