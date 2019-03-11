import React, { Component } from 'react';

class Blog extends Component {
  // Initialize the state
  
  constructor(props){
    super(props);
    this.state = {
        posts: [],
        loading: false
    }
  }




  // Fetch the list on first mount
  componentDidMount() {
    this.getPost();
  }

 // Retrieves the list of items from the Express app
  getPost = () => {
    fetch('/blog/page/0')
    .then(res =>{res.json()})
    .then(list => this.setState({ list }))
    
}

    // .then(res => res.json())
    // .then(json => this.setState({ posts : json["posts"],
    //     page : json["page"], isEndPage : json["isEndPage"] 
    //  }))


  render() {
      const { posts }  = this.state.posts;
      console.log(this.state);
    return (
      <div className="App">
        <h1>List of Items</h1>
      </div>
    );
  }
}

export default Blog;