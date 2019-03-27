import React from "react"
import {render} from "react-dom"



class CarAction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: props.carsOwned
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
    }
    
    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleClick2() {
        this.setState(prevState => {
           if(prevState.count > 0){
               return { count: prevState.count - 1} }
             return{count:0}
        })
    }
    
    render() {
        return (
            <div>
                <h1>You have {this.state.count} cars </h1>
                <button onClick={this.handleClick}>Buy</button>
                <button onClick={this.handleClick2}>Sell</button>
            </div>
        )
    }
}
export default CarAction 