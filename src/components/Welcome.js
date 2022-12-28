// write code for Welcome component here
import React from 'react';
const Welcome=({name})=>{
let nimi=`Hey ${name}!`;
let greetMessage= `Welcome to Newton School.`;
return(
<div>
  <h1>{nimi}</h1>
  <h1>{greetMessage}</h1>
  </div>
);
};
export default Welcome;
