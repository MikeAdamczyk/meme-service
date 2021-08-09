import React from "react";
import { ThemeProvider } from "styled-components";
import { memesList } from "./database/database.js";
import { theme } from "./theme";
import {
  MemeTitle,
  TileElement,
  Image,
  VoteButton,
  VoteBox,
  Wrapper,
  Header,
} from "./common/styled.js";
import { Menu } from "./menu/styled.js";
import { Main } from "./main/styled.js";
import { Footer } from "./footer/index.js";

const MemeList = (props) => (
  <>
    <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>
      {props.memes.map((mem) => {
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Menu>
          <Header>MEMES SERVICE</Header>
        </Menu>
        <Main>
          <MemeList memes={memesList} />
          <Footer
            title="Thanks for your visit and have a nice day :)"
            copyright="© Copyright by Michał Adamczyk 2020. Wszelkie prawa zastrzeżone!"
          />
        </Main>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
