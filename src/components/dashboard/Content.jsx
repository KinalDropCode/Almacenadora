/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";
import { Tasks } from "../taskList/Tasks";
import {TasksDone} from "../taskList/TasksDone";
import {TasksEarring} from "../taskList/TasksEarring";

export const Content = ({tasks}) => {
    console.log("tasks llegando a Content.jsx");
    console.log(tasks);
    console.log("final Content.jsx");
    return(
        <div className="content-container">
            <Routes>
                <Route path="task" element={<Tasks tasks={tasks}/>}/>
                <Route path="newTask" element/>
                <Route path="taskDone" element={<TasksDone tasks={tasks}/>}/>
                <Route path="taskEarring" element={<TasksEarring tasks={tasks}/>}/>

            </Routes>
        </div>
    )
}