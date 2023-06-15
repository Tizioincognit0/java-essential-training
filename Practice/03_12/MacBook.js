/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class MacBook {
  constructor(
    // Defines parameters:
    name,
    inches,
    color,
    RAMGBs,
    resolutionX,
    resolutionY,
    hasDVDDrive
  ) {
    // Define properties:
    this.name = name;
    this.inches = inches;
    this.color = color;
    this.RAMGBs = RAMGBs;
    this.resolution = {
      x: resolutionX,
      Y: resolutionY,
    };
    this.hasDVDDrive = hasDVDDrive;
  }
  // Add methods like normal functions:
  toggleDVDDrive(driveStatus) {
    this.hasDVDDrive = driveStatus;
  }
  newResolution(x, y) {
    this.resolution.x = x;
    this.resolution.y = y;
  }
}

export default MacBook;
