import React from "react"
import Vehicle from "./components/Vehicle"
import vehData from "./vehData"


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

