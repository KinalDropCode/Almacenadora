
import { useNavigate } from "react-router-dom";

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
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{nameTask}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{endDate}</h6>
                <h6 className={`card-subtitle mb-2 ${statusColor}`}>{statusTask}</h6>
                <p className="card-text">{author}</p>
                <p className="card-text">{description}</p>
                <button className="btn btn-primary" onClick={handleNavigate}>Complete task</button>
            </div>
        </div>
    );
};
