const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function addRow(bookInput) {
  let row = table.insertRow(-1);
  let c1 = row.insertCell(0);
  let c2 = row.insertCell(1);
  let c3 = row.insertCell(2);
  let c4 = row.insertCell(3);
  let c5 = row.insertCell(4);
  let c6 = row.insertCell(5);
  c2.innerText = bookInput.title;
  c3.innerText = bookInput.author;
  c4.innerText = bookInput.pages;
  if (bookInput.read === true) {
    c5.innerText = "✓";
  } else {
    c5.innerText = "X";
  }
  let btn = document.createElement("button");
  btn.type = "image";
  btn.className = "deleteBtn";
  let img = document.createElement("img");
  img.src = "delete.svg";
  img.height = "40";
  img.width = "40";
  img.color = "white";
  btn.appendChild(img);
  c6.appendChild(btn);
}

function addBookToLibrary() {
  addRow();
}
function submitForm() {
  if (!form.checkValidity()) {
    alert("Please enter data in all fields");
    return;
  }
  dialog.close();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("numberOfPages").value;
  let read = document.getElementById("read").checked;
  let bookInput = new Book(title, author, pages, read);
  myLibrary.push(bookInput);
  addBook();
}

const table = document.querySelector("tbody");
const showDialog = document.getElementById("showDialog");
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
const outputBox = document.getElementById("output");
const confirmBtn = dialog.querySelector("#confirmBtn");
const cancelBtn = dialog.querySelector("#cancelBtn");
const overlay = document.createElement("div");

showDialog.addEventListener("click", () => {
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);
  overlay.style.display = "block";
  dialog.showModal();
});
dialog.onclose = () => {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("numberOfPages").value = "";
  document.getElementById("read").checked = false;
  document.body.removeChild(overlay);
};
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  submitForm(); // Submit
});
cancelBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  dialog.close(); // Close the dialog
});
dialog.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    submitForm();
  }
});
function addBook() {
  table.innerHTML = "";
  for (let index = 0; index < myLibrary.length; index++) {
    const book = myLibrary[index];
    addRow(book);
  }
}
// TODO assign index to DELETE buttons, make it so buttons can delete entries from myLibrary array
