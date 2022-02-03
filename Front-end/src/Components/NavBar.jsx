import React from "react";
import SignUpForm from "./SignUpForm";
import ImageSlider from "./ImageSlider";
import {SliderData} from "./SliderData"
import About from "./About"
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyWord: "",
      wantsToLog: false,
      view : "main"
    };
  }
  handleAbout = () => {
    
    this.setState({
      view : "about"
    })
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleLog = () => {
    this.setState({
      wantsToLog: true,
    });
  };
  handleMainFromAbout = () => {
    this.setState({
      view : "main"
    })
  }
  render() {
     if (this.state.view==="about") {
      return (
        <div>
          <About/>
          <button onClick={this.handleMainFromAbout} >Go Back To Main Page</button>
        </div>
      )
    }
    else if (!this.state.wantsToLog  ) {
      return (
        <div>
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <p className="navbar-brand">Premium</p>
              <button
                onClick={this.handleLog}
                className="btn btn-outline-success"
                type="submit"
              >
                Sign In
              </button>
              <button
                onClick={this.props.handleProduct}
                className="btn btn-outline-success"
                type="submit"
              >
                Products
              </button>
              <button onClick={this.handleAbout} className="btn btn-outline-success" type="submit">
                  About
                </button>
              <form className="d-flex">
                <input
                  name="searchKeyWord"
                  value={this.state.searchKeyWord}
                  onChange={this.handleChange}
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
                
              </form>
            </div>
          </nav>
          <ImageSlider slides={SliderData} />
        </div>
      );
    } else if (this.state.wantsToLog) {
      return (
        <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <p className="navbar-brand">Premium</p>
            <button
              onClick={this.handleLog}
              className="btn btn-outline-success"
              type="submit"
            >
              Sign In
            </button>
            <button
              onClick={this.props.handleProduct}
              className="btn btn-outline-success"
              type="submit"
            >
              Products
            </button>
            <button onClick={this.handleAbout} className="btn btn-outline-success" type="submit">
                  About
                </button>
            <form className="d-flex">
              <input
                name="searchKeyWord"
                value={this.state.searchKeyWord}
                onChange={this.handleChange}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
             
            </form>
          </div>
        </nav>
        <SignUpForm/>
      </div>
      )
   
    }
  
    return null;
  }
}
export default Navbar;
