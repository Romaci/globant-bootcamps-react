import React from "react"
import {render} from "react-dom"
import Car from "./components/Car"



class App extends React.Component{
    render(){
        return(
            <div>
                <Car/>
            </div>
        )
    }
}


export default App