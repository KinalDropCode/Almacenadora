/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";
import { Tasks } from "../taskList/Tasks";

export const Content = ({tasks}) => {
    return(
        <div className="content-container">
            <Routes>
                <Route path="task" element={<Tasks tasks={tasks}/>}/>
            </Routes>
        </div>
    )
}