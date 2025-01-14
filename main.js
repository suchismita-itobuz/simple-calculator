let input = document.getElementById("input-box");
const num = document.querySelectorAll(".num");
const operator = document.querySelectorAll(".operator");
const all_clear = document.querySelector("#all-clear");
const clear = document.querySelector("#clear");
const toggle_sign = document.querySelector(".toggle-sign");
const percentage = document.querySelector(".percentage");
const decimal = document.querySelector(".decimal");


let operand_1 = null;
let operand_2 = null;
let current_operator = null;


input.addEventListener("input", (e) => {
    if (isNaN(input.value)) {
        alert("Please enter a valid number");
        input.value = "";
    }
})

num.forEach((element) => element.addEventListener("click", () => {
    input.value += element.innerHTML;
}));

function calculate(val1, val2, operator) {
    val1 = Number(val1);
    val2 = Number(val2);
    switch (operator) {
        case "+":
            return parseFloat(val1 + val2).toFixed(2);
        case "-":
            return parseFloat(val1 - val2).toFixed(2);
        case "*":
            return parseFloat(val1 * val2).toFixed(2);
        case "/":
            return parseFloat(val1 / val2).toFixed(2);

    }
}

operator.forEach((element) => element.addEventListener("click", () => {
    if (element.innerHTML !== "=") {
        operand_1 = input.value;
        input.value = "";
        current_operator = element.innerHTML;
       
    }

    else {
        operand_2 = input.value;
        input.value = "";
        let result = calculate(operand_1, operand_2, current_operator);
        input.value = result;
        
    }

}));

all_clear.addEventListener("click", () => {
    input.value = "";
});

clear.addEventListener("click", () => {
    if(input.value==="Infinity" || input.value==="-Infinity" || input.value==="NaN" || input.value==="undefined"){
        input.value="";
       
    }
    else{
    input.value = input.value.substring(0, input.value.length - 1);
    
    }
});

toggle_sign.addEventListener("click", () => {
    input.value = String(Number(input.value) * -1);
})

percentage.addEventListener("click", () => {
    input.value = String(Number(input.value) / 100);
})

decimal.addEventListener("click", () => {
    if (input.value.includes(".")) {
        alert("You have already put a decimal")
    }
    else {
        input.value += decimal.innerHTML
       
    }

})





