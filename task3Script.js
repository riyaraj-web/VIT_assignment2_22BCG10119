function multiply() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if (num1 === "" || num2 === "" || isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers!";
    } else {
        document.getElementById("result").innerHTML = "The Result Is: " + (num1 * num2);
    }
}

function divide() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if (num1 === "" || num2 === "" || isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers!";
    } else if (num2 == 0) {
        document.getElementById("result").innerHTML = "Cannot divide by zero!";
    } else {
        document.getElementById("result").innerHTML = "The Result Is: " + (num1 / num2);
    }
}
