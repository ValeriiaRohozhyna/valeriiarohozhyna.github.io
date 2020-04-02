var input = document.querySelector("#toDoInput");
var btnAdd = document.querySelector("#btnAdd");
var toDoList = document.querySelector("#toDoList");
var btnSave = document.querySelector("#btnSave");

var toDoListArray = [];

checkItem();

function checkItem() {
    if (!localStorage.getItem("ToDoList")) { // check if we have something in Storage
        localStorage.setItem("ToDoList", toDoListArray); //if not we set the poor array there
    } else {
        toDoListArray = localStorage.getItem("ToDoList").split(",") //if we have something we read these items and add them into our ToDoList
    }
};

toDoListArray.forEach(function (item) { //read the array and generate our list
    createToDoItem(item)
});

function createToDoItem(inputText) {
    if (!toDoListArray.includes(input.value)) {
        var newToDoItem = document.createElement("li");
        var deleteItem = document.createElement("span");
        deleteItem.setAttribute("class", "delete-span fa fa-trash");

        newToDoItem.textContent = inputText;
        newToDoItem.addEventListener(
            "click",
            function () {
                if (newToDoItem.style.textDecoration == "line-through") {
                    newToDoItem.style.textDecoration = "";
                } else {
                    newToDoItem.style.textDecoration = "line-through";
                }
            },
            false
        );
        newToDoItem.appendChild(deleteItem);
        toDoList.appendChild(newToDoItem);

        deleteItem.addEventListener(
            "click",
            function () {
                if (confirm("Do you want to delete this item?")) {
                    toDoList.removeChild(newToDoItem);
                    toDoListArray.splice(toDoListArray.indexOf(newToDoItem.textContent), 1) // delete the item from array
                    localStorage.setItem("ToDoList", toDoListArray); //set all the changes into Storage
                }
            },
            false
        );
    }
}

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
    localStorage.setItem("ToDoList", toDoListArray);
    confirm("Done!");
}