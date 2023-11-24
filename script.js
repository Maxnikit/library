const myLibrary = [];
let deleteIndex = 0;
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function addBook() {
  table.innerHTML = "";
  deleteIndex = 0;

  for (let index = 0; index < myLibrary.length; index++) {
    const book = myLibrary[index];
    addRow(book);
  }
}
function addRow(bookInput) {
  const row = table.insertRow(-1);
  const cells = Array.from({ length: 6 }, () => row.insertCell());
  const [numberCell, titleCell, authorCell, pagesCell, readCell, deleteCell] =
    cells; // numberCell не удалять, он нужен для нумерации строчек, которая работает через css

  titleCell.textContent = bookInput.title;
  authorCell.textContent = bookInput.author;
  pagesCell.textContent = bookInput.pages;
  const readBtn = createReadBtn(bookInput.read);
  readCell.appendChild(readBtn);

  const deleteBtn = createDeleteBtn(deleteIndex);
  deleteIndex += 1;
  deleteCell.appendChild(deleteBtn);
}

function createDeleteBtn(index) {
  const btn = document.createElement("button");
  btn.type = "image";
  btn.className = "deleteBtn";

  const img = document.createElement("img");
  img.src = "icons/delete1.png";
  btn.appendChild(img);

  btn.addEventListener("click", () => {
    myLibrary.splice(index, 1);
    addBook();
  });

  return btn;
}
function createReadBtn(readBoolean) {
  const btn = document.createElement("button");
  btn.type = "image";
  btn.className = "readBtn";

  const img = document.createElement("img");
  img.src = readBoolean ? "icons/check1.png" : "icons/uncheck1.png";
  btn.appendChild(img);
  btn.addEventListener("click", () => {
    console.log(img.src);
    console.log(img.src === "icons/uncheck1.png");
    readBoolean = !readBoolean;
    img.src = readBoolean ? "icons/check1.png" : "icons/uncheck1.png";
  });
  return btn;
}
function submitForm() {
  if (!form.checkValidity()) {
    alert("Please enter data in all fields");
    return;
  }

  dialog.close();

  const titleInput = document.getElementById("title").value;
  const authorInput = document.getElementById("author").value;
  const pagesInput = document.getElementById("numberOfPages").value;
  const readInput = document.getElementById("read").checked;

  const newBook = new Book(titleInput, authorInput, pagesInput, readInput);
  myLibrary.push(newBook);

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
