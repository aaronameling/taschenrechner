import React from 'react';
import "./Button.css";

function Button({styles, text, eventhandler}){
    return (
        <div className={'box1'}>
            <button className={`button-one ${styles}`}
                    onClick={(event)=> {eventhandler(event, text)}}>
                {text}
            </button>
        </div>
    );
}

export default Button;