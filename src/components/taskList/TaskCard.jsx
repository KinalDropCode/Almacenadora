import { useState } from "react";
import "./task1.css";
import DeleteIcon from '../../assets/img/DeleteIcon.png';
import EditIcon from '../../assets/img/EditIcon.png';

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
  const [deleteVisible, setDeleteVisible] = useState(true);
  const [completeVisible, setCompleteVisible] = useState(true);
  const [editVisible, setEditVisible] = useState(true);

  const handleCompleteTask = () => {
    setPendingVisible(true);
    setDeleteVisible(true);
    setEditVisible(false); // Ocultar botón de Edit
    setCompleteVisible(false);
  };

  const handlePendingTask = () => {
    setPendingVisible(false);
    setEditVisible(true); // Mostrar botón de Edit
    setCompleteVisible(true);
    setDeleteVisible(true);
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

          {completeVisible && (
            <button className="btn-primary" onClick={handleCompleteTask}>
              Complete Task
            </button>
          )}

          {pendingVisible && (
            <button className="btn-pending" onClick={handlePendingTask}>
              Pending
            </button>
          )}

          {editVisible && (
            <button className="btn-edit" onClick={handleEdit}>
              <img src={EditIcon} alt="Edit" />
            </button>
          )}

          {deleteVisible && (
            <button className="btn-delete" onClick={handleDelete}>
              <img src={DeleteIcon} alt="Delete" />
            </button>
          )}

        </div>
      </div>
    </div>
  );
};
