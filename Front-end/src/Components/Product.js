import React from "react";
export default class Product extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data : [],
        };
    }
    componentDidMount() {
    fetch('localhost/data')
    .then(response=>response.json())
    .then(
        data => {
            this.setState({
                data : data
            })
        }
    )
    
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
                            <p>{prodcut.desc}</p>

                        </div>
                    )
                })}

            </div>
        )
    }
}