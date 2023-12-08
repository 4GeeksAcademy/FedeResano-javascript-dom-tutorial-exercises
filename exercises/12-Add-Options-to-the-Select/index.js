let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
let element = document.getElementById("mySelect");

for (let i = 0; i < countries.length; i++) {
    let option = document.createElement("option");
    option.value = countries[i];
    option.innerHTML = countries[i];
    element.appendChild(option);
}

element.addEventListener("change", function () {
    let country = element.value;
    alert(country);
  });
    