import React, {useState} from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const changeText = (e) => {
    setText(e.target.value)
  }
  const changeDay = (e) => {
    setDay(e.target.value)
  }
  const changeReminder = (e) => {
    setReminder(e.target.checked)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert('Please add a task')
      return
    }
    onAdd({text, day, reminder})
    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='add-form'>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add Task' value={text} onChange={changeText}/>
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input type='text' placeholder='Add Day & Time' value={day} onChange={changeDay}/>
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox' checked={reminder}  value={reminder} onChange={changeReminder}/>
      </div>
      <input type='submit' value='Save Task' className='btn btn-block' onClick={onSubmit} />
    </form>
  )
}

export default AddTask
