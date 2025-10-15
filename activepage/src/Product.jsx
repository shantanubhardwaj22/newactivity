import React from 'react';
import Price from './Price';
import "./Product.css";

function Product({title,idx}) {
    let oldprice= ["100","200","300","399"];
    let newprice= ["200","300","234","294"];
    let desription= ["acha h","bura h","theek h","sahi h"]
    return ( 
        <div className="Product">
         <h4>{title}</h4>
         <p> {desription[idx]} </p>
         <Price oldprice={oldprice[idx]} newprice={newprice[idx]}/>
        </div>
     );
}

export default Product;