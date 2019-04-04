import React, {Fragment} from "react"
import VehInfo from "./VehInfo"
import VehActions from "./VehActions"

function Veh(props) {
    return (

        <>
        <VehInfo  manufacturer = {props.manufacturer} model={props.model} price={props.price}/>
        <VehActions amount= {props.amount}/>
        </>
    )
}

export default Veh