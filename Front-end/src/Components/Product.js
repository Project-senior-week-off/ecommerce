import React from "react";
export default class Product extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data : [],
        };
    }
    componentDidMount() {
    fetch('http://localhost:8000/api/data')
    .then(response=>response.json())
    .then(
        data => {
            this.setState({
                data : data
            })
        }
    )
    console.log(this.state.data)
    }
    render() {
        return (
            <div>
                {this.state.data.map(prodcut=>{
                    return (
                        <div key={prodcut.id} >
                            <p>{prodcut.name}</p>
                            <img src={prodcut.pic} alt=""/>
                            <p>{prodcut.price}</p>
                            <p>{prodcut.descr}</p>
                            <button>Find out more</button>

                        </div>
                    )
                })}

            </div>
        )
    }
}