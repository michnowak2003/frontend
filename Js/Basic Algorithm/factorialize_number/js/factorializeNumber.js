document.getElementById("inputNumber").addEventListener("input", factorializeNumber);
document.getElementById("radioSimple").addEventListener("input", factorializeNumber);
document.getElementById("radioAdvanced").addEventListener("input", factorializeNumber);

function factorializeNumber(){
    let inputNumber = document.getElementById("inputNumber").value;
    let result = 1;

    let resultField = document.getElementById("resultNumber");

    resultField.innerHTML = inputNumber + "! = ";

    if(document.getElementById("radioAdvanced").checked == true){
        for (let i = 1; i <= inputNumber; i++) {
            if(i != inputNumber){
                result *= i;
               resultField.innerHTML += i + " * "
            }else{
                result *= i;
                resultField.innerHTML += i + " = " + result;
            }
        }
    }else{
        for (let i = 1; i <= inputNumber; i++) {
            result *= i;
        }
        resultField.innerHTML += result;
    }
}
