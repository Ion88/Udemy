const task3Element = document.getElementById("task-3");

function noText() {
  alert("Hi");
}

function withText(name) {
  alert("Hi " + name);
}

withText("Ion");

function threeStrings(name1, name2, name3) {
  const combinedText = name1 + " " + name2 + " " + name3;
  return combinedText;
}

task3Element.addEventListener("click", noText);

const alertText = threeStrings("Ion", "Petya", "Pasha");

alert("Hi " + alertText);
