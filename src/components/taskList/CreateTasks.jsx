import React, { useState } from "react";
import { useTask } from "../../shared/hooks/useAddTask";
import './createTasks1.css'

export const AddTask = ({ switchAuthHandler }) => {
    const { addTask, isLoading } = useTask();

    const [formState, setFormState] = useState({
        nameTask: {
            value: '',
            isValid: false,
            showError: false
        },
        description: {
            value: '',
            isValid: false,
            showError: false
        },
        startDate: {
            value: '',
            isValid: false,
            showError: false
        },
        endDate: {
            value: '',
            isValid: false,
            showError: false
        },
        author: {
            value: '',
            isValid: false,
            showError: false
        }
    });

    const [showErrorOnce, setShowErrorOnce] = useState(false);

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }));
    }

    const handleAddTask = (event) => {
        event.preventDefault();

        // Verificar si algún campo está vacío
        const isAnyFieldEmpty = Object.values(formState).some(field => field.value === '');

        if (isAnyFieldEmpty && !showErrorOnce) {
            setShowErrorOnce(true);
            setFormState(prevState => Object.keys(prevState).reduce((acc, key) => {
                acc[key] = { ...prevState[key], showError: true };
                return acc;
            }, {}));
            return;
        }

        // Reiniciar el estado si no hay campos vacíos
        setShowErrorOnce(false);
        setFormState({
            nameTask: {
                value: '',
                isValid: false,
                showError: false
            },
            description: {
                value: '',
                isValid: false,
                showError: false
            },
            startDate: {
                value: '',
                isValid: false,
                showError: false
            },
            endDate: {
                value: '',
                isValid: false,
                showError: false
            },
            author: {
                value: '',
                isValid: false,
                showError: false
            }
        });

        // Agregar la tarea si no hay campos vacíos
        const { nameTask, description, startDate, endDate, author } = formState;
        addTask(nameTask.value, description.value, startDate.value, endDate.value, author.value);
    }

    const isSubmitButtonDisabled = isLoading ||
        !formState.nameTask.isValid ||
        !formState.description.isValid ||
        !formState.startDate.isValid ||
        !formState.endDate.isValid ||
        !formState.author.isValid

    return (
        <div className="add-task-container">
            <h2 className="add-task-title">Crear Tareas</h2>
            {showErrorOnce && <p className="error-message">Por favor, completa todos los campos.</p>}
            <form className="add-task-form">
                <input
                    type="text"
                    className="add-task-input"
                    placeholder="Task Title"
                    value={formState.nameTask.value}
                    onChange={(event) => handleInputValueChange(event.target.value, 'nameTask')}
                />
                <input
                    type="text"
                    className="add-task-input"
                    placeholder="Description"
                    value={formState.description.value}
                    onChange={(event) => handleInputValueChange(event.target.value, 'description')}
                />
                <input
                    type="date"
                    className="add-task-input"
                    value={formState.startDate.value}
                    onChange={(event) => handleInputValueChange(event.target.value, 'startDate')}
                />
                <input
                    type="date"
                    className="add-task-input"
                    value={formState.endDate.value}
                    onChange={(event) => handleInputValueChange(event.target.value, 'endDate')}
                />
                <input
                    type="text"
                    className="add-task-input"
                    placeholder="Author"
                    value={formState.author.value}
                    onChange={(event) => handleInputValueChange(event.target.value, 'author')}
                />
                <button className="add-task-button" onClick={handleAddTask} >
                    Add Task
                </button>
                
            </form>
            <span onClick={switchAuthHandler}></span>
        </div>
    );
};
