import { useState as useSt } from 'react';
import './App.css';
import { Add } from './components/Add.jsx';
import { Main } from './components/Main.jsx'
import { useTask } from './hooks/useTask';

function TaskApp() {
	const {
		pendingTasksCount,
    tasks,
  	handleFinishTask,
		handleRemoveTask,
		tasksCount,
    handleUpdateTask,
		handleNewTask,
	} = useTask();

	return (
		<>
			<div className='task-card'>
				<h1>Tareas</h1>
				<div className='task-counter'>
					<h3>
						Tareas por realizar: <span>{pendingTasksCount}</span>
					</h3>
          <h3>
						Total de tareas: <span>{tasksCount}</span>
					</h3>
				</div>

				<div className='add-task'>
					<h3>Agregar Tarea</h3>
					<Add handleNewTask={handleNewTask} />
				</div>

				<TaskDisplay
					tasks={tasks}
					handleUpdateTask={handleUpdateTask}
					handleRemoveTask={handleRemoveTask}
					handleFinishTask={handleFinishTask}
				/>
			</div>
		</>
	);
}

export default TaskApp;
