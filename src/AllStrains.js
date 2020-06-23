import React from 'react';

const AllStrains = (props) => {
   return (
     <div>
       <h2>{props.name}</h2>
       <h3>{props.race}</h3>

       {/* within the flavorsArray (which is props), map over all the flavours and make every flavour display individually by calling them flavor and passing that paramter into the map so they can return in an p*/}
       <h4>Flavours:</h4>
       {props.flavorsArray.map((flavor) => {
         return <p>{flavor}</p>;
       })}

       <h4>Medical Effects:</h4>
       {props.medicalEffects.map((medicalEffect) => {
         return <p>{medicalEffect}</p>;
       })}

       <h4>Effects:</h4>
       <h4>Positive:</h4>
       {props.posEffects.map((posEffect) => {
         return <p>{posEffect}</p>;
       })}

       <h4>Negative:</h4>
       {props.negativeEffects.map((negativeEffect) => {
         return <p>{negativeEffect}</p>;
       })}
     </div>
   );
}

export default AllStrains;