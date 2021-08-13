import React from "react";
import { useSelector } from 'react-redux';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { SinglePage } from "./SinglePage/index.js";

export const App = () => {
  const memesList = useSelector((state) => state.memes);
  const hotMemes = memesList.filter((meme) => meme.upvotes - meme.downvotes > 5);
  const regularMemes = memesList.filter((meme) => meme.upvotes - meme.downvotes <= 5);
  return (
    <Router>
    <Switch>
      <Route path="/hot" render={() => <SinglePage header="Hot" memes={hotMemes} />} />
      <Route path="/regular" render={() => <SinglePage header="Regular" memes={regularMemes}/>} />
      <Route path="/" render={() => <Redirect to="/regular" />} />
    </Switch>
  </Router>
  )
};