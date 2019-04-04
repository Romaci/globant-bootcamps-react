import React, {Fragment} from "react";
import {render} from "react-dom";
import { withRouter } from "react-router-dom";




class UserForm extends React.Component{
  constructor(){
    super()
    this.state={
      userName:"",
      amountOfMoney:-1,
      hasVehicle: false,
      redirect: false,
      errorName:"",
      errorMoney:"",
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
    [name]: value
    });
   }

  validate(){
    let usernameError=""
    let moneyError=""
    if(this.state.userName === ""){
      usernameError= "Username required"
    }
    if(this.state.amountOfMoney === -1 || isNaN(this.state.amountOfMoney)){
      moneyError="Amount of money required"
    }
    if(usernameError||moneyError){
      this.setState({
        errorName: usernameError,
        errorMoney: moneyError,
      })
      return false;
    }
    else {return true;}      
  }

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid){
      this.props.history.push("/Vehicles")
    }
  }
 
  render() {
    return (
      <>  
        <form className="form"  onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" name="userName" placeholder="User Name" onChange={this.handleInputChange}/>
          </label>
          <br/>
          <p>{this.state.errorName}</p>
          <br/>
          <label>
            Amount of money:
            <input type="text" name="amountOfMoney" placeholder="Amount of money" onChange={this.handleInputChange} />
          </label>
          <br/>
          <p>{this.state.errorMoney}</p>
          <br/>
          <label>
            "I have a vehicle"
            <input type="checkbox" name="hasVehicle" checked={this.state.hasVehicle} onChange={this.handleInputChange}/>
          </label>
          <br/>
            <input type="submit" value="Submit" />
          </form>       
      </>
    )}
  }
  export default withRouter(UserForm);