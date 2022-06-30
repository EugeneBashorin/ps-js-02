//Write a script to create an image gallery from an array of data. The HTML has list a ul.gallery.

//<ul class="gallery"></ul>
//Use an array of images objects to create <img> elements nested within <li>. To create markup, use template strings and the insertAdjacentHTML() method.
//All gallery elements must be added to the DOM in a single paste operation.  
//Add minimal gallery styling with flexboxes or grids via CSS classes.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//const pastePlace = document.querySelector(".gallery");

// function listImgMaker(objArray, tagListItem, tagImgItem){
//   let listVar;
//   let imgVar;
  
//   objArray.forEach(element => {
//     imgVar = document.createElement(tagImgItem); //=>calback to create
//     imgVar.src = element.url;
//     imgVar.alt = element.alt;
//     listVar = document.createElement(tagListItem); //=>calback to create
//     listVar.append(imgVar);     //=>calback to paste
//     pastePlace.append(listVar); //=>calback to paste
//   });
// }

// listImgMaker(images, "li","img");

//Var2

// const imgClass = "img__gallery"
// const listClass = "item__gallery"

// function listImgMaker(objArray, callbackPaste, callbackCreate, callbackAddClass, tagListItem, tagImgItem){
//   let listVar;
//   let imgVar;

// objArray.forEach(element => {
//   listVar = callbackCreate(tagListItem);
//   imgVar = callbackCreate(tagImgItem);

//   callbackAddClass(listVar, listClass);
//   callbackAddClass(imgVar, imgClass);

//   imgVar.src = element.url;
//   imgVar.alt = element.alt;

//   callbackPaste(listVar, imgVar);
//   callbackPaste(pastePlace, listVar);
// });
// }

// function appendFunc(place, item){
//   place.append(item);
// }

// function createElement(element){
//   return document.createElement(element);
// }

// function addClassToElement(element, className){
//   element.classList.add(className);
// }
// listImgMaker(images, appendFunc, createElement, addClassToElement, "li","img");

//Var3

const pastePlc = document.querySelector(".gallery");

const imgClass = "img__gallery"
const listClass = "item__gallery"

function listImgMaker(objArray, liClass, imgClass, insertDataCallback){
  const addedStrindData = objArray.map((element) => 
  `<li class= "${liClass}">
    <img src="${element.url}" alt="${element.alt}" class= "${imgClass}"/>
  </li>`
).join("");
   insertDataCallback(pastePlc, addedStrindData)
}

function stringInserter (placeToPaste, stringData){
  placeToPaste.insertAdjacentHTML("afterbegin", stringData);
}

listImgMaker(images, listClass, imgClass, stringInserter);


