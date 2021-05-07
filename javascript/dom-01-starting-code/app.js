const listItemElements = document.querySelectorAll("li");

// alternative
//const listItemElements = document.getElementsByTagName("li");

const h1 = document.getElementById("main-title");

h1.textContent = "Some other text";
h1.style.color = "white";
h1.style.backgroundColor = "green";

const li = document.querySelector("li:last-of-type");
li.textContent = li.textContent + " (Changed)";

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}
