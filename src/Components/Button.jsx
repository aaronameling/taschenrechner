import React from 'react';
import styles from "./Button.module.css"

function Button(props){
    return (
        <div className={styles.div}>
            <button style={{backgroundColor: props.backgroundColor, color: props.color}} className={styles.button} onClick={props.onClick}>
                {props.text}
            </button>
        </div>
    );
}

export default Button;