import React from 'react';

function Button({stylesDiv, styles, text, eventhandler}){
    return (
        <div className={`${stylesDiv}`}>
            <button className={`${styles}`}
                    onClick={(event)=> {eventhandler(event, text)}}>
                {text}
            </button>
        </div>
    );
}

export default Button;