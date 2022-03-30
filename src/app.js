/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = () => {
//   document.querySelector("button").addEventListener("click", () => {
//     document.querySelector("domain").innerHTML = domainGen();
//   });
// };
// let domainGen = () => {
//   let pronoun = ["the", "our", "my", "their"];
//   let adj = ["great", "bif", "best", "worst"];
//   let noun = ["jogger", "racoon", "friend", "car"];
//   let end = [".com", ".net", ".org", ".edu"];
//   console.log(pronoun + adj + noun + end);
//   return "hello";
// };

/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#domain").innerHTML = domainGen();
  });
};
let domainGen = () => {
  let who = ["Jim", "BillMurray", "Viking", "Monster"];
  let action = ["singing", "attacking", "drinking", "riding"];
  let what = [".com", ".org", ".net", "com.do"];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  return `${who[whoIndex]}${action[actionIndex]}${what[whatIndex]}`;
};
