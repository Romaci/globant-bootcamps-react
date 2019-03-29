import React from "react"
import ReactDOM from "react-dom"




class VehAction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: props.amount
        }
    this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        const {name} = event.target
       name === "increment" ? this.setState(prevState => {return { count: prevState.count  + 1} }) : this.setState(prevState => {
            if(prevState.count > 0){
                return { count: prevState.count - 1} }
              return{count:0}
         })
    }

    
    render() {
        return (
            <div>
                <h4> Amount: {this.state.count}  </h4>
                <button name="increment" onClick={this.handleClick}>Buy</button>
                <button name="decrement" onClick={this.handleClick}>Sell</button>
            </div>
        )
    }
}
export default VehAction 