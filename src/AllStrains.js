import React from 'react';

const AllStrains = (props) => {
   return (
     <div>
       <h2>{props.name}</h2>
       <h3>{props.race}</h3>

       {props.effects.map((positive) => {
         return <p>{positive}</p>;
       })}

       {/* within the flavorsArray (which is props), map over all the flavours and make every flavour display individually by calling them flavor and passing that paramter into the map so they can return in an p*/}
       <h4>Flavours:</h4>
       {props.flavorsArray.map((flavor) => {
         return <p>{flavor}</p>;
       })}
       
     </div>
   );
}

export default AllStrains;