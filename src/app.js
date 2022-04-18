import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let domainGen = [];
  let who = ["Jim", "BillMurray", "Viking", "Monster"];
  let action = ["singing", "attacking", "drinking", "riding"];
  let what = [".com", ".org", ".net", "com.do"];
  for (let i = 0; i < who.length; i++) {
    for (let j = 0; j < action.length; j++) {
      for (let k = 0; k < what.length; k++) {
        domainGen.push("  " + who[i] + action[j] + what[k]);
      }
    }
  }
  console.log(domainGen);
  document.getElementById("domain.results").innerHTML = domainGen;
};
