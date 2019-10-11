var count = 0;
var Array = [];

//create 2d array
for (var i = 0; i < 3; i++) {
    Array[i] = [];
}

function point(number) {
    if (document.getElementById(number).innerHTML == "") {
        if (count % 2 == 0) {
            document.getElementById(number).innerHTML = "X"; //insert "X"
            insertToArray(number, 'x'); //insert char to array and check winner
        } else {
            document.getElementById(number).innerHTML = "O"; //insert "O"
            insertToArray(number, 'o'); //insert char to array and check winner
        };
        count += 1;
    }
};

//insert to array
function insertToArray(number, mark) {
    a = number.charAt(0);
    b = number.charAt(number.length - 1);

    Array[a][b] = mark;

    checkWinner(mark);
}

//checking winner
function checkWinner(mark) {
    if (Array[0][0] == mark && Array[0][1] == mark && Array[0][2] == mark ||
        Array[1][0] == mark && Array[1][1] == mark && Array[1][2] == mark ||
        Array[2][0] == mark && Array[2][1] == mark && Array[2][2] == mark ||

        Array[0][0] == mark && Array[1][0] == mark && Array[2][0] == mark ||
        Array[0][1] == mark && Array[1][1] == mark && Array[2][1] == mark ||
        Array[0][2] == mark && Array[1][2] == mark && Array[2][2] == mark ||

        Array[0][0] == mark && Array[1][1] == mark && Array[2][2] == mark ||
        Array[0][2] == mark && Array[1][1] == mark && Array[2][0] == mark
    ) {
        if (mark == 'x') {
            document.getElementById("winner-h1").innerHTML = "Winner: X"
            document.getElementById("winner-div").style.visibility = "visible";
        } else {
            document.getElementById("winner-h1").innerHTML = "Winner: O!"
            document.getElementById("winner-div").style.visibility = "visible";
        }
    }
    /*else if(
        Array[0][0] !== null && Array[0][1] !== null  && Array[0][2] !== null  &&
        Array[1][0] !== null  && Array[1][1] !==null  && Array[1][2] !== null  &&
        Array[2][0] !== null  && Array[2][1] !== null  && Array[2][2] !== null

    ){ document.getElementById("winner-h1").innerHTML = "Remis!"
         document.getElementById("winner-div").style.visibility = "visible";
    };*/
}

function reset() {

    /*simple clearing button*/
    document.getElementById('00').innerHTML = "";
    document.getElementById('01').innerHTML = "";
    document.getElementById('02').innerHTML = "";
    document.getElementById('10').innerHTML = "";
    document.getElementById('11').innerHTML = "";
    document.getElementById('12').innerHTML = "";
    document.getElementById('20').innerHTML = "";
    document.getElementById('21').innerHTML = "";
    document.getElementById('22').innerHTML = "";

    /*clearing and creating new array*/
    Array.length = 0;
    Array = [];

    for (var i = 0; i < 3; i++) {
        Array[i] = [];
    }

    /*hide div after clicking reset button*/
    document.getElementById("winner-div").style.visibility = "hidden";
}