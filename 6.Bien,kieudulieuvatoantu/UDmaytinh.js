
    function cong() {
        let number1 = document.getElementById("num1").value;
        let number2 = document.getElementById("num2").value;
        let answer = Number(number1) + Number(number2)
        document.getElementById("kq").innerHTML = answer;
    }
    function tru() {
        let number1 = document.getElementById("num1").value;
        let number2 = document.getElementById("num2").value;
        let answer = Number(number1) - Number(number2)
        document.getElementById("kq").innerHTML = answer;
    }
    function nhan() {
        let number1 = document.getElementById("num1").value;
        let number2 = document.getElementById("num2").value;
        let answer = Number(number1) * Number(number2)
        document.getElementById("kq").innerHTML = answer;
    }
    function chia() {
        let number1 = document.getElementById("num1").value;
        let number2 = document.getElementById("num2").value;
        let answer = Number(number1) / Number(number2)
        document.getElementById("kq").innerHTML = answer;
    }