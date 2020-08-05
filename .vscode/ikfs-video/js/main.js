function calcAmount() {
    let price = 1000;
    let amountImput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountImput.value);
    amountNumber = (isNaN(amountNumber)) ? 0 : amountNumber;
    showSumPrice(price, amountNumber);
}




function showSumPrice(price, amountNumber) {
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 hamburgert lehet rendelni");
        return;
    } else if (amountNumber < 1) {
        alert("Minimum 1 hamburgert kell rendelnie");
    }


    let amount = amountNumber * price;
    showAmount.innerHTML = amount;
}
//Add helptext.

let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket!";

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

let sendButton = document.querySelector("div .btn.btn-primary");
//sendButton.onclick = function() {
//   alert("Helló JS!");
//}

sendButton.addEventListener("click", function () {
    alert("Helló JS!");
});

window.addEventListener("resize", function () {
    console.log(this.innerHeight, this.innerWidth);
})

//Űrlap események.

let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function (ev) {
    ev.preventDefault();
    let inputs = document.querySelectorAll("input");
    let values = {};
    for (let i=0; i<inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
    }
console.log(values);
})

//Parent element kezelése.

let alertCloseButton = document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseEventHandlerFunction = function(ev){
    this.parentElement.style.display = "none";
}
for ( let i=0; i<alertCloseButton.length; i++) {
    alertCloseButton[i].addEventListener("click", alertCloseEventHandlerFunction);
}

let toppings = [
    "Bacon",
    "Hagyma",
    "Sajt",
    "Ananász",
    "Libamáj"
]
let toppingselect = document.querySelector("#topInput");
let index = 0;
while (index<toppings.length) {
    let option = document.createElement("option");
    option.value = index;
    option.innerHTML = toppings[index];
    toppingselect.appendChild(option);
    index++;

}