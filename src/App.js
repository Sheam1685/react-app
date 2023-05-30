import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="container">
      <Header title='TASK TRACKER'/>
      <Tasks />
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
