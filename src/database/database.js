import mem1 from "./images/mem1.jpg";
import mem2 from "./images/mem2.jpg";
import mem3 from "./images/mem3.jpg";
import mem4 from "./images/mem4.jpg";
import mem5 from "./images/mem5.jpg";
import mem6 from "./images/mem6.jpg";
import mem7 from "./images/mem7.jpg";
import mem8 from "./images/mem8.jpg";
import mem9 from "./images/mem9.jpg";
import mem10 from "./images/mem10.jpg";
import mem11 from "./images/mem11.jpg";
import mem12 from "./images/mem12.jpg";
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

  {
    id: uniqid("mem-"),
    title: "Doctor",
    upvotes: 4,
    downvotes: 2,
    img: mem5,
    favourite: false,
  },

  {
    id: uniqid("mem-"),
    title: "Pizza",
    upvotes: 3,
    downvotes: 1,
    img: mem6,
    favourite: false,
  },

  {
    id: uniqid("mem-"),
    title: "Boss",
    upvotes: 3,
    downvotes: 1,
    img: mem7,
    favourite: false,
  },

  {
    id: uniqid("mem-"),
    title: "FBI",
    upvotes: 3,
    downvotes: 1,
    img: mem8,
    favourite: false,
  },

  {
    id: uniqid("mem-"),
    title: "Stack Overflow",
    upvotes: 3,
    downvotes: 2,
    img: mem9,
    favourite: false,
  },

  {
    id: uniqid("mem-"),
    title: "Leader",
    upvotes: 5,
    downvotes: 1,
    img: mem10,
    favourite: true,
  },

  {
    id: uniqid("mem-"),
    title: "Pressure",
    upvotes: 6,
    downvotes: 0,
    img: mem11,
    favourite: true,
  },

  {
    id: uniqid("mem-"),
    title: "Adding",
    upvotes: 7,
    downvotes: 0,
    img: mem12,
    favourite: false,
  },
];
