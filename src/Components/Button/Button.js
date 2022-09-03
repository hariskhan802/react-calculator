import React, {useState} from 'react';

import './Button.css'
function Button(props) {
    let [buttonText, setButtonText] = useState();
    
    const buttonClick = (e, ...args) => {
        
        props.onButtonClick(args[0].text);
    }
    return (
        <div className={props.class}>
            <button onClick={event => buttonClick(event, props)}>{props.text}</button>
        </div>
    )
}
export default Button;