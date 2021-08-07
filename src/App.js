import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { memesList } from "./database/database.js";
import { theme } from "./theme"

const VoteButton = styled.button`
  border: 2px solid #e3e3e3;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 0px #ccc;
  padding: 10px 20px;
  margin: 10px;
  background: ${({theme}) => theme.colors.white};
  color: ${({ color }) => color || "black"};
  font-weight: bold;
  transition: 0.4s ease-in-out;

  &:hover{
    background: ${({ color }) => color==="red" ? "red" : "green"};
    color: ${({theme}) => theme.colors.white};
    cursor: pointer;
  }
`;

const MemeList = (props) => (
  <>
    <ul style={{ listStyleType: "none" }}>
      {props.memes.map((mem) => {
        const { img } = mem;

        return (
          <li key={mem.id}>
            <div>
              <img src={img} alt="img" />
            </div>
            <VoteButton color="green">👍 Upvote: {mem.upvotes} </VoteButton>
            <VoteButton color="red">👎 Downvote: {mem.downvotes}</VoteButton>
          </li>
        );
      })}
    </ul>
  </>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <p>MEMES LIST</p>
      <MemeList memes={memesList} />
    </ThemeProvider>
  );
}

export default App;
