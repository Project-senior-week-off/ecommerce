import React,{Component} from "react";
import "../App.css"
let initState={
    name:"",
    email:"",
    password : "",
    nameError : "",
    emailError :"",
    passwordError :"",
}
export default class SignUpForm extends Component {
    state=initState
     
    handleChange = e => {
        const {name,value} = e.target;
        this.setState({
            [name] : value,
        })
    }
    validate = () => {
        if(!this.state.email.includes('@')) {
            this.setState({
                emailError : "email Error",
            })
            return false;

        }
        else if (this.state.name.length===0 ) {
            this.setState({
                nameError : "invalid name",
            })
            return false;

        }
        else if (this.state.password.length<8) {
            this.setState({
                passwordError : "invalid password",
            })
            return false;

        }
        return true;
    }
    handleSubmit = e => {
        e.preventDefault();
        if(this.validate()){
            console.log(this.state);
            this.setState(initState);
        }
    }
    render() {
        return (
                <div className="signup" >
            <form>
                <div style={{marginBottom:"10px"}} >

                <input type="text" onChange={this.handleChange} value={this.state.name} name="name" placeholder="Name" />
                <div style={{ fontSize: 12, color: "red" }} >{this.state.nameError ? "Invalid Name" : null }</div>
                </div>
                <div style={{marginBottom:"10px"}} >
                <input type="text" onChange={this.handleChange} value={this.state.email} name="email" placeholder="Email" />
                <div style={{ fontSize: 12, color: "red" }} >{this.state.emailError ? "Invalid email" : null }</div>
                </div>
                <div style={{marginBottom:"10px"}} >
                <input onChange={this.handleChange} type="password" value={this.state.password} name="password" placeholder="Password" />
                <div style={{ fontSize: 12, color: "red" }} >{this.state.passwordError ? "password must be over 8 characters!" : null }</div>
                </div>
                <button style={{
                    backgroundColor:"Gray",
                    marginTop : "2px"
                }} onClick={this.handleSubmit} >Sign In</button>
            </form>
            </div>
        )
    }
}