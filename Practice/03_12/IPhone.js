/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class IPhone {
  constructor(
    // Defines parameters:
    name,
    inches,
    color,
    has5GSupport,
    resolutionX,
    resolutionY
  ) {
    // Define properties:
    this.name = name;
    this.inches = inches;
    this.color = color;
    this.resolution = {
      x: resolutionX,
      Y: resolutionY,
    };
    this.has5GSupport = has5GSupport;
  }
  // Add methods like normal functions:
  toggle5G(status5G) {
    this.has5GSupport = status5G;
  }
  newResolution(x, y) {
    this.resolution.x = x;
    this.resolution.y = y;
  }
}

export default IPhone;
