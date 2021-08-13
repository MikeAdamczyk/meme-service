import React from "react";
import { Image, MemeTitle, TileElement, VoteBox, VoteButton } from "./styled";

const Meme = ({ mem, img }) => (
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

export const MemeList = ({ memes }) => (
  <>
    <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>
      {memes.map((mem) => {
        const { img } = mem;

        return <Meme mem={mem} img={img} />;
      })}
    </ul>
  </>
);
