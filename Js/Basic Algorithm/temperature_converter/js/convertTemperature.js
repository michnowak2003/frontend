
document.getElementById("text").addEventListener("input", convertToF);
document.getElementById("inlineRadio1").addEventListener("input", convertToF);
document.getElementById("inlineRadio2").addEventListener("input", convertToF);


function convertToF(){
    let input_temperature = document.getElementById("text").value;

    let celsius_to_fahrenheit = 1.8 * input_temperature + 32;

    let fahrenheit_to_celsius = (((input_temperature - 32) * 5) / 9).toFixed(2);

    if(input_temperature != ""){
        if (document.getElementById("inlineRadio1").checked == true){

                document.getElementById("show-result").innerHTML = celsius_to_fahrenheit + "F";
            }else{
                document.getElementById("show-result").innerHTML = fahrenheit_to_celsius + "C";
            }
    } else { document.getElementById("show-result").innerHTML = "";}


}