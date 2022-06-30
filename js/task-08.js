//Write a script to control login form.
 
//<form class="login-form">
//  <label>
//    Email
//    <input type="email" name="email" />
//  </label>
//  <label>
//    Password
//    <input type="password" name="password" />
//  </label>
//  <button type="submit">Login</button>
//</form>

//+++ Handling of submit the form form.login-form should be on the "submit" event.
//+++ When the form is submissing, the page should not reload.
//+++ If there are empty fields in the form, display an alert with a warning that all fields must be filled.
//If the user has filled in all the fields and submitted the form, 
            //collect the field values into an object where the field name will be the property name and the field value will be the property value. To access form elements, use the property elements.
//Display the object with the entered data in the console and clear the values of the form fields using the method reset.

const formData = document.querySelector(".login-form");

const submitHandler = (event) => {
    event.preventDefault();

    // if(event.currentTarget.email.value === "" || event.currentTarget.password.value === ""){
        // alert("Warning!!! All fields must be filled")
    // } else {
        // const enteredData = {};
        // enteredData.email = event.currentTarget.email.value;
        // enteredData.password = event.currentTarget.password.value;
        // console.log(enteredData);
        ////    
        ////event.currentTarget.email.value = "";
        ////event.currentTarget.password.value = "";
        // event.currentTarget.reset();
    // }
    //VAR2
    const { elements : {email, password}} = event.currentTarget;

    if(email.value === "" || password.value === ""){
             alert("Warning!!! All fields must be filled");
    } else {
        const enteredData = {};
        enteredData.email = email.value;
        enteredData.password = password.value;
        console.log(enteredData);
        event.currentTarget.reset();
    }
}

formData.addEventListener("submit", submitHandler); 