class Book {
  constructor(name, genre, author, pages, isAvailable, price) {
    this.name = name;
    this.genre = genre;
    this.author = author;
    this.pages = pages;
    this.isAvailable = isAvailable;
    this.price = price;
  }
  toggleAvailability(availableStatus) {
    this.isAvailable = availableStatus;
  }
  changePrice(newPrice) {
    this.price = newPrice;
  }
}

export default Book;
