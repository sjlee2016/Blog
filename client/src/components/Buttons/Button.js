import React from 'react'
import styles from './Button.css'
const Button = (props) => {
    return (
        <div className={styles.Button} >
         <input type="submit"  value={props.value}/>
        </div>
    )
};
export default Button