function kiemtra(){
    let cannang = document.getElementById("cannang").value
    let chieucao = document.getElementById("chieucao").value
    let bmi = cannang / ( Math.pow(chieucao, 2) )
    let ketqua = "";
    if (bmi < 16)
        ketqua = "Gầy độ 3";
    else if (bmi < 17)
        ketqua = "Gầy độ 2"
    else if (bmi < 18.5)
        ketqua = "Gầy độ 1"
    else if (bmi < 25)
        ketqua = "Bình thường"
    else if (bmi < 30)
        ketqua = "Thừa cân"
    else if (bmi < 35)
        ketqua = "Béo phì độ 1"
    else if (bmi < 40)
        ketqua = "Béo phì độ 2"
    else
        ketqua = "Béo phì độ 3"
    document.getElementById("ketqua").innerHTML= "chỉ số BMI của bạn là :" + bmi + ketqua
}
