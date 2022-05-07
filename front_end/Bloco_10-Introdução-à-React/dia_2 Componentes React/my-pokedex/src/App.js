
import './App.css';
import pokemons from './Data'

function App() {
  return (
    <div className="App">
    <header>
      <h1>Pokedex</h1>
    </header>
    <section>
    {pokemons.map((pokemon) => (
      <article key={pokemon.id}>
      <img src={pokemon.image} alt={`Foto do pokemon ${pokemon.name}`}/>
      <h3>tipo: {pokemon.type}</h3>
      <h5>Peso: {pokemon.averageWeight.value}{pokemon.averageWeight.measurementUnit}</h5>
      </article>
    ) )}
    </section>
    </div>
    );
}

export default App;
