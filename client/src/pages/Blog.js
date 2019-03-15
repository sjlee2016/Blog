import React, { Component } from 'react';
import Posts from '../components/Posts/Posts';
import styles from '../pages/Blog.css'
class Blog extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      data : null,
      render: false
    };
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getPost();
    this.postHandler();
  }

  // Retrieves the list of items from the Express app
  getPost = () => {
    fetch('/blog/page/0')
    .then(response => response.json())
    .then(data => this.setState({ data: data}))
  }

  postHandler = () => {
      this.setState({render:true})
    
  } 

  render() {
  
    return (
      <div className={styles.Blog}>
      <Posts data={this.state.data} show={this.state.render}/> 
      </div>
    );
  }
}

export default Blog;