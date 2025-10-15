import React from 'react';
import Product from './Product';

function Cards() {
    let styles={
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        
    }
    return ( 
        <div style={styles}>
        
        <Product  title="shantanu" idx={0}/>
        <Product  title="manmeet"  idx={1}/>
        <Product  title="arjun" idx={2} />
        <Product  title="mohit" idx={3}/>
        </div>
     );
}

export default Cards;