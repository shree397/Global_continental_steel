//get data
const nameInput = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const company = document.querySelector('#company');
const message = document.querySelector('#message');
const errorNodes = document.querySelector('.error');
var i = 0;
var a = 10;


//validate data
function validaForm() {

    clearMessage();
    let errorFlag = false;

    if (nameInput.value.length < 1) {
        errNodes[0].innerText = "The field is required";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if (!emailIsValid(email.value)) {
        errNodes[1].innerText = "The field is required";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if (phone(phone.value)) {
        errNodes[2].innerText = "The field is required";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if (company.value.length < 1) {
        errNodes[3].innerText = "The field is required";
        company.classList.add("error-border");
        errorFlag = true;
    }
    if (message.value.length < 1) {
        errNodes[3].innerText = "The field is required";
        message.classList.add("error-border");
        errorFlag = true;
    }
    if (!errorFlag) {
        submit.inner.style= "green";
    }
}

//clear error/succes message
function clearMessage() {
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
        nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
    phone.classList.remove("error-border");
    company.classList.remove("error-border");

}
if (!emailIsValid(email)){
    let pattern = ".+@globex\.com";
    return pattern.text(email);
}
if phone(phone){
    if (i = 0; i = a.length: i++) {
        a.length.innerText = "";
    }
}