//The counter consists of a span and buttons, that when clicked should increase and decrease its value by one.
//  <div id="counter">
//      <button type="button" data-action="decrement">-1</button>
//      <span id="value">0</span>
//      <button type="button" data-action="increment">+1</button>
//  </div>
//Create a counterValue variable that will store the current value of the counter and initialize it to 0.
//Add click listeners to the buttons, inside of wich you can increase or decrease counter value.
//Upload the interface with the new value of the counterValue variable.

const increaseButton = document.querySelector('[data-action="increment"]');
const decreaseButton = document.querySelector('[data-action="decrement"]');
let valueField = document.querySelector("#value");

const handleClick = (event) => {
    let valueData = parseInt(valueField.textContent);
    let actionData = event.currentTarget.dataset.action;
    if(actionData === "increment"){
        // valueField.textContent++;
        // ++valueField.textContent;
        valueField.textContent = valueData + 1;
    }
    if(actionData === "decrement"){
        // valueField.textContent--;
        // --valueField.textContent;
        valueField.textContent = valueData - 1;
    }
};

increaseButton.addEventListener("click", handleClick);
decreaseButton.addEventListener("click", handleClick);