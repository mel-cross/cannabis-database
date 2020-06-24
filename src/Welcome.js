import React from 'react';

const Welcome = (props) => {
   return (
     <header>
       <div className="welcome wrapper">
         <h1>Releaf</h1>
         <p>A Cannabis Strain Library</p>
       </div>
         <button onClick={props.getData}>Explore Strains</button>
     </header>
   );
};

export default Welcome;