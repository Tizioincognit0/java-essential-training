/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const book1 = new Book(
  "I Simpson - comics",
  "Fumetto",
  "Matt Groening",
  88,
  true,
  10.9
);
const book2 = new Book("One Piece", "Manga", "Eiichiro Oda", 218, true, 19.9);
const book3 = new Book(
  "Dragon Ball",
  "Manga",
  "Akira Toriyama",
  228,
  true,
  15.9
);
const book4 = new Book(
  "Detective Conan",
  "Manga",
  "Gosho Aoyama",
  118,
  true,
  11.9
);
const book5 = new Book(
  "Dr.Slump & Arale",
  "Manga",
  "Akira Toriyama",
  78,
  true,
  8.9
);

console.log("Book1 object:", book1);
console.log("Book2 object:", book2);
console.log("Book3 object:", book3);
console.log("Book4 object:", book4);
console.log("Book5 object:", book5);
book1.toggleAvailability(false);
console.log("Book1 object after sold out:", book1);
book2.changePrice(8.8);
console.log("Book2 object after sale:", book1);
