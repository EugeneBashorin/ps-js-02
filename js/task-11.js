const increaseButton = document.querySelector('[data-action="increment"]');
const decreaseButton = document.querySelector('[data-action="decrement"]');
const messagePlace = document.querySelector("#warningMessage");
let valueField = document.querySelector(`[data-action="value"]`);


const handleIncrease = () =>{
    const valueData = parseInt(valueField.value);
    valueField.value = valueData + 1;
}
const handleDecrease = () =>{
    const valueData = parseInt(valueField.value);
    valueField.value = valueData - 1;
}

const validate = (eventHandler) => {
    if(!isNaN(valueField.value) && valueField.value > 0){
       messagePlace.innerHTML = "";
       eventHandler();
    }else{
       valueField.value = ""
       messagePlace.innerHTML = "Ny yok-makarek, eto je ne chislo. Misha davay po novomy";
    }
}

increaseButton.addEventListener("click", () => validate(handleIncrease));

decreaseButton.addEventListener("click", () => validate(handleIncrease));