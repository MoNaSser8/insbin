function calc() {
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);

    let sum = num1 + num2;
    if (num1==num2) sum=3*num2;
    document.getElementById("sum").value = sum;

}