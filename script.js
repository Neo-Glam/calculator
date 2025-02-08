//valeur de base
let n1 = "";
let n2 = "";
let operator = "";

//operation
const add = function(n1, n2) {
    console.log(n1 + n2);
	return Number(n1) + Number(n2);
};

const subtract = function(n1, n2) {
    console.log(n1 - n2);
	return Number(n1) - Number(n2);
};

const multiply = function(n1, n2) {
    console.log(n1 * n2);
    return Number(n1) * Number(n2);
};

const divide = function(n1, n2) {
    console.log(n1 / n2);
    return Number(n1) / Number(n2);
};

const operate = function(n1,n2,operator){
    if (operator === "+")
        return add(n1,n2);
    else if (operator === "-")
        return subtract(n1,n2);
    else if (operator === "*")
        return multiply(n1,n2);
    else if (operator === "/")
        return divide(n1,n2);
    else
        return n1;
}

//variable liee aux boutons
const b1 = document.querySelector('#b1')
const b2 = document.querySelector('#b2')
const b3 = document.querySelector('#b3')
const b4 = document.querySelector('#b4')
const b5 = document.querySelector('#b5')
const b6 = document.querySelector('#b6')
const b7 = document.querySelector('#b7')
const b8 = document.querySelector('#b8')
const b9 = document.querySelector('#b9')
const b0 = document.querySelector('#b0')
const bPlus = document.querySelector('#bPlus')
const bMinus = document.querySelector('#bMinus')
const bMul = document.querySelector('#bMul')
const bDiv = document.querySelector('#bDiv')
const bEgal = document.querySelector('#bEgal')
const bClear = document.querySelector('#bClear')

//evenement apres click sur bouton
b1.addEventListener("click",()=>{
    if(operator ===""){
        n1 += "1";
        screen.textContent = n1;
        console.log("n1 = ",n1);
        return;
    }
    else{
        n2 += "1";
        screen.textContent = n2;
        console.log("n2 = ",n2);
        return;
    }
})

b2.addEventListener("click",()=>{
    if(operator ===""){
        n1 += "2";
        screen.textContent = n1;
        console.log("n1 = ",n1);
        return;
    }
    else{
        n2 += "2";
        screen.textContent = n2;
        console.log("n2 = ",n2);
        return;
    }
})

b3.addEventListener("click",()=>{
    if(operator ===""){
        n1 += "3";
        console.log("n1 = ",n1);
        screen.textContent = n1;
        return;
    }
    else{
        n2 += "3";
        screen.textContent = n2;
        console.log("n2 = ",n2);
        return;
    }
})

b4.addEventListener("click",()=>{
    if(operator ===""){
        n1 += "4";
        screen.textContent = n1;
        console.log("n1 = ",n1);
        return;
    }
    else{
        n2 += "4";
        screen.textContent = n2;
        console.log("n2 = ",n2);
        return;
    }
})

b5.addEventListener("click",()=>{
    if(operator ===""){
        n1 += "5";
        screen.textContent = n1;
        console.log("n1 = ",n1);
        return;
    }
    else{
        n2 += "5";
        screen.textContent = n2;
        console.log("n2 = ",n2);
        return;
    }
})

b6.addEventListener("click",()=>{
    if(operator ===""){
        n1 += "6";
        screen.textContent = n1;
        console.log("n1 = ",n1);
        return;
    }
    else{
        n2 += "6";
        screen.textContent = n2;
        console.log("n2 = ",n2);
        return;
    }
})

b7.addEventListener("click",()=>{
    if(operator ===""){
        n1 += "7";
        screen.textContent = n1;
        console.log("n1 = ",n1);
        return;
    }
    else{
        n2 += "7";
        screen.textContent = n2;
        console.log("n2 = ",n2);
        return;
    }
})

b8.addEventListener("click",()=>{
    if(operator ===""){
        n1 += "8";
        screen.textContent = n1;
        console.log("n1 = ",n1);
        return;
    }
    else{
        n2 += "8";
        screen.textContent = n2;
        console.log("n2 = ",n2);
        return;
    }
})

b9.addEventListener("click",()=>{
    if(operator ===""){
        n1 += "9";
        screen.textContent = n1;
        console.log("n1 = ",n1);
        return;
    }
    else{
        n2 += "9";
        screen.textContent = n2;
        console.log("n2 = ",n2);
        return;
    }
})
b0.addEventListener("click",()=>{
    if(operator ===""){
        n1 += "0";
        screen.textContent = n1;
        console.log("n1 = ",n1);
        return;
    }
    else{
        n2 += "0";
        screen.textContent = n2;
        console.log("n2 = ",n2);
        return;
    }
})
bPlus.addEventListener("click",()=>{
    if (n2 !== "" && operator !== ""){
        screen.textContent = (operate(n1,n2,operator));
        n1 =operate(n1,n2,operator);
        n2 = "";
        operator = "+";
        return;
    }
    operator = "+";
    console.log("operator = ",operator);
    return;
})
bMinus.addEventListener("click",()=>{
    if (n2 !== "" && operator !== ""){
        screen.textContent = (operate(n1,n2,operator));
        n1 =operate(n1,n2,operator);
        n2 = "";
        operator = "-";
        return;
    }
    operator = "-";
    console.log("operator = ",operator);
    return;
})
bMul.addEventListener("click",()=>{
    if (n2 !== "" && operator !== ""){
        screen.textContent = (operate(n1,n2,operator));
        n1 =operate(n1,n2,operator);
        n2 = "";
        operator = "*";
        return;
    }
    operator = "*";
    console.log("operator = ",operator);
    return;
})
bDiv.addEventListener("click",()=>{
    if (n2 !== "" && operator !== ""){
        screen.textContent = (operate(n1,n2,operator));
        n1 =operate(n1,n2,operator);
        n2 = "";
        return;
    }
    operator = "/";
    console.log("operator = ",operator);
    return;
})
bEgal.addEventListener("click",()=>{
    screen.textContent = (operate(n1,n2,operator));
    n1 =operate(n1,n2,operator);
    n2 = "";
    operator = "";
    return;
})
bClear.addEventListener("click",()=>{
    n1 = "";
    n2 = "";
    operator = "";
    screen.textContent = "CLEAR";
    return;
})

//ecrand
const screen = document.querySelector('#ecrand');

screen.textContent = 0;