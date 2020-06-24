import React from 'react';

const Welcome = (props) => {
   return (
     <header>
       <div className="welcome wrapper">
         <h1>Releaf</h1>
         <p>A Cannabis Strain Library</p>
         <button onClick={props.getData}>View Strains</button>
       </div>
     </header>
   );
};

export default Welcome;