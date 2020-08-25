let myNodelist = document.getElementsByTagName("tbody");
let i;
for (i = 1; i < myNodelist.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close.onclick = function () {
    this.parentElement.remove();
  };
}

const titleInput = document.querySelector(".bookTitle");
const authorInput = document.querySelector(".bookAuthor");
const isbnInput = document.querySelector(".bookISBN");

function get() {
  let bookRow = document.createElement("tr");

  let newTitle = document.createElement("th");
  newTitle.innerHTML = titleInput.value;
  bookRow.appendChild(newTitle);

  let newAuthor = document.createElement("th");
  newAuthor.innerHTML = authorInput.value;
  bookRow.appendChild(newAuthor);

  let newIsbn = document.createElement("th");
  newIsbn.innerHTML = isbnInput.value;
  bookRow.appendChild(newIsbn);

  let span = document.createElement("span");
  let txt = document.createTextNode("X");

  span.className = "close";
  span.appendChild(txt);
  bookRow.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      this.parentElement.remove();
    };
  }

  table.appendChild(bookRow);
}
