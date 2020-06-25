import React from 'react';

const Welcome = (props) => {
   return (
     <header>
       <div className="wrapper">
         <div className="welcome">
           <div className="title">
             <h1>Releaf</h1>
             <p>A Cannabis Strain Library</p>
           </div>
           <button onClick={props.getData} >
             Click to start
           </button>
         </div>
       </div>
     </header>
   );

  
};

export default Welcome;