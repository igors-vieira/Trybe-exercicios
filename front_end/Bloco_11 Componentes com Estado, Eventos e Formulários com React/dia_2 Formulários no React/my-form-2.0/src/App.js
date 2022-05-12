import React from 'react'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <fieldset>
        <form>
          <label>Name
            <input type="text" name="name"/>        
          </label>
        </form>
      </fieldset>
    );
  }
    
}

export default App;
