import React from 'react'
import Post from './Post/Post'
import styles from './Posts.css'
const posts = (props) => {

    const renderPost = () => {
        if(props.data != null && props.show == true) {
            const postUI = props.data.posts[0].map((post, index) => {
                return <Post title={post.title} description={post.description} /> 
            });  
            return postUI;
        }
        console.log(props);
        return <p>No data </p>
    }
    return(
        <div className={styles.Posts}>
        {renderPost()}
        </div>
    )
};
export default posts