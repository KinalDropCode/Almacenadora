import { useEffect as useEff, useReducer as useRed } from 'react';
import { mainReducer } from '../../mainReduce.js';

export const useTask = () => {
	const initialState = [];

	const init = () => {
		return JSON.parse(localStorage.getItem('tasks')) || [];
	};

	const [tasks, dispatch] = useRed(
		mainReducer,
		initialState,
		init
	);

	const tasksCount = tasks.length;
	const pendingTasksCount = tasks.filter(task => !task.completed).length;

	useEff(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	const handleNewTask = task => {
		const action = {
			type: 'Add Task',
			payload: task,
		};

		dispatch(action);
	};

	const handleRemoveTask = id => {
		const action = {
			type: 'Remove Task',
			payload: id,
		};

		dispatch(action);
	};

	const handleFinishTask = id => {
		const action = {
			type: 'Finish Task',
			payload: id,
		};

		dispatch(action);
	};

	const handleUpdateTask = (id, description) => {
		const action = {
			type: 'Update Task',
			payload: {
				id,
				description,
			},
		};

		dispatch(action);
	};

	return {
		tasks,
		tasksCount,
		pendingTasksCount,
		handleNewTask,
		handleRemoveTask,
		handleFinishTask,
		handleUpdateTask,
	};
};
