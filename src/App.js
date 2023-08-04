import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false)
  
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    }
    getTasks();
  }, []);

  const showAddTaskForm = () => {
    setShowAddTask(!showAddTask);
  }

  const addTask = async(task) => {
    const maxId = tasks.reduce((max, task) => task.id > max ? task.id : max, 0);
    const newTask = {id: maxId + 1, ...task};
    try {
      const response = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });
    if (!response.ok) {
      throw new Error('Failed to delete item');
    }
    const data = await response.json();
    setTasks([...tasks, data]);
    } catch (error) {
      console.error(error);
    }
    // iterate over the tasks and find the max id
  }
  const delayTask = async(id) => {
    // filter out the task with the id
    const taskToDelay = tasks.find((task) => task.id === id);
    const d = new Date(taskToDelay.day);
    d.setDate(d.getDate() + 1);
    const updatedData = {...taskToDelay, day : d.toISOString().slice(0,10)};
    
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update item');
      }
  
      const updatedItem = await response.json();
      setTasks(tasks.map((task) => task.id === id ? updatedItem : task));
    } catch (error) {
      console.error(error);
    }
    // setTasks(prevTasks => {
    //   return prevTasks.map((task) => {
    //       if (task.id === id) {
    //           const d = new Date(task.day);
    //           d.setDate(d.getDate() + 1);
    //           return {...task, day : d.toISOString().slice(0,10)}
    //       }
    //       return task;
    //   })
    // });
  }
  const deleteTask = async(id) => {
    try{
        const response = await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'});
        if (!response.ok) {
          throw new Error('Failed to delete item');
        }
    }catch(err){
        console.error(err);
    }
    setTasks(tasks.filter((task) => task.id !== id));
  }
  const toggleReminder = async(id) => {
    // filter out the task with the id and toggle the reminder
    const taskToToggle = tasks.find((task) => task.id === id);
    const updatedData = {...taskToToggle, reminder: !taskToToggle.reminder};
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update item');
      }
  
      const updatedItem = await response.json();
      setTasks(tasks.map((task) => task.id === id ? updatedItem : task));
    } catch (error) {
      console.error(error);
    }
    //setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task));
  }
  return (
    <Router>
    <div className="container">
      <Header title='TASK TRACKER' showForm={showAddTaskForm} showAddTask={showAddTask}/>
      {/* Route the components only for / exactly. Without it all these components would be always there even in /about */}
      <Routes>
        <Route path='/' exact element= {
        <>
          {showAddTask? <AddTask onAdd={addTask}/> : ''}
          {/* send tasks and setTasks as parameter */}
          {tasks.length > 0 ? <Tasks tasks={tasks} delayTask={delayTask} deleteTask={deleteTask} doubleClick={toggleReminder} /> : <h3>No Tasks to Show</h3>}
        </> 
        }
        />
      </Routes>
      {/* Route the about component */}
      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;