import React, {Component} from 'react'
import styles from './Comment.css'
class Comment extends Component {

    constructor(props){
        super(props);
        this.state = {
          comment: null,
          render : false 
        };
      }

    renderComment = (comment) => {
        if(comment != null ){ 
            return (
              <div>
            <p> {comment.text}  </p>
            <p> {comment.posted} </p>
            </div>
            )
        }
        return null;
    }
    
      // Fetch the list on first mount
      componentDidMount() {
        this.getComment();
      }
    
      // Retrieves the list of items from the Express app
      getComment = () => {
        if(this.props.id != null) {
        fetch('/api/comment/' + this.props.id)
        .then(response => response.json())
        .then(data => this.setState({comment:data.comments}))
        // console.log(this.state.data);
        // return this.renderComment(this.state.data)
        }
      }
  
      
    render(){
      
      return (<div> {this.renderComment(this.state.comment)} </div>)
    }
};
export default Comment
