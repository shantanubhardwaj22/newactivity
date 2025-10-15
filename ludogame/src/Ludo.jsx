import React from 'react';
import { useState } from 'react';

function Ludo() {
    const [moves,setmoves]=useState({blue: 0, red: 0, pink:0 , green :0});
    let bluemoves = () =>{
        console.log(`bluemoves=${moves.blue}`);
        setmoves((prevmoves)=>{
            return {...prevmoves,blue: prevmoves.blue+1};
        })
    }
    let redmoves = () =>{
        console.log(`redmoves=${moves.red}`);
        setmoves((prevmoves)=>{
            return {...prevmoves,red: prevmoves.red+1};
        })
    }
    let pinkmoves = () =>{
        console.log(`pinkmoves=${moves.pink}`);
        setmoves((prevmoves)=>{
            return {...prevmoves,pink: prevmoves.pink+1};
        })
    }
    let greenmoves = () =>{
        console.log(`greenmoves=${moves.green}`);
        setmoves((prevmoves)=>{
            return {...prevmoves,green: prevmoves.green+1};
        })
    }
    return ( 
        <div>
          <p>blue : {moves.blue}</p>
          <button onClick={bluemoves} style={{backgroundColor:"blue"}}>+1</button>
          <p>red :{moves.red}</p>
          <button onClick={redmoves} style={{backgroundColor:"red"}}>+1</button>
          <p>pink :{moves.pink}</p>
          <button onClick={pinkmoves} style={{backgroundColor:"pink"}}>+1</button>
          <p>green :{moves.green}</p>
          <button onClick={greenmoves} style={{backgroundColor:"green"}}>+1</button>
        </div>
     );
}

export default Ludo;