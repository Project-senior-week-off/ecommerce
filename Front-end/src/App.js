import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar"
class App extends React.Component {
  state={
    view : "main",
  };
  handleView = e => {
    this.setState({
      
    })
  }
  render(){
    return (
      <div className="App">
        <NavBar handleView={this.handleView}  />

      </div>
    );

  }
}

export default App;
