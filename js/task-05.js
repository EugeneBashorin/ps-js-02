//Write a script that, when typing a text in inpute input#name-input (event input), paste its current value in span#name-output. If the input is empty, in the span element should be displayed string "Anonymous".
//<input type="text" id="name-input" placeholder="Please enter your name" />
//<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
const inputData = document.querySelector("#name-input");
const outputData = document.querySelector("#name-output");

const handleInput = (event) => {
   outputData.textContent = event.currentTarget.value;
   if(outputData.textContent === ""){
    outputData.textContent = "Anonymous";
   }
}

inputData.addEventListener("input", handleInput);