// create a new unordered list (ul) element
const newUL = document.createElement("ul");
const body = document.querySelector("body");

// remove the paragraph element in the nav-bar
const remove = document.querySelectorAll(".nav-bar p")[0];
document.querySelector("nav > p").remove();
const navBar = document.querySelector(".nav-bar");
navBar.removeChild(remove);

// add your new ul element to the nav-bar
navBar.appendChild(newUL);

// create two new list item (li) elements, and add some text to them
const li1 = document.createElement("li");
const li2 = document.createElement("li");

li1.textContent = "First One Made";
li2.textContent = "Second One!";

// add the li elements to the ul in the nav-bar
newUL.appendChild(li1);
newUL.appendChild(li2);
