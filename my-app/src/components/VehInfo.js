import React from "react"



function VehInfo(props){
  return(
    <div>
      <h1 className= "titulo">{props.manufacturer}</h1>
      <ul className="lista">
        <li>Model: {props.model}</li>
        <li>price: $ {props.price}</li>
     </ul>
    </div>
    )
}

export default VehInfo