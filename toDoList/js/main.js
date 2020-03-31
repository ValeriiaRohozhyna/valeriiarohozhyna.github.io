btnAdd.addEventListener("click", addToDoItem, false);
whatToDo.addEventListener("keydown", addToDoItem, false)


var toDoList = [];

function addToDoItem(e) {
    if ((e.type == "keydown") && (e.keyCode != 13)) {
        return;
    }
    if (whatToDo.value.length < 1) {
        return;
    }
    if (!toDoList.includes(whatToDo.value)) {
        var toDoItem = document.createElement("li");
        toDoItem.innerText = whatToDo.value;
        list.appendChild(toDoItem); // to add the "li" into "ul"

        toDoItem.addEventListener("click", toDoItemDone, false);
        //to make toDoItem done
        function toDoItemDone(e) {
            if (e.target.style.textDecoration == "line-through") {
                e.target.style.textDecoration = "";
            } else {
                e.target.style.textDecoration = "line-through";
            }
        }
        // to add an icon to the "li" element
        var toDoSpan = document.createElement("span");
        toDoSpan.setAttribute("class", "fa fa-trash");
        toDoItem.appendChild(toDoSpan);

        toDoSpan.addEventListener("click", toDoItemRemove, false);

        //to remove the toDoItem
        function toDoItemRemove(e) {
            if (confirm("Are you sure you want to delete this item?")) {
                toDoItem.remove();
            }
        };

        //to add the value of input to the array toDoList
        toDoList.push(whatToDo.value);
        whatToDo.value = "";
    }
}
