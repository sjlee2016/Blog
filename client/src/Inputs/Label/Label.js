import React from 'react'
import styles from './Label.css'
const Label = (props) => {
    return (
        <div className={styles.Label} >
          <p> {props.title} </p>
        </div>
    )
};
export default Label