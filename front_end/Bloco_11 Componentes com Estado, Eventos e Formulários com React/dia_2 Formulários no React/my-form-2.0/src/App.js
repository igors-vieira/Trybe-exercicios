import React from 'react'
import './App.css';

class App extends React.Component {

  state = {
    name: '',
  }

  handleChange = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value })
    
  }

  render() {
    return (
      <fieldset>
        <form>
          <label>Name
            <input type="text" onChange={this.handleChange} name="name" value={this.state.name} maxLength='40'/>        
          </label>
        </form>
      </fieldset>
    );
  }
    
}

export default App;
