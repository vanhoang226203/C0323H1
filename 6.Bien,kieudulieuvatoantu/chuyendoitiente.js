   function changeMoney() {
       let money = document.getElementById("money").value
       let from = document.getElementById("from").value
       let to = document.getElementById("to").value
       console.log(typeof money)
       let result = money * to / from
       document.getElementById("result").innerHTML = "Result: " + result
   }