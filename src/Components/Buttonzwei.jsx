import React from 'react';
import "./Buttonzwei.css";

function Buttonzwei({styles, text, eventhandler}) {
    return (
        <div className={'box2'}>
            <button className={`button-two ${styles}`}
                    onClick={(event) => {eventhandler(event, text)}}>
                {text}
            </button>
        </div>
    );
}

export default Buttonzwei;