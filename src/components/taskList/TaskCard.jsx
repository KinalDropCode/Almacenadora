import { useState } from "react";
import "./task1.css";
import DeleteIcon from "../../assets/img/DeleteIcon.png";
import EditIcon from "../../assets/img/EditIcon.png";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { format, isValid } from "date-fns";
import {putCompleteTask} from "../../services/api"

export const TaskCard = ({
  id,
  nameTask,
  startDate,
  endDate,
  statusTask,
  author,
  description,
  onDeleteTask,
  onEditTask,
}) => {
  const [taskId] = useState(id);
  const [pendingVisible, setPendingVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(true);
  const [completeVisible, setCompleteVisible] = useState(true);
  const [editVisible, setEditVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);

  console.log(typeof startDate);
  const navigate  = useNavigate()
  // Función para formatear las fechas
  const formatDate = (date) => {
    return isValid(new Date(date)) ? format(new Date(date), "yyyy-MM-dd") : "";
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedTask((prevState) => ({
      ...prevState,
      [name]:
        name === "startDate" || name === "endDate" ? formatDate(value) : value, // Formatear la fecha antes de actualizar el estado
    }));
  };

  const [editedTask, setEditedTask] = useState({
    nameTask,
    startDate: formatDate(startDate), // Formatear la fecha antes de pasarla al estado
    endDate: formatDate(endDate), // Formatear la fecha antes de pasarla al estado
    statusTask,
    author,
    description,
  });

  const handleSaveChanges = () => {
    onEditTask(editedTask); // Puedes enviar los cambios al servidor aquí
    setShowModal(false); // Cerrar el modal después de guardar los cambios
  };

  const handleCompleteTask = () => {
    setPendingVisible(true);
    setDeleteVisible(true);
    setEditVisible(false);
    setCompleteVisible(false);
  };

  const handlePendingTask = () => {
    setPendingVisible(false);
    setEditVisible(true);
    setCompleteVisible(true);
    setDeleteVisible(true);
  };

  const handleDelete = () => {
    onDeleteTask(id);
  };

  const handleEdit = () => {
    setShowModal(true); // Mostrar el modal al hacer clic en el botón de editar
  };

  const handleNavigateToComplete = (id) => {
    navigate(`/complete/${taskId}`);
  };

  const completeTask = async () => {
    try {
      const response = await putCompleteTask(taskId);
      window.location.reload();
    } catch (error) {
      console.error("Error completing task:", error);
    }
  }

  const statusColor =
    statusTask === "Completed" ? "text-success" : "text-danger";

  return (
    <div className="task-container">
      <div className="task" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="task-title">{nameTask}</h5>
          <h6 className="task-date">{startDate}</h6>
          <h6 className="task-date">{endDate}</h6>
          <h6 className={`task-status ${statusColor}`}>{statusTask}</h6>
          <p className="task-author">{author}</p>
          <p className="task-description">{description}</p>

          {/* {completeVisible && (
            <button className="btn-primary" onClick={handleCompleteTask}>
              Complete Task
            </button>
          )} */}

          
            <button className="btn-primary" onClick={completeTask}>
              Complete Task
            </button>
          
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

      {/* Modal para editar la tarea */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input
              type="text"
              name="nameTask"
              value={editedTask.nameTask} // Cambiado de nameTask a editedTask.nameTask
              onChange={handleInputChange}
              placeholder="Task Title"
            />
            <input
              type="text"
              name="description"
              value={editedTask.description} // Cambiado de description a editedTask.description
              onChange={handleInputChange}
              placeholder="Description"
            />
            <input
              type="date"
              name="startDate"
              value={editedTask.startDate} // Cambiado de formatDate(startDate) a editedTask.startDate
              onChange={handleInputChange}
              placeholder="Start Date"
            />
            <input
              type="date"
              name="endDate"
              value={editedTask.endDate} // Cambiado de formatDate(endDate) a editedTask.endDate
              onChange={handleInputChange}
              placeholder="End Date"
            />
            <input
              type="text"
              name="author"
              value={editedTask.author} // Cambiado de author a editedTask.author
              onChange={handleInputChange}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-primary" onClick={handleSaveChanges}>
            Save Changes
          </button>
          <button className="btn-secondary" onClick={() => setShowModal(false)}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
