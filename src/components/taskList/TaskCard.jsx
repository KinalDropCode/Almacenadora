
import { useNavigate } from "react-router-dom";
import './task1.css'

export const TaskCard = ({
    id,
    nameTask,
    endDate,
    statusTask,
    author,
    description,
    navigateToChannelHandler,
    
}) => {
    const navigate = useNavigate();
    
    const handleNavigate = () => {
        navigateToChannelHandler(id);
    };

    
    const statusColor = statusTask === 'Completed' ? 'text-success' : 'text-danger';

    return (
        <div className="task-container">
        <div className="task" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="task-title">{nameTask}</h5>
                <h6 className="task-date">{endDate}</h6>
                <h6 className={`task-status ${statusColor}`}>{statusTask}</h6>
                <p className="task-author">{author}</p>
                <p className="task-description">{description}</p>
                <button className=" btn-primary" onClick={handleNavigate}>Complete task</button>
            </div>
        </div>
    </div>    
);
};
