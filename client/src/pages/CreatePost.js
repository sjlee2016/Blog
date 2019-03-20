import React, {Component} from 'react';
import PostForm from '../components/Form/PostForm'; 
class CreatePost extends Component {
    constructor(props){
        super(props);
        this.state = {
          data : null,
          render: false
        };
    }

    render(){
        return (<PostForm /> );
    }
}

export default CreatePost;