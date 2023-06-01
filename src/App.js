import Header from './components/Header';
import Tasks from './components/Tasks';
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
  return (
    <div className="container">
      <Header title='TASK TRACKER'/>
      {/* send tasks and setTasks as parameter */}
      <Tasks tasks={tasks} setTasks={setTasks} />
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
