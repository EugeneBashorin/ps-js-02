//Write a script that reacts to a change of value in the input#font-size-control (input event) and changes the inline style of span#text by updating the font-size property.
//As a result, when you drag the slider, the text size will change. 

//<input id="font-size-control" type="range" min="16" max="96" />
//<br />
//<span id="text">Abracadabra!</span>

const spanData = document.querySelector("#text");
const barInputData = document.querySelector("#font-size-control");

const barInputHandler = (event) => {
    const tempInputValue = event.currentTarget.value;
    spanData.style.fontSize = `${tempInputValue}px`;
}

barInputData.addEventListener("input", barInputHandler);