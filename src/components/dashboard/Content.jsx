/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";
import { Tasks } from "../task/Tasks";

export const Content = ({tasks}) => {
    return(
        <div className="content-container">
            <Routes>
                <Route path="tasks" element={<Tasks tasks={tasks}/>}/>
            </Routes>
        </div>
    )
}