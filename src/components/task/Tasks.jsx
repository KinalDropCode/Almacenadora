/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { TaskCard } from "./TaskCard";

export const Tasks = ({channels}) => {
    const navigate  = useNavigate()

    const handleNavigateToChannel = (id) => {
        navigate(`/task/${id}`)
    }

    return(
        <div className="channels-container">
            {channels.map((c) => (
                <TaskCard
                    key={c.id}
                    id={c.id}
                    title={c.title}
                    username={c.username}
                    isOnline={c.isOnline}
                    avatarUrl={c.avatarUrl}
                    navigateToChannelHandler={handleNavigateToChannel}
                />
            ))}
        </div>
    )
}