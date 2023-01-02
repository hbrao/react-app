import React from "react";
import styles from './ExampleWrapper.module.css'

//TODO Convert this to class based component with componentDidCatch
const ExampleWrapper = (props) => {
    return (
        <div className={styles.container}>{props.children}</div>
    )
}

export default ExampleWrapper