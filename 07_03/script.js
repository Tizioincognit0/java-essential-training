/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

backpackContents.push("pencil", 8);
backpackContents.unshift("penna", 88);
console.log(backpackContents.shift());
console.log(backpackContents.pop());
console.log(backpackContents);
console.log(backpackContents.join(" | "));

backpackContents.forEach(function (item) {
  item = `<li>${item}</li>`;
  console.log(item);
});

console.log(backpackContents);

let longItems = backpackContents.find(function (item) {
  if (item.length >= 5) {
    return item;
  }
});
console.log("longItems:", longItems);
