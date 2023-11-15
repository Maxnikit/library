const myLibrary = [];

function Book(title, author, pages, read, number) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.number = number;
  // the constructor...
}
function addRow() {
  let row = table.insertRow(-1);
  let c1 = row.insertCell(0);
  let c2 = row.insertCell(1);
  let c3 = row.insertCell(2);
  let c4 = row.insertCell(3);
  let c5 = row.insertCell(4);
  c1.innerText = bookInput.number;
  c2.innerText = bookInput.title;
  c3.innerText = bookInput.author;
  c4.innerText = bookInput.pages;
  c5.innerText = bookInput.read;
}

function addBookToLibrary() {
  addRow();
}
const bookInput = new Book("Chimera", "AUTHOR", "321", "true", "1");
const table = document.querySelector("table");
// button.onclick = addBookToLibrary();
// TODO add form to get bookInput from user
const showButton = document.getElementById("showDialog");
const dialog = document.querySelector("dialog");
const outputBox = document.getElementById("output");
const confirmBtn = dialog.querySelector("#confirmBtn");

showButton.addEventListener("click", () => {
  dialog.showModal();
});
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  dialog.close(); // Have to send the select box value here.
});
