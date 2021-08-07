import mem1 from '../images/mem1.jpg';
import mem2 from "../images/mem2.jpg";
import mem3 from "../images/mem3.jpg";
import mem4 from "../images/mem4.jpg";
var uniqid = require("uniqid");

export const memesList = [
  {
    id: uniqid("mem-"),
    title: "Mem 1",
    upvotes: 6,
    downvotes: 1,
    img: mem1,
  },

  {
    id: uniqid("mem-"),
    title: "Mem 2",
    upvotes: 3,
    downvotes: 0,
    img: mem2,
  },

  {
    id: uniqid("mem-"),
    title: "Mem 3",
    upvotes: 4,
    downvotes: 2,
    img: mem3,
  },

  {
    id: uniqid("mem-"),
    title: "Mem 4",
    upvotes: 5,
    downvotes: 0,
    img: mem4,
  },
];