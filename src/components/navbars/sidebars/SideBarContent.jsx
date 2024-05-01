import { Route, Routes } from "react-router-dom";
import { TaskForm } from "../../taskList/taskForm";


export const Content = ({tasks}) => {
    console.log("tasks llegando a Content.jsx");
    console.log(tasks);
    console.log("final Content.jsx");
    return(
        <div className="content-container">
            <Routes>
                <Route path="newTask" element={<TaskForm tasks={tasks}/>}/>
            </Routes>
        </div>
    )
}