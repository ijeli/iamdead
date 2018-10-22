// import React from "react";

// class LoadedSymp extends React.Component{
//     render(){
//         const {symptom, disease_1, disease_2} = this.props;
//         return (
//         <li>
//         <p>
//             {symptom}
//         </p>
//         <p>
//             {disease_1}
//         </p>
//         <p>
//             {disease_2}
//         </p>
//         </li>
//         )   
//     }
// }
  
// export default LoadedSymp;

import React from "react";
// import '../App.css';

const LoadedSymp = (props) =>
    <div>
        <div key={props.id}>
            <h1>
                {props.symptom}
            </h1>
            <span>
                <button className = 'btn btn-primary'>{props.disease_1}</button>
                <button className = 'btn btn-primary'>{props.disease_2}</button>
                <button className = 'btn btn-primary'>{props.disease_3}</button>
                <button className = 'btn btn-primary'>{props.disease_4}</button>
            </span>
        </div>
    </div>

    
export default LoadedSymp;

