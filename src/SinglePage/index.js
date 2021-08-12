import React from "react";
import { Wrapper } from "../common/styled.js";
import { Main, Header } from "../main/styled.js";
import { Footer } from "../footer/index.js";
import { MenuBox } from "../menu/index.js";
import { MemeList } from "../common/index.js";

export const SinglePage = ({ header, memes }) => (
  <Wrapper>
    <MenuBox />
    <Main>
      <Header>{header ? header : "Memes"}</Header>
      <MemeList memes={memes} />
      <Footer
        title="Thanks for your visit and have a nice day :)"
        copyright="Copyright by Michał Adamczyk 2021 © Wszelkie prawa zastrzeżone!"
      />
    </Main>
  </Wrapper>
);
