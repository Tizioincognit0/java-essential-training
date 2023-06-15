/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let backpackContents = [
  "Mac",
  "iPhone",
  "scrivania",
  "adattatore",
  "zaino",
  "matita",
  "pennarello",
  "computer",
];
console.log(backpackContents);
backpackContents.pop();
console.log(backpackContents);
backpackContents.unshift(backpackContents.pop());
console.log(backpackContents);
backpackContents.sort();
console.log(backpackContents);
console.log(backpackContents.find((e) => e === "Mac"));
let remove = "Mac";
backpackContents.splice(backpackContents.indexOf(remove), 1);
console.log(backpackContents);
