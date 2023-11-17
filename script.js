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
  c2.innerText = bookInput.title;
  c3.innerText = bookInput.author;
  c4.innerText = bookInput.pages;
  if (bookInput.read === true) {
    c5.innerText = "✓";
  } else {
    c5.innerText = "X";
  }
  // c5.innerText = bookInput.read;
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
  let bookInput = {
    title: title,
    author: author,
    pages: pages,
    read: read,
  };
  console.log(bookInput);
  addRow(bookInput);
}

const table = document.querySelector("table");
const showDialog = document.getElementById("showDialog");
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
const outputBox = document.getElementById("output");
const confirmBtn = dialog.querySelector("#confirmBtn");
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
dialog.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    submitForm();
  }
});
