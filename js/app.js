
const products = document.getElementById("products");
const orders = document.getElementById("orders");
const package = document.getElementById("package");

const dropDown = document.querySelector(".select__dropdown");

const accounting = document.getElementById("accounting");
const terminal = document.getElementById("terminal");
const productsView = document.querySelector("[data-id=products]");
const ordersView = document.querySelector("[data-id=orders]");
const packageView = document.querySelector("[data-id=package]");
const accountingView = document.querySelector("[data-id=accounting]");
const terminalView = document.querySelector("[data-id=terminal]");
const totalPrice = document.getElementById("total-price");

function isNumber(number){
    return typeof number === `number` && !Number.isNaN(number);
}

function Handler(event){

    const value = parseInt(event.target.value);
    console.log("value: ",value);
    console.log("type of: ",typeof value);
    console.log("Warunek value % 1: ",value % 1);
    console.log("Warunek isNumber(value): ",isNumber(value));

    console.log("Warunek value % 1 === 0 && isNumber(value): ",value % 1 === 0 && isNumber(value));

    if (value % 1 === 0 && isNumber(value) && value > 0) {
        eval(event.target.getAttribute("id") + `View`).classList.add("open");
        console.log("Yes: ",event.target.value);
    }else{
        eval(event.target.getAttribute("id") + `View`).classList.remove("open");
        console.log("No: ",event.target.value);
    }
}


products.addEventListener("input", Handler);
orders.addEventListener("input", Handler);
