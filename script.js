var turn = "O";
let gameover = false;
function tab(clicked_id){
    if(document.getElementById(clicked_id).innerHTML === ""){
        document.getElementById(clicked_id).innerHTML = turn;
        checkwin();
        if(!gameover){
            document.querySelector(".turn1").innerHTML = turn + "'s turn";
        }
        turn = turn === "O" ? "X" : "O";
    }
}

const reset = document.querySelector("#reset");

reset.addEventListener("click", (event) => {
    for(var i = 1 ; i<10 ; i++)
        document.querySelector("#a"+i).innerHTML ="";
    turn = "O";
    document.querySelector(".turn1").innerHTML = turn + "'s turn";
    gameover = false;
});

const checkwin = ()=>{
    let win = [
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,5,9],
        [3,5,7]
    ]
    win.forEach(element => {
        if(document.getElementById("a"+element[0]).innerHTML !== "" && 
        document.getElementById("a"+element[0]).innerHTML === document.getElementById("a"+element[1]).innerHTML &&
        document.getElementById("a"+element[0]).innerHTML === document.getElementById("a"+element[2]).innerHTML){
            document.querySelector(".turn1").innerHTML = document.getElementById("a"+element[2]).innerHTML+" Wins ";
            gameover = true;
        }
    });
}