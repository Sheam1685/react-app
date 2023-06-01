import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, delayTask, deleteTask, doubleClick }) => {
    return (
    <>
        {tasks.map((task) => (
            // {/* key is needed for each item in the list. It is needed for react to know which item is which */}
            <Task key={task.id} task={task}  onDelay={delayTask} onDelete={deleteTask} doubleClick={doubleClick} />
        ))}
    </>
    )
}

export default Tasks;