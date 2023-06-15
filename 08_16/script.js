/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import Backpack from "./components/Backpack.js";
import backpackObjectArray from "./components/data.js";

const everydayPack = new Backpack(
  "pack01",
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

var content = backpackObjectArray.map((item) => {
  return `<figure class="backpack__image">
      <img src=${item.image} alt="" />
    </figure>
    <h1 class="backpack__name">${item.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        item.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        item.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${item.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        item.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        item.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        item.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        item.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
`;
});

console.log(content);

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("frogpack");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;

main.append(newArticle);
