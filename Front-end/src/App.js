import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar"
import SignUpForm from './Components/SignUpForm';
class App extends React.Component {
  state={
    view : "main",
    isLogged : false,
  };
  handleView = e => {
    this.setState({
      
    })
  }
  render(){
    return (
      <div className="App">
        <NavBar handleView={this.handleView}  />
        <SignUpForm/>
      </div>
    );

  }
}

export default App;
