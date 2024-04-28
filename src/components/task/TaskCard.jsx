/* eslint-disable react/prop-types */

export const TaskCard = ({
    nameTask,
    endDate,
    statusTask,
    author,
    description,
    id,
    navigateToChannelHandler
}) => {
    const handleNavigate = () => {
        navigateToChannelHandler(id)
    }

    return(
        /*<div className="channels-card" onClick={handleNavigate}>
            <span className="channels-card-title">{title}</span>
            <span className="channels-card-title">{username}</span>
            <span className="channels-card-title" style={{color: isOnline ? 'green' : 'red'}}>
                {isOnline ? 'Online' : 'Offline'}
            </span>
        </div>*/
        
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{nameTask}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">{endDate}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">{statusTask}</h6>
                <p class="card-text">{author}</p>
                <p class="card-text">{description}</p>
                <a href="#" class="btn btn-primary">Complete task</a>
            </div>
        </div>
    )
}