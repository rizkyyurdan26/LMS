/*eslint-disable*/
import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count:0
            
        }
        console.log("constructor")
    }

    componentDidMount() {
        this.setState({count: 1})
        console.log("component did mount")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("component did update")
        if(this.state.count === 11){
            this.setState({count: 1})
        }
        else if(this.state.count === 0){
            this.setState({count: 1})
        }
    }

    render() {
       return (
        <div className="flex items-center mb-5">
            <button 
            className="bg-black text-white p-3" onClick={() => this.setState({count: this.state.count - 1})}>
                -
            </button>
            <h1 className="mr-5 ml-5">{this.state.count}</h1>
            <button 
            className="bg-black text-white p-3" 
            onClick={() => this.setState({count: this.state.count + 1})}>
            +
            </button>
            {console.log("render")}
        </div>
       )
    }
}

export default Counter