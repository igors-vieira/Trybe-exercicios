import './App.css';

const Task = ({ value }) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      hello, world!!
      <Task value={'abc'}/>
    </div>
  );
}

export default App;
