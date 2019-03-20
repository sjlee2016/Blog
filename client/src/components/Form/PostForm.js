import React, {Component} from 'react'
import styles from './PostForm.css'
import Aux from '../../hoc/Aux';
import TextInput from '../../Inputs/TextInputs/TextInput';
import FileInput from '../../Inputs/FileInputs/FileInput';
import Button from '../../components/Buttons/Button'
class PostCreator extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('/create/post', {
          method: 'POST',
          body: data,
        });
      }
    
    render(){
        return (
        <div className={styles.PostForm} >
        <Aux>
            <form onSubmit={this.handleSubmit}>
                   <TextInput label="Title" type="text" name="title" height="small" /> 
                   <TextInput label="Subtitle" type="text" name="sub-title" height="small"/> 
                   <TextInput label="Content" type="text" name="content" height="large" /> 
                   <FileInput label="Background Image" name="image"/>
                   <Button value="submit"/>
            
            </form>
            </Aux>
        </div>
    ); 
}
};
export default PostCreator;