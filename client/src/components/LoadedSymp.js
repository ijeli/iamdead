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

    <span key={props.id}>
       <h1>
            {props.symptom}
       
       </h1>
         
       <p>
           {props.disease_1}
       </p>
       <p>
           {props.disease_2}
       </p>
       <p>
           {props.disease_3}
       </p>
       <p>
           {props.disease_4}
       </p>
    </span>

    
export default LoadedSymp;