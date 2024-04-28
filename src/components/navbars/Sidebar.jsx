/* eslint-disable react/prop-types */


export const Sidebar = ({tasks}) =>{
    if(!tasks){
        return null
    }

    return(
        <div className="sidebar-container">
            <span className="sidebar-title">Hi again</span>
            <span className="sidebar-subtitle">Actions</span>
            {tasks.map((task) => {
                return(
                    <div key={task.id} className="sidebar-list-item">
                        <span className="sidebar-list-username">{task.username}</span>
                        <span className="sidebar-list-status"
                            style={{
                                color: task.isOnline ? 'green' : 'red'
                            }}
                        >
                         {task.isOnline ? 'Online' : 'Ofline'}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}