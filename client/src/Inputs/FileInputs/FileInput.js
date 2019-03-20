import React from 'react'
import styles from './FileInput.css'
import Label from '../Label/Label'
const FileInput = (props) => {
    return(  
        <div className={styles.FileInput}>
    <input type="file" name="file" id="file" />
    <label className={styles.Label} htmlFor="file">Upload Background Image</label>
    </div>
    );
};
export default FileInput