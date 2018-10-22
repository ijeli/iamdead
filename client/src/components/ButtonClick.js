import React from "react";
import '../App.css';

const ButtonClick = (props) =>

  
    <span key={props.id}>
        <button onClick={() => props.handleThisSubmit(props.id)}
                className = 'btn btn-primary'>{props.symptom}
         </button>
    </span>

    
export default ButtonClick;




