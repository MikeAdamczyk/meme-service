import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { SinglePage } from "./SinglePage/index.js";
import { memesList } from "./database/database.js";

const hotMemes = memesList.filter((meme) => meme.upvotes - meme.downvotes > 5);
const regularMemes = memesList.filter((meme) => meme.upvotes - meme.downvotes <= 5);

export const App = () => (
  <Router>
    <Switch>
      <Route path="/hot" render={() => <SinglePage header="Hot" memes={hotMemes} />} />
      <Route path="/regular" render={() => <SinglePage header="Regular" memes={regularMemes}/>} />
      <Route path="/" render={() => <Redirect to="/regular" />} />
    </Switch>
  </Router>
);