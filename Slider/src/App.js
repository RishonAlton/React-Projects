import React, {useState} from "react"
import Reviews from "./Reviews"
import data from "./data"


const App = () => {

    const [people, setPeople] = useState(data)

    return (
        <main>
            <div className="title">
                <h2>
                    <span>/</span>
                    Reviews
                </h2>
            </div>
            <Reviews people={people} />
        </main>
    )
    
}


export default App
