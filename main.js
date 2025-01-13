const input = document.getElementById("input-box");
const num = document.querySelectorAll(".num")
const operator = document.querySelectorAll(".operator")



input.addEventListener("keydown", function (s) {
    if (s.key === "Enter") {
        console.log(input.value);
    }
}
);

num.forEach((element) => element.addEventListener("click", () => {
    input.value += element.innerHTML;
}));

function calculate(val1, val2, operator) {
    switch (operator) {
        case "+":
            return val1 + val2;
        case "-":
            return val1 - val2;
        case "*":
            return val1 * val2;
        case "/":
            return val1 / val2;

    }
}

operator.forEach((element) => element.addEventListener("click", () => {
    const operand_1 = input.value;
    input.innerHTML = ""
    const current_operator = element.innerHTML;
    if (element.innerHTML == "=") {
        const operand_2 = input.value;
        input.innerHTML = ""
        const result = calculate(operand_1, operand_2, current_operator);
        input.innerHTML = result;
    }
}));





