import { useState } from "react";
import "./task1.css";

export const TaskCard = ({
  id,
  nameTask,
  endDate,
  statusTask,
  author,
  description,
  onDeleteTask,
  onEditTask,
}) => {
  const [pendingVisible, setPendingVisible] = useState(false);
  const [deleteEditVisible, setDeleteEditVisible] = useState(true);
  const [completeVisible, setCompleteVisible] = useState(true);

  const handleCompleteTask = () => {
    setPendingVisible(true);
    setDeleteEditVisible(false);
    setCompleteVisible(false);
  };

  const handlePendingTask = () => {
    setPendingVisible(false);
    setDeleteEditVisible(true);
    setCompleteVisible(true);
  };

  const handleDelete = () => {
    onDeleteTask(id);
  };

  const handleEdit = () => {
    onEditTask(id);
  };

  const statusColor =
    statusTask === "Completed" ? "text-success" : "text-danger";

  return (
    <div className="task-container">
      <div className="task" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="task-title">{nameTask}</h5>
          <h6 className="task-date">{endDate}</h6>
          <h6 className={`task-status ${statusColor}`}>{statusTask}</h6>
          <p className="task-author">{author}</p>
          <p className="task-description">{description}</p>
          {deleteEditVisible && (
            <>
              <button className="btn-delete" onClick={handleDelete}>
                Delete
              </button>
              <button className="btn-edit" onClick={handleEdit}>
                Edit
              </button>
            </>
          )}
          {completeVisible && (
            <button className="btn-primary" onClick={handleCompleteTask}>
              Complete Task
            </button>
          )}
          {pendingVisible && (
            <button className="btn-primary" onClick={handlePendingTask}>
              Pending
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
