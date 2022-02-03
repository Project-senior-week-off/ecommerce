import React from "react";
class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      searchKeyWord : ""
    }
  }
  handleChange = (e) =>{
    const{name,value} = e.target;
    this.setState({
      [name] : value,
    })
  } 
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <p  className="navbar-brand">Premium</p>
    <button onClick={this.props.handleProduct} className="btn btn-outline-success" type="submit">Products</button>
    <form className="d-flex">
      <input name="searchKeyWord" value={this.state.searchKeyWord} onChange={this.handleChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
      </div>
    )
  }
}
export default Navbar  ;