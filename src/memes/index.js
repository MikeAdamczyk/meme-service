import React from "react";
import { useDispatch } from "react-redux";
import { downvote, upvote, toggleFavourite } from "../store";
import {
  Image,
  MemeTitle,
  TileElement,
  VoteBox,
  VoteButton,
  List,
  TitleBox,
  FavStar,
} from "./styled";
import Tooltip from "@material-ui/core/Tooltip";

const Meme = ({ mem, img, fav }) => {
  const dispatch = useDispatch();

  return (
    <li key={mem.id}>
      <TileElement>
        <TitleBox>
          <MemeTitle>{mem.title}</MemeTitle>
          <Tooltip
            title={!fav ? "Add to Favourites" : "Remove from Favourites"}
          >
            <FavStar
              favourite={fav}
              onClick={() => dispatch(toggleFavourite(mem.id))}
            />
          </Tooltip>
        </TitleBox>

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
  <List>
    {memes.map((mem) => {
      const { img } = mem;
      const { favourite } = mem;
      return <Meme mem={mem} img={img} fav={favourite} />;
    })}
  </List>
);
