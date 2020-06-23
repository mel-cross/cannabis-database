import React from 'react';

const Welcome = (props) => {
   return (
     <div>
       <h1>Title</h1>
       <p>Description</p>
       <button onClick={props.getData}>Click</button>
     </div>
   );
};

export default Welcome;