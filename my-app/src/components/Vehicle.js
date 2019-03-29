import React from "react"
import VehInfo from "./VehInfo"
import VehActions from "./VehActions"

function Veh(props) {
    return (

        <div>
        <VehInfo  manufacturer = {props.manufacturer} model={props.model} price={props.price}/>
        <VehActions amount= {props.amount}/>
        </div>
    )
}

export default Veh