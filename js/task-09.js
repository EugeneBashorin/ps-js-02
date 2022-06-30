// Write a script, that changes the background of the <body> element trought inline style when button .change-color is clicked, and outputs value of color to span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// To generate a random color use function getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const btnElement = document.querySelector(".change-color");
const spanColorData = document.querySelector(".color");
const bodyData = document.querySelector("body");


const btnHandler = (event) => {
  
  const bcgColor = getRandomHexColor();

  spanColorData.textContent = bcgColor;

  bodyData.style.backgroundColor = bcgColor;
}

btnElement.addEventListener("click", btnHandler);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
