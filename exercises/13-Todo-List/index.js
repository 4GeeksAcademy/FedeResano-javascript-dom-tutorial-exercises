const list = document.querySelector("ul");
const textInput = document.getElementById("addToDo");


function deleteTask(event) {
    let clickedItem = event.target;

    if (clickedItem.classList.contains("fa-trash")) {
        let listItem = clickedItem.parentElement.parentElement;
        list.removeChild(listItem);
    }
}

function addTask() {
    let text = textInput.value.trim();

    if (text !== "") {
        let listItem = document.createElement("li");
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