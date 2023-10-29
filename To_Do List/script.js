var items = JSON.parse(localStorage.getItem("todo-list")) || [];
let listitems = document.querySelector("#list-items");

function addItem() {
  var inputBox = document.querySelector("#enter-text");
  var item = inputBox.value;
  if (item === "") return alert("You need to put in a number");

  items.push({
    value: item,
  });

  localStorage.setItem("todo-list", JSON.stringify(items));

  listItems();

  inputBox.value = "";
}

function deleteItem(index) {
  items.splice(index, 1);
  localStorage.setItem("todo-list", JSON.stringify(items));
  listItems();
}

function listItems() {
  var list = "";
  for (var i = 0; i < items.length; i++) {
    list += "<li class=" + (items[i].done ? "done" : "") + ">";
    list += items[i].value + " ";

    list +=
      "<span class='deleteBtn' onclick='deleteItem(" +
      i +
      ")'>Delete</span></li>";
  }
  document.querySelector("#list-items").innerHTML = list;
}
(function () {
  listItems();
})();

delAll = () => {
  localStorage.clear();
  listitems.innerHTML = "";
};