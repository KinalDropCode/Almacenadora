import React, { useState } from "react";
import { useTask } from "../../shared/hooks/useAddTask";
import toast from "react-hot-toast";

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
        const { nameTask, description, startDate, endDate, author } = formState;
        addTask(nameTask.value, description.value, startDate.value, endDate.value, author.value);
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
    }

    const isSubmitButtonDisabled = isLoading ||
        !formState.nameTask.isValid ||
        !formState.description.isValid ||
        !formState.startDate.isValid ||
        !formState.endDate.isValid ||
        !formState.author.isValid

    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Task Title"
                    value={formState.nameTask.value}
                    onChange={(event) => handleInputValueChange(event.target.value, 'nameTask')}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={formState.description.value}
                    onChange={(event) => handleInputValueChange(event.target.value, 'description')}
                />
                <input
                    type="date"
                    value={formState.startDate.value}
                    onChange={(event) => handleInputValueChange(event.target.value, 'startDate')}
                />
                <input
                    type="date"
                    value={formState.endDate.value}
                    onChange={(event) => handleInputValueChange(event.target.value, 'endDate')}
                />
                <input
                    type="text"
                    placeholder="Author"
                    value={formState.author.value}
                    onChange={(event) => handleInputValueChange(event.target.value, 'author')}
                />
                <button onClick={handleAddTask}>
                    Add Task
                </button>
            </form>
            <span onClick={switchAuthHandler}>

            </span>
        </div>
    );
};