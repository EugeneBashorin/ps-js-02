//Write a script, that when focus is lost on a input  (blur event), checked its content for the correct numbers of entered simbols(characters).
//<input
//  type="text"
//  id="validation-input"
//  data-length="6"
//  placeholder="Please enter 6 symbols"
///>

//Quantity of chraracters should be in thie input is specified in its atribute data-length.
//If the correct number of characters is entered, the input's border becomes green, if the wrong number is red.
//To add styles, use the CSS classes valid and invalid, which we have already added to the source files of the task.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
// border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputField = document.querySelector("#validation-input");
const atributeData = parseInt(inputField.getAttribute("data-length"));

const inputHandler = (event) => {
    event.preventDefault();
    let tempDataLength = parseInt(event.currentTarget.value.trim().length);
    if (tempDataLength <= atributeData) {
    inputField.classList.contains("invalid") ? inputField.classList.replace("invalid", "valid") : inputField.classList.add("valid") 
}else{
    inputField.classList.contains("valid") ? inputField.classList.replace("valid", "invalid") : inputField.classList.add("invalid")
    }
}

inputField.addEventListener("blur", inputHandler);