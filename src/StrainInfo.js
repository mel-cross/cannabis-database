import React from 'react';

const StrainInfo = (props) => {

   return (
    <section>
      <div className="strain-card wrapper">
        <h2>{props.name}</h2>
        <h3>type: {props.race}</h3>

        <h3>effects:</h3>
        <h4>positive:</h4>
        {props.posEffects.map((posEffect) => {
          return <p>{posEffect}</p>;
          })}

          <h4>negative:</h4>
          {props.negativeEffects.map((negativeEffect) => {
            return <p>{negativeEffect}</p>;
          })}

          {/* within the flavorsArray (which is props), map over all the flavours and make every flavour display individually by calling them flavor and passing that paramter into the map so they can return in an p*/}
        <h4>flavours:</h4>
        {props.flavorsArray.map((flavor) => {
          return <p>{flavor}</p>;
        })}

        <h4>Medical Effects:</h4>
        {props.medicalEffects.map((medicalEffect) => {
          return <p>{medicalEffect}</p>;
        })}
      </div>
     </section>
   );
}

export default StrainInfo;