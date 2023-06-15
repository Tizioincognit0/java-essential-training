/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        frogpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        frogpack.color
      }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        frogpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        frogpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        frogpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        frogpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>  
`;

function createArticle(frogpack) {
  const newArticle = document.createElement("article");

  newArticle.innerHTML =
    `
  <article>
    <h1>${frogpack.name}</h1>
    <ul>
      <li>Volume: ${frogpack.volume}</li>
      <li>Color: ${frogpack.color}</li>
      <li>Number of pockets: ${frogpack.pocketNum}</li>
      <li>Left strap length: ${frogpack.strapLength.left}</li>
      <li>Right strap length: ${frogpack.strapLength.right}</li>
      <li>Lid status: ${frogpack.lidOpen}</li>
      ` +
    createFigure(frogpack) +
    `
    </ul>
  </article>
  `;
  return newArticle;
}

function createFigure(frogpack) {
  return `<figure>
  <img src="${frogpack.image}">
    <figcaption>Immagine dello zaino</figcaption>
  </figure>
`;
}

const main = document.querySelector("main");
main.append(createArticle(frogpack));
