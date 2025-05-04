import React from "react"
import ReactDOM from "react-dom/client"
//pure js injecting into html
        // const heading = document.createElement("h1")
        // heading.innerHTML = 'KK React'
        // const root = document.getElementById("root")
        // root.appendChild(heading)

        {/* using react */}
        const heading = React.createElement("h1", {id:"heading"}, "KK React")

        //creating root to our library
        const root =  ReactDOM.createRoot(document.getElementById("root"))

// creating nested tags
        const parent = React.createElement("div", 
            {id:"parent"},
            React.createElement("div",{id:"child"}, 
            React.createElement("h1",{id:"heading"}, "I'm h1 tag"))
        )
// creating nested tags and more than two child in one  tag
        const parent1 = React.createElement("div", 
            {id:"parent"},
            React.createElement("div",{id:"child"}, 
            [React.createElement("h1",{id:"heading"}, "I'm h1 tag"),
            React.createElement("h2",{id:"heading"}, "I'm h2 tag")
            ])
        )

// creating nested tags and more than two child in one tag
const parent2 = React.createElement("div", 
    {id:"parent"},
    [React.createElement("div",{id:"child"}, 
    [React.createElement("h1",{id:"heading"}, "I'm h1 tag"),
    React.createElement("h2",{id:"heading"}, "I'm h2 tag")
    ]), React.createElement("div",{id:"child"}, 
        [React.createElement("h1",{id:"heading"}, "I'm h1 tag"),
        React.createElement("h2",{id:"heading"}, "I'm h2 tag")
        ])]
)

root.render(parent2)
