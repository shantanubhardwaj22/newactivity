import React from 'react';

function Price({oldprice,newprice}) {
    return ( 
        <div>
        <span> {oldprice} </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span> {newprice} </span>
        </div>
        
     );
}

export default Price;