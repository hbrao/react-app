import React from 'react'

//Functional stateless component
//ES6 arrow function and parameter destructuring. i.e. props getting destructured into name
const AppTitle = ({name}) => (
    <div>
        <h1>Welcome to {name} !</h1>
    </div>
)

export default AppTitle