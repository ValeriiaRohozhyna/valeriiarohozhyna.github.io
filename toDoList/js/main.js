btnAdd.addEventListener("click", addToDoItem, false);
whatToDo.addEventListener("keydown", addToDoItem, false )

var toDoList = [];

function addToDoItem(e) {
    if((e.type == "keydown") && (e.keyCode != 13)) {
        return;
    }
    if (whatToDo.value.length < 1) {
        return;
    }
    if (!toDoList.includes(whatToDo.value)) {
        var toDoItem = document.createElement("li");

        toDoItem.innerText = whatToDo.value;
        list.appendChild(toDoItem);

        toDoItem.addEventListener("click", toDoItemDone, false);
        function toDoItemDone(e) {
            if (e.target.style.textDecoration == "line-through") {
                e.target.style.textDecoration = "";
            } else {
                e.target.style.textDecoration = "line-through";
            }
        }
        
        var toDoSpan = document.createElement("span");
        toDoSpan.setAttribute("class", "fa fa-trash");
        toDoItem.appendChild(toDoSpan);

        toDoSpan.addEventListener("click", toDoItemRemove, false);
        function toDoItemRemove(e) {
            if (confirm("Are you sure I need to delete this item?")) {
                toDoItem.remove();
            }
        }

        toDoList.push(whatToDo.value);
        whatToDo.value = "";
    }
}