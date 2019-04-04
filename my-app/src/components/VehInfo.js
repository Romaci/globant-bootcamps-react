import React, {Fragment} from "react"



function VehInfo(props){
  return(
    <>
      <h1 className= "titulo">{props.manufacturer}</h1>
      <ul className="lista">
        <li>Model: {props.model}</li>
        <li>price: $ {props.price}</li>
     </ul>
    </>
    )
}

export default VehInfo