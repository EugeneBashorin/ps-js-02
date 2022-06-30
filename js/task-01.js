//write script wich
//Count and display in console quantity of categories in в ul#categories, that is the elements of li.item.
//For each li.item in list of ul#categories, find and display to console - title text (teg`s <h2>) and quantity of elements in category (all nested in it <li>).
//As a result, the following messages will be displayed in the console^

//Number of categories: 3
//Category: Animals
//Elements: 4
//Category: Products
//Elements: 3
//Category: Technologies
//Elements: 5

const listElements = document.querySelector("#categories");
const categoriesAmount = listElements.children.length;
console.log(`Number of categories: ${categoriesAmount}`);

listElements.querySelectorAll(".item").forEach( categoryList => {
    console.log(`Category: ${categoryList.querySelector("h2").textContent}`)
    console.log(`Elements: ${categoryList.querySelector("ul").children.length}`)
});
