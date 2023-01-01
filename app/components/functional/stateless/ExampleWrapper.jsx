import React from "react";
import styles from './ExampleWrapper.module.css'

const ExampleWrapper = (props) => {
    return (
        <div className={styles.container}>{props.children}</div>
    )
}

export default ExampleWrapper