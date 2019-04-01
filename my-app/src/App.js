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
      this.handleInputChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
  handleChange(event) {
  const {name, value, type, checked} = event.target;
  type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    return(
      <Link> </Link>
    )
  }
   
render() {
  return (
    <Router>
      <div>  
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" name="userName" placeholder="User Name" onChange={this.handleInputChange}/>
          </label>
          <br/>
          <label>
            Amount of money:
            <input type="text" name="amountOfMoney" placeholder="Amount of money" onChange={this.handleInputChange} />
          </label>
          <br/>
          <label>
              "I have a vehicle"
              <input type="checkbox" name="hasVehicle" checked={this.state.hasVehicle} onChange={this.handleInputChange}/>
          </label>
          <br/>
        </form>
        <Link to="/Vehicles">Summit</Link>
        <br/>
        <Link to="/">Back</Link>
      </div>
      <Route path="/Vehicles" component={Vehicles} />
    </Router>
    )
  }
}
export default App