import React from 'react';
import { useState } from 'react';

function Islike() {
    const [like,setlike] = useState(false);
    let liking= () =>{
        setlike(!like);
    };
   
    return ( 
        <div>
        
        <p> click here </p>
        {
           like ? <i onClick={liking} className="fa-solid fa-heart"></i> : <i onClick={liking} className="fa-regular fa-heart"></i>
        }
       
        </div>
     );
}

export default Islike;