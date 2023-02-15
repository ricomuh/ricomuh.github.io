const darkButton = document.getElementById("dark");
let dark = localStorage.getItem("dark");

document.addEventListener("DOMContentLoaded", () => {
  if (dark === "true") {
    document.body.classList.add("dark");
  }
});

darkButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  dark = !dark;
  localStorage.setItem("dark", dark);
});

const description = [
  "Frontend Developer",
  "Backend Programmer",
  "Game Developer",
];

const desc = document.getElementById("description");
const typing = document.getElementById("typing");
desc.innerHTML = "";
let turn = 0;
let i = 0;
let wait = 0;
let waitMax = 30;

setInterval(() => {
  if (i < description[turn].length) {
    typing.classList.remove("hidden");
    desc.innerHTML += description[turn][i];
    i++;
  } else {
    if (wait < waitMax) {
      wait++;
      if (wait % 6 == 0) typing.classList.toggle("hidden");
    } else {
      wait = 0;
      i = 0;
      turn++;
      desc.innerHTML = "";
      if (turn > description.length - 1) {
        turn = 0;
      }
    }
  }
}, 100);

// setInterval(() => {
//   if (i < description[turn].length) {
//     desc.innerHTML += description[turn][i];
//     i++;
//   } else {
//     i = 0;
//     turn++;
//     desc.innerHTML = "";
//     if (turn > description.length - 1) {
//       turn = 0;
//     }
//   }
// }, 100);
