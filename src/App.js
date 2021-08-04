import React from "react";

const memes = [
{
  title: "Mem 1",
  upvotes: 6,
  downvotes: 1,
  img: "images/mem1.jpg"
},

{
  title: "Mem 2",
  upvotes: 3,
  downvotes: 0,
  img: "images/mem2.jpg"
},

{
  title: "Mem 3",
  upvotes: 4,
  downvotes: 2,
  img: "images/mem3.jpg"
},


]

function App() {
  return (
    <div className="App">
      <p><strong>Meme Servive</strong></p>
      <p>Hello Guest</p>
    </div>
  );
}

export default App;
