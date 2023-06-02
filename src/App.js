import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';

const initialTasks = [  
  {
      id: 1,
      text: 'Doctors Appointment',
      day: '2023-02-05',
      reminder: true,
  },
  {
      id: 2,
      text: 'Meeting at School',
      day: '2023-02-06',
      reminder: true,
  },
  {
      id: 3,
      text: 'Food Shopping',
      day: '2023-02-07',
      reminder: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [showAddTask, setShowAddTask] = useState(false)

  const showAddTaskForm = () => {
    setShowAddTask(!showAddTask);
  }

  const addTask = (task) => {
    // iterate over the tasks and find the max id
    const maxId = tasks.reduce((max, task) => task.id > max ? task.id : max, 0);
    const newTask = {id: maxId + 1, ...task};
    setTasks([...tasks, newTask]);
  }
  const delayTask = (id) => {
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
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task));
    console.log(id);
  }
  return (
    <div className="container">
      <Header title='TASK TRACKER' showForm={showAddTaskForm} showAddTask={showAddTask}/>
      {showAddTask? <AddTask onAdd={addTask}/> : ''}
      {/* send tasks and setTasks as parameter */}
      {tasks.length > 0 ? <Tasks tasks={tasks} delayTask={delayTask} deleteTask={deleteTask} doubleClick={toggleReminder} /> : <h3>No Tasks to Show</h3>}
    </div>
  );
}

// same component but as a class component
// class App extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <Header />
//         <h2>Hello World!!!</h2>
//       </div>
//     );
//   }
// }

export default App;