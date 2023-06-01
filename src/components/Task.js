import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Button from './Button'

const Task = ({task, onDelay, onDelete, doubleClick}) => {
    return (
        <div className='task' onDoubleClick={() => doubleClick(task.id)}> 
            <h3>{task.text}<br />{task.day}</h3>
            <Button text='Delay' color='rgb(255, 80, 80)' onClick={() => onDelay(task.id)} />
            <FaTimes style={{color:'red', cursor:'pointer'}} onClick={() => onDelete(task.id)} />
        </div>
    )
}

export default Task
