//Zmienilem nazwe package na packages bo byla zarezerwowana
const products = document.getElementById("products");
const orders = document.getElementById("orders");
const pack = document.querySelector(".calc__select");
const choose = document.querySelector(".select__input");
const dropDown = document.querySelector(".select__dropdown");
const accounting = document.getElementById("accounting");
const terminal = document.getElementById("terminal");
const productsView = document.querySelector("[data-id=products]");
const ordersView = document.querySelector("[data-id=orders]");
const packView = document.querySelector("[data-id=packages]");
const accountingView = document.querySelector("[data-id=accounting]");
const terminalView = document.querySelector("[data-id=terminal]");
const totalPrice = document.getElementById("total-price");

function isNumber(number){
    return typeof number === `number` && !Number.isNaN(number);
}

function getMyObject(event){
    return eval(event.target.getAttribute("id") + `View`)
}

function calculatePrice(){
    function getPrice(element){
        return parseFloat(element.innerText.substring(1))
    }
    const productOn = productsView.classList.contains("open");
    const orderOn = ordersView.classList.contains("open");
    const packOn = packView.classList.contains("open");
    const accountingOn = accountingView.classList.contains("open");
    const terminalOn = terminalView.classList.contains("open");
    const productPrice = productOn ? getPrice(productsView.children[2]) : 0;
    const ordersPrice = orderOn ? getPrice(ordersView.children[2]) : 0;
    const packagePrice = packOn ? getPrice(packView.children[2]) : 0;
    const accountingPrice = accountingOn ? getPrice(accountingView.children[1]) : 0;
    const terminalPrice = terminalOn ? getPrice(terminalView.children[1]) : 0;

    const sumPrice = productPrice + ordersPrice + packagePrice + accountingPrice + terminalPrice;

    totalPrice.children[1].innerText = `$${sumPrice}`;
    sumPrice !== 0 ? totalPrice.classList.add("open") : totalPrice.classList.remove("open");
}

function Handler(event){
    const value = parseInt(event.target.value);
    const myObj = getMyObject(event);
    if (value % 1 === 0 && isNumber(value) && value > 0) {
        myObj.classList.add("open");
        myObj.children[1].innerText = `${value} × $0.5`;
        myObj.children[2].innerText = `$${value*0.5}`;
    }else{
        myObj.classList.remove("open");
    }
    calculatePrice()
}

function dropDownExpand(event){
    dropDown.style.display === "block" ? dropDown.style.display = "none" : dropDown.style.display = "block";
}

function packageSelectHandler(event){
    packView.classList.remove("open");
    const chosenPackage = event.target.innerText
    choose.innerText = chosenPackage;
    packView.children[1].innerText =  chosenPackage;
    switch (chosenPackage){
        case "Basic": { packView.children[2].innerText = "$0"; break;}
        case "Professional": {packView.children[2].innerText = "$25"; break;}
        case "Premium": {packView.children[2].innerText = "$60"; break;}
        default: {console.log("Something went wrong- package Selection");}
    }
    packView.classList.add("open");
    calculatePrice();
}

function accountHandler(event){
    event.target.checked ? accountingView.classList.add("open") : accountingView.classList.remove("open");
    calculatePrice();
}

function terminalHandler(event){
    event.target.checked ? terminalView.classList.add("open") : terminalView.classList.remove("open");
    calculatePrice();
}

products.addEventListener("input", Handler);
orders.addEventListener("input", Handler);
pack.addEventListener("click", dropDownExpand);
dropDown.addEventListener("click",packageSelectHandler);
accounting.addEventListener("click", accountHandler);
terminal.addEventListener("click", terminalHandler);

calculatePrice();
