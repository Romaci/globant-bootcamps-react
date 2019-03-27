import React from "react"
import {render} from "react-dom"
import CarInfo from "./CarInfo"
import CarActions from "./CarActions"


function Car() {
    return (
        <div>
        <CarInfo info={{brand: "Ford", model: "focus", year:"2018"}} />
        <CarActions carsOwned={2} />
        </div>
    )
}

export default Car