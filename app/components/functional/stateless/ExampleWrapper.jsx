import React from "react";
import './ExampleWrapper.css'

const ExampleWrapper = (props) => {
    return (
        <div className="container">{props.children}</div>
    )
}

export default ExampleWrapper