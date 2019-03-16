import React from 'react'
import styles from './Post.css'
import Comments from '../../Comments/Comments'
const post = (props) => {
    const renderComments =(comments) =>{
        return <Comments ids = {comments} /> 
    }
    return (
    <div className={styles.Post}>
        <p>
          { props.title }  
        </p>
        <p>
            {props.description}
        </p>
        <span>
            {renderComments(props.comments)}
        </span>
    </div>
    )

};
export default post