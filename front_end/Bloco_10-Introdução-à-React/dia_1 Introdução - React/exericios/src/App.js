import './App.css';

const tarefas = ['acordar', 'jogar', 'estudar', 'comer', 'jogar dnv', 'Mimir']

const task = ( value ) => {
  return (
    <li key={value}>{value}</li>
  );
}

function App() {
  return (
    <><div className="App">
      hello, world!!
    </div ><div className="App">
        {tarefas.map((tarefa) => task(tarefa))}
      </div></>
      
  );
}

export default App;
