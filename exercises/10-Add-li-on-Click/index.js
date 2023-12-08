let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let myLi = document.createElement("li");
	myLi.innerHTML = "Forth element";
	let myList = document.getElementById("myList");
	myList.appendChild(myLi);
});
