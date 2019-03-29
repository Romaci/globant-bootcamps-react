import React from "react"
import ReactDOM from "react-dom"
import Vehicle from "./components/Vehicle"
import vehData from "./vehData"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Vehicles(){
  const vD = vehData.map(veh => <Vehicle key={veh.id} manufacturer = {veh.manufacturer} model={veh.model} price={veh.price} amount={veh.amount}/> )
  return(
    <div>
       <ul>
          {vD}
        </ul>
    </div>
  )
}


export default Vehicles

