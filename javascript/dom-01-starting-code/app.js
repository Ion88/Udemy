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

// const ul = document.querySelector("ul");
// console.log(ul.firstElementChild);

// const ul = document.querySelector("ul");
// console.log(ul.children[1]);

//select parrent node
// const firstLi = document.querySelector("li");
// console.log(firstLi.closest("body"));

//select sibling elements
// const ul = document.querySelector("ul");
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

const section = document.querySelector("section");
section.style.backgroundColor = "lightblue";

const button = document.querySelector("button");
button.addEventListener("click", () => {
  //   if (section.className === "red-bg visible") {
  //     section.className = "red-bg invisible";
  //   } else {
  //     section.className = "red-bg visible";
  //   }

  section.classList.toggle("visible");
  section.classList.toggle("invisible");
});

//adding elements via HTML in code
// const div = document.querySelector("div");
// div.innerHTML = div.innerHTML + "<p>Something went wrong!</p>";
// div.insertAdjacentHTML("beforeend", "<p>Something went wrong</p>");

// Adding Elements via createElement()
// const list = document.querySelector("ul");
// const newLi = document.createElement("li");
// console.log(newLi);
// list.appendChild(newLi);
// newLi.textContent = "Item 4";
