//Write a script for creating and clearing a collection of elements.
//The user enters the number of elements in the input and clicks the Create button, after which the collection is rendered.
//When you click on the Clear button, the collection of elements is cleared.

//<div id="controls">
//  <input type="number" min="1" max="100" step="1" />
//  <button type="button" data-create>Create</button>
//  <button type="button" data-destroy>Destroy</button>
//</div>

//<div id="boxes"></div>

//Create a createBoxes(amount) function that takes one parameter - a number.
//The function creates as many <div>s as specified in amount and adds them to div#boxes.

//The sizes of the first <div> are 30px by 30px.
//Each element after the first one should be 10px wider and taller than the previous one.
//All elements must have a random background color in HEX format.
//Use the ready function getRandomHexColor to get the color.

//function getRandomHexColor() {
//  return `#${Math.floor(Math.random() * 16777215)
//    .toString(16)
//    .padStart(6, 0)}`;
//}

//++Create a destroyBoxes() function that clears the contents of div#boxes, and removing all the created elements.

const createBtnData = document.querySelector('button[data-create]');
const destroyBtnData = document.querySelector('button[data-destroy]');
const inputData = document.querySelector("#controls input");
const placeToAppend = document.querySelector("#boxes");

const createBtnHandler = (event) => {
  createBoxes(inputData.value);
}

createBtnData.addEventListener("click", createBtnHandler);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount){
  const divArray = [];
  let divSize = 30;
  for(let i = 0; i < amount; i +=1){
    const color = getRandomHexColor();
    divArray.push(`<div style="width:${divSize}px; height:${divSize}px; background-color:${color}"></div>`);
    divSize += 10;
  }
  const stringData = divArray.join("");

  return placeToAppend.insertAdjacentHTML("afterbegin", stringData)
}

const destroyBtnHandler = () => {
  placeToAppend.innerHTML = "";
  inputData.value = "";
}

destroyBtnData.addEventListener("click", destroyBtnHandler);