import React from "react"
import {render} from "react-dom"


function CarInfo(props){
  return(
    <div>
      <h1 className= "titulo">Car Info</h1>
      <ul className="lista">
        <li>Brand: {props.info.brand}</li>
        <li>Model: {props.info.model}</li>
        <li>Year: {props.info.year}</li>
     </ul>
    </div>
    )
}

export default CarInfo