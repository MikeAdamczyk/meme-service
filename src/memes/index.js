import React from "react";
import { useDispatch } from "react-redux";
import { downvote, upvote } from "../store";
import { Image, MemeTitle, TileElement, VoteBox, VoteButton } from "./styled";

const Meme = ({ mem, img }) => {
  const dispatch = useDispatch();

  return (
    <li key={mem.id}>
      <TileElement>
        <MemeTitle>{mem.title}</MemeTitle>
        <div>
          <Image src={img} alt="img" />
        </div>
        <VoteBox>
          <VoteButton onClick={() => dispatch(upvote(mem.id))} color="green">
            👍 Cool: {mem.upvotes}
          </VoteButton>
          <VoteButton onClick={() => dispatch(downvote(mem.id))} color="red">
            👎 Crap: {mem.downvotes}
          </VoteButton>
        </VoteBox>
      </TileElement>
    </li>
  );
};

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
