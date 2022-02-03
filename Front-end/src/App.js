import React from 'react';
import './App.css';
import Footer from "./Components/Footer"
import NavBar from "./Components/NavBar"
import SignUpForm from './Components/SignUpForm';
import ImageSlider from './Components/ImageSlider';
import { SliderData } from './Components/SliderData';
class App extends React.Component {
  state={
    view : "main",
   
  };
 
  render(){
    return (
      <div className="App">
        <NavBar handleView={this.handleView}  />
       <ImageSlider slides={SliderData} />
        <Footer/>
      </div>
    );

  }
}

export default App;
