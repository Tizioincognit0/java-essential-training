/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";
import MacBook from "./MacBook.js";
import IPhone from "./IPhone.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  60,
  "Giallo",
  18,
  8,
  88,
  true
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);

const newMac = new MacBook(
  "New MacBook Pro",
  15.6,
  "grey",
  64,
  4096,
  2140,
  false
);

const oldMac = new MacBook("Old MacBook Pro", 13, "grey", 8, 1096, 1020, true);

const iPhone = new IPhone("iPhone X", 5.9, "Giallo", false, 1096, 1024);

console.log("Vecchio Mac:", oldMac);
oldMac.hasDVDDrive = false;
console.log("Vecchio Mac dopo rimozione DVD Drive:", oldMac);
console.log("Nuovo Mac:", newMac);
console.log("iPhone:", iPhone);
