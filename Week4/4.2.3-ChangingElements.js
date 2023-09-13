// print the outer HTML of the navigation bar
document.querySelector(".nav-bar").outerHTML;

// print the inner HTML of the navigation bar
document.querySelector(".nav").innerHTML;

// print the text content of the #class-schedule-list element
document.querySelector("#class-schedule-list").textContent;

// select the classList for the first class-week, then add the class "week-1"
const firstClassWeek = document.querySelector(".class-week");
firstClassWeek.classList.add("week-1");

// select the img element and add a src attribute
const img = document.querySelector("img");
img.src = "www.example.com";

// change the font color of the h1 element
const h1 = document.querySelector("h1");
h1.style.color = "deepskyblue";
