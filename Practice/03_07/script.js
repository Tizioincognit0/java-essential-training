/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const newMacBookPro = {
  name: "New MacBook Pro",
  inches: 15.6,
  color: "grey",
  RAMGBs: 64,
  Resolution: {
    x: 4096,
    y: 2140,
  },
  hasDVDDrive: false,
};

const oldMacBookPro = {
  name: "Old MacBook Pro",
  inches: 13,
  color: "grey",
  RAMGBs: 8,
  Resolution: {
    x: 1096,
    y: 1020,
  },
  hasDVDDrive: true,
};
