import React from 'react';

const StrainInfo = (props) => {

   return (
    <section className="cards">
      <div className="strain-card wrapper">
        <div className="name-race">
           <h3><i class="fas fa-cannabis"></i>{props.race}</h3>
          <h2>{props.name}</h2>
          <h3>effects:</h3>
        </div>

        <div className="flex">
          <div className="effects">
            <div>
              <h4>positive:</h4>
              {props.posEffects.map((posEffect) => {
                return <p>{posEffect}</p>;
                })}
            </div>
            <div>
              <h4>negative:</h4>
              {props.negativeEffects.map((negativeEffect) => {
                return <p>{negativeEffect}</p>;
              })}
            </div>
          </div>

        {/* within the flavorsArray (which is props), map over all the flavours and make every flavour display individually by calling them flavor and passing that parameter into the map so they can return in an p*/}
        <div className="flav-med">
          <h4>flavours:</h4>
          {props.flavorsArray.map((flavor) => {
            return <p>{flavor}</p>;
          })}

          <h4>Can help with:</h4>
          {props.medicalEffects.map((medicalEffect) => {
            return <p>{medicalEffect}</p>;
          })}
         </div>
        </div>
      </div>
     </section>
   );
}

export default StrainInfo;