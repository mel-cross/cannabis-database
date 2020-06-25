import React from 'react';

const StrainInfo = (props) => {

   return (
     <div className="strain-card wrapper">
       <div className="name-race">
         <h3>
           <i class="fas fa-cannabis"></i> {props.race}
         </h3>
         <h2>{props.name}</h2>
       </div>
       <div className="strain-info">
         <div className="info">
           <h4>positive:</h4>
           {props.posEffects.map((posEffect) => {
           return <p> {posEffect }, </p>;
           })}
         </div>
         <div className="info">
           <h4>negative:</h4>
           {props.negativeEffects.map((negativeEffect) => {
             return <p> {negativeEffect}, </p>;
           })}
         </div>

         {/* within the flavorsArray (which is props), map over all the flavours and make every flavour display individually by calling them flavor and passing that parameter into the map so they can return in an p*/}
         <div className="info">
           <h4>flavours:</h4>
           {props.flavorsArray.map((flavor) => {
             return <p>{flavor}, </p>;
           })}
         </div>
         <div className="info">
           <h4>Can help with:</h4>
           {props.medicalEffects.map((medicalEffect) => {
             return <p>{medicalEffect}, </p>;
           })}
         </div>
       </div>
     </div>
   );
}

export default StrainInfo;