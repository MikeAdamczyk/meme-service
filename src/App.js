import React from "react";
import styled from "styled-components";
import {memesList} from "./database/database.js";


const MemeList = (props) => (

  <>
  <ul>
     {props.memes.map(mem => {

      const {img} = mem;
      
      return (
        <li>
          UP: {mem.upvotes}, DOWN: {mem.downvotes}

          <div>
            <img  src={img}  alt="img"/>
          </div>
        </li>
      )
     
    })} 
  </ul>
  </>
);


function App() {
  return (
    <>
    <p>ELO</p>
    <MemeList memes={memesList}/>
    </>
  );
}

export default App;
