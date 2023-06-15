/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

const markup = (backpack) => {
  return `
    <div>
      <h3>${backpack.name}</h3>
      <ul>
        <li>Volume: ${backpack.volume}</li>
        <li>Color: ${backpack.color}</li>
        <li>Number of pockets: ${backpack.pocketNum}</li>
        <li>Strap lengths: L: ${backpack.strapLength.left}, R: ${
    backpack.strapLength.right
  } </li>
        <li>Top lid: ${backpack.lidOpen ? "Open" : "Closed"}</li>
      </ul>
    </div>
  `;
};

function changeMain() {
  let main = document.querySelector("main");
  main.innerHTML = markup(backpack);
}

changeMain();
