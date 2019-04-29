// DOM document object model
console.log(window);
//Parent object of the browser

// Selecting things from the DOM

//Single element selectors
// const form = document.getElementById("my-form");
// console.log(form);

// console.log(document.querySelector(".container"));
// console.log(document.querySelector("h1"));

//Multiple element selectors
// console.log(document.querySelectorAll(".item")); //can use array methods
// console.log(document.getElementsByClassName("item")); //cannot use array methods
// console.log(document.getElementsByTagName("li"));

// const items = document.querySelectorAll(".item");
// items.forEach(item => console.log(item));

// const ul = document.querySelector(".items");

//ul.remove();
// //ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "Josh";
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

// const btn = document.querySelector(".btn");
// btn.style.background = "red";

//Event listeners
// btn.addEventListener("click", e => {
//mouseover, mouseout, etc
//   e.preventDefault();
//   console.log("click");
//   console.log(e.target.className); //get diff attributes
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<h1>Hello</h1>";
// });

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );
    userList.appendChild(li);
    //clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
