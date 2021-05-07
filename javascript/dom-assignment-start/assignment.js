const task1 = document.getElementById("task-1");

//const task1 = document.querySelector("#task-1");

task1.style.backgroundColor = "black";
task1.style.color = "white";

// const title = document.querySelector("title");
// title.textContent = "Assignment Solved!";

// second way
const docHead = document.head;
const title = document.head.querySelector("title");
title.textContent = "Assignment Solved!";

const h1 = document.querySelector("h1");

h1.textContent = "Assignment - Solved!";
