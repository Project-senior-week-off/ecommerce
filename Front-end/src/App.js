import React from 'react';
import './App.css';
import Footer from "./Components/Footer"
import NavBar from "./Components/NavBar"
import SignUpForm from './Components/SignUpForm';
import ImageSlider from './Components/ImageSlider';
import { SliderData } from './Components/SliderData';
import About from './Components/About';
class App extends React.Component {
  state={
    view : "main",
   
  };
 
  render(){
    return (
      <div className="App">
        <NavBar handleView={this.handleView}  />
       
        <Footer/>
       {/* { <About/>} */}
      </div>
    );

  }
}

export default App;
