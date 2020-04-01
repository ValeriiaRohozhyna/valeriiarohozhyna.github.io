var input = document.querySelector("#toDoInput");
var btnAdd = document.querySelector("#btnAdd");
var toDoList = document.querySelector("#toDoList");
var btnSave = document.querySelector("#btnSave");

var toDoListArray = []; 

function createToDoItem(inputText) {
    if (!toDoListArray.includes(input.value)) {
        var newToDoItem = document.createElement("li");
        var deleteItem = document.createElement("span");
        deleteItem.setAttribute("class", "delete-span fa fa-trash");

        newToDoItem.innerText = inputText;
        newToDoItem.addEventListener("click", function () {
            if (newToDoItem.style.textDecoration == "line-through"){
                newToDoItem.style.textDecoration = "";
            } else {
                newToDoItem.style.textDecoration = "line-through";
        }
    }, false);
        newToDoItem.appendChild(deleteItem);
        toDoList.appendChild(newToDoItem);

        deleteItem.addEventListener("click", function () {
            if (confirm("Do you want to delete this item?")) {
                toDoList.removeChild(newToDoItem);
            }
        }, false);
    }
};
function addToDoItem(e) {
    e.preventDefault();
    if (input.value.length < 1) {
        return;
    }
    createToDoItem(input.value);
    toDoListArray.push(input.value);
    input.value = "";
}

btnAdd.addEventListener("click", addToDoItem, false);
btnSave.addEventListener("click", saveToDoItemList, false);

function saveToDoItemList(e) {
    e.preventDefault();
    var data = JSON.stringify(toDoListArray);
    localStorage.setItem("ToDoList", data);
    confirm("Done!");
};
