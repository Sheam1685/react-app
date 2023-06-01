import React from 'react'

const Tasks = ({ tasks, setTasks }) => {
    const onClick = (id) => {
        setTasks(prevTasks => {
            return prevTasks.map((task) => {
                if (task.id === id) {
                    const d = new Date(task.day);
                    d.setDate(d.getDate() + 1);
                    return {...task, day : d.toISOString().slice(0,10)}
                }
                return task;
            })
        });
    }
    return (
    <>
        {tasks.map((task) => (
            // {/* key is needed for each item in the list. It is needed for react to know which item is which */}
            <div className='task' key={task.id}> 
            <h3 style={{width:'33%'}}>{task.text}</h3>
            <code>{task.day}</code>
            {/* send task id as parameter */}
            <button onClick={() => onClick(task.id)} className='btn'>Delay</button>
            </div>
        ))}
    </>
    )
}

export default Tasks;