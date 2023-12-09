const list = document.querySelector("ul");
const textInput = document.getElementById("addToDo");

function deleteTask(event) {
    const clickedItem = event.target;
    if (clickedItem.matches(".fa-trash")) {
        clickedItem.parentElement.parentElement.remove();
    }
}

function addTask() {
    const text = textInput.value.trim();

    if (text !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<span><i class="fa fa-trash"></i></span> ${text}`;
        list.appendChild(listItem);
        textInput.value = "";
    }
}

textInput.addEventListener("keypress", function (k) {
    if (k.key === "Enter") {
        addTask();
    }
});

list.addEventListener("click", deleteTask);