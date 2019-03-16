import React from 'react'
import styles from './Comments.css'
import Comment from './Comment/Comment'
const Comments = (props) => {
    const renderComment = (comments) => {
        if(comments !=null){
            const commentUI = comments.map((comment,index) => {
                return <Comment id={comments[index]} /> 
            })
            return commentUI; 
        }
        return null; 
    }
    return (
        <div className={styles.Comments}>
        {renderComment(props.ids)}
        </div>
    )
};
export default Comments