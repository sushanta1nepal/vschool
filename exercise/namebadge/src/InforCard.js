import React from 'react';

const InforCard = props =>
 {
     return(
         <div>
             <h1>Social Security Number:{props.ssn}</h1>
             <h1>Mothers Maiden Name:{props.mothersMaidenName}</h1>
             <h1>First Pet:{props.firstPet}</h1>

         </div>
     )
 }
 
 export default InforCard