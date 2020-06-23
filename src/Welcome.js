import React from 'react';

const Welcome = (props) => {
   return (
     <header>
       <div className="welcome wrapper">
         <h1>Releaf</h1>
         <p>The Cannabis Strain Database</p>
         <button onClick={props.getData}>Click</button>
       </div>
     </header>
   );
};

export default Welcome;