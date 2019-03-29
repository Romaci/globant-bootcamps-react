import React from "react"
import {render} from "react-dom"
import Vehicles from "./Vehicles"
import {BrowserRouter as Router, Route, Link } from "react-router-dom";




class App extends React.Component{

  constructor(){
    super()
      this.state={
        userName:"",
        amountOfMoney:-1,
        hasVehicle: false,
      }
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
  const {name, value, type, checked} = event.target;
  type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  
}
   
render() {
  return (
      <div>  
        <form className="form" onSubmit={this.handleSubmit}>
          <div>
            <span>Username:</span>
            <input type="text" name="userName" placeholder="User Name" onChange={this.handleChange}/>
          </div>
          <div>
            <span>Amount of money:</span>
            <input type="text" name="amountOfMoney" placeholder="Amount of money" onChange={this.handleChange} />
          </div>
          <div>
            <label>
              <input type="checkbox" name="hasVehicle" checked={this.state.hasVehicle} onChange={this.handleChange}/>
              "I have a vehicle"
            </label>
          </div>
        </form>
        <Vehicles/>
      </div>
    )
  }
}
export default App