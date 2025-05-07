import React from "react"
import ReactDOM from "react-dom/client"


const heading = React.createElement("h1",{},'Hello')
const jsxHeading = <h1>Hello JSX</h1>

const MyComponent = ()=>{
        return <div>
                {jsxHeading}
        </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<MyComponent/>)

