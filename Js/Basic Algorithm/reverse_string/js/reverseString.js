document.getElementById("inputText").addEventListener("input", reverseString);

function reverseString(){
    let inputStringValue = document.getElementById("inputText").value; //read string from input
    let stringSplit = inputStringValue.split(''); //convert string to array

    document.getElementById("result").innerHTML = stringSplit.reverse().join(''); //reverse position in array and join
}