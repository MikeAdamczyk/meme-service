import React from "react";
import {Image, MemeTitle, TileElement, VoteBox, VoteButton} from "./styled";

export const MemeList = ({memes}) => (
    <>
      <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>
        {memes.map((mem) => {
          const { img } = mem;
  
          return (
            <li key={mem.id}>
              <TileElement>
                <MemeTitle>{mem.title}</MemeTitle>
                <div>
                  <Image src={img} alt="img" />
                </div>
                <VoteBox>
                  <VoteButton color="green">👍 Cool: {mem.upvotes} </VoteButton>
                  <VoteButton color="red">👎 Crap: {mem.downvotes}</VoteButton>
                </VoteBox>
              </TileElement>
            </li>
          );
        })}
      </ul>
    </>
  );