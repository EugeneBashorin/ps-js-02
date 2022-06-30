//In HTML exist empty list ul#ingredients.
//<ul id="ingredients"></ul>
//In JavaScript exist array with strings
// const ingredients = [
// "Potatoes",
// "Mushrooms",
// "Garlic",
// "Tomatos",
// "Herbs",
// "Condiments",
//];

//Write script, wich for each element of the array ingredients:
//Create separate element <li>. Be sure to use the document.createElement() method.
//Add the name of the ingridient as its text content
//Add to element the class item
//After that It will insert all the <li> in one operation into the ul.ingredients list. 

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const appendPlace = document.querySelector("#ingredients");

const dataListContent = listCreaterFunc(ingredients, "li", "item");

dataPaste(dataListContent, appendPlace);

function listCreaterFunc (array, tagElem, classElem){
  const listArr = [];
  for(let element of array){
    let data = document.createElement(tagElem);
    data.classList.add(classElem);
    data.textContent = element;
    listArr.push(data); 
  }
  return listArr;
}

function dataPaste(listData, elementToPaste) {
  listData.forEach(element => {
    elementToPaste.append(element);
  });
};

