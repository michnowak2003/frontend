document.getElementById("inputText").addEventListener("input", longestWord);

function longestWord(){
    let inputStringToWord = document.getElementById("inputText").value.split(' ');

    let longestWord = "";


    for(let i = 0; i < inputStringToWord.length; i++){
        if(longestWord.length < inputStringToWord[i].length){
            longestWord = inputStringToWord[i];
        }
    }

    document.getElementById("result").innerHTML = longestWord;
}