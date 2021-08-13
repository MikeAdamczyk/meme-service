import mem1 from "./images/mem1.jpg";
import mem2 from "./images/mem2.jpg";
import mem3 from "./images/mem3.jpg";
import mem4 from "./images/mem4.jpg";
var uniqid = require("uniqid");

export const memesList = [
  {
    id: uniqid("mem-"),
    title: "Memory",
    upvotes: 9,
    downvotes: 1,
    img: mem1,
    favourite: true,
  },

  {
    id: uniqid("mem-"),
    title: "States",
    upvotes: 3,
    downvotes: 0,
    img: mem2,
    favourite: false,
  },

  {
    id: uniqid("mem-"),
    title: "Teacher",
    upvotes: 4,
    downvotes: 2,
    img: mem3,
    favourite: true,
  },

  {
    id: uniqid("mem-"),
    title: "Function",
    upvotes: 7,
    downvotes: 0,
    img: mem4,
    favourite: false,
  },
];
