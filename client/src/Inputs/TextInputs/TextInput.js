import React from 'react'
import styles from './TextInput.css'
import Label from '../Label/Label'
const TextInput = (props) => {
 
    const getInput = () =>{
        let inputUI = null; 
        switch(props.height){
            case "large": inputUI=
           ( <textarea className={styles.Large} type="text" name={props.name} />);
            break;
            case "medium": inputUI=
             (<input className={styles.Medium} type="text" name={props.name} />);
             break;
            default : 
            inputUI=
            (<input className={styles.Small} type="text" name={props.name} />);
            break;
        }
        return inputUI;
    }
        return (
        <div className={styles.TextInput}>
        <Label title= {props.label} />
        {getInput()}
        </div>
        );
  
};
export default TextInput