import React from 'react'
import styles from './Post.css'
const post = (props) => {
    return (
    <div className={styles.Post}>
        <p>
          { props.title }  
        </p>
        <p>
            {props.description}
            </p>
            </div>
                )

};
export default post