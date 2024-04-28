/* eslint-disable react/prop-types */

export const TaskCard = ({
    id,
    nameTask,
    endDate,
    statusTask,
    author,
    description,
    navigateToChannelHandler
}) => {
    const handleNavigate = () => {
        navigateToChannelHandler(id)
    }
    
    const statusColor = statusTask === 'Completed' ? 'green' : 'red';

    return(
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{nameTask}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">{endDate}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary" style={{ color: statusColor }}>{statusTask}</h6>
                <p class="card-text">{author}</p>
                <p class="card-text">{description}</p>
                <a href="#" class="btn btn-primary">Complete task</a>
            </div>
        </div>
    )
}