// Неудачные попытки самостоятельного создания списка

//№1
// function createNewElement(info) {
//   let lifirst = document.createElement("li");
//   let userInput = document.querySelector(".userInput").value;
//   lifirst.innerHTML =
//     userInput +
//     '<span onclick="deleteLastElement()" class="button-delete">X</span>';
//   ul.append(lifirst);
// }
// console.log(lifirst.length);

//№2
// function createNewElement(info) {
//   let lifirst = document.createElement("li");
//   let userInput = document.querySelector(".userInput").value;
//   lifirst.innerHTML =
//     userInput +
//     '<span onclick="deleteLastElement()" class="button-delete">X</span>';
//   ol.append(lifirst);
//   lifirst.addEventListener("click", function () {
//     this.classList.add("cheked");
//   });
// }
// function deleteLastElement() {
//   document.querySelector("li").remove();
// }

//список благодаря гуглу

//кнопка закрыть в элементе
let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//функция удаления
let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close.onclick = function () {
    this.parentElement.remove();
  };
}

//добавления класа отметки
let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

//создание нового элемента
function createNewElement() {
  let li = document.createElement("li");
  let userInput = document.querySelector(".userInput").value;
  let t = document.createTextNode(userInput);
  li.appendChild(t);
  if (userInput === "") {
    alert("Вы должны что-то ввести!");
  } else {
    document.querySelector("ul").appendChild(li);
  }
  document.querySelector(".userInput").value = "";

  let span = document.createElement("span");
  let txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      this.parentElement.remove();
    };
  }
}
