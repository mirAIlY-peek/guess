document.getElementById("win_display").style.display = "none";
document.getElementById("lose_display").style.display = "none";
document.getElementById("restart_btn").style.display = "none";


let enter_sound = new Audio('music/pop.mp3');

let win_sound = new Audio('music/win.mp3');

let lose_sound = new Audio('music/lose.mp3');

let originalnum = Math.floor(Math.random() * 10) + 1;
let counter = 3;
let lastguess;


let input = document.getElementById("input_num");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("enter_btn").click();
    }
});


//Окочание
function guess() {
    enter_sound.play();
    enter_sound.currentTime = 0;
    let guessnum = document.getElementById('input_num').value;
    lastguess = guessnum;
    document.getElementById('last_guess').innerHTML = "Последнее предположение: " + lastguess;


    if (guessnum < originalnum) {
        document.getElementById('display').innerHTML = "Холодно &#128528;";
    } else if (guessnum > originalnum) {
        document.getElementById('display').innerHTML = "Жарко &#128530;";
    }
    if (guessnum == originalnum) {
        win_sound.play();
        win_sound.currentTime = 0;
            document.getElementById('display').innerHTML = "Ты выйграл!";
            document.getElementById("win_display").style.display = "";
            document.getElementById("enter_btn").style.display = "";
            document.getElementById("restart_btn").style.display = "";
    } else {
        counter--;
    }
    document.getElementById('total_guess').innerHTML = "попыток: " + counter;
    if (counter == 0) {
        lose_sound.play();
            counter=3
            document.getElementById('display').innerHTML = "Ты проиграл";
            document.getElementById("lose_display").style.display = "";
            document.getElementById("enter_btn").style.display = "";
            document.getElementById("restart_btn").style.display = "";

    }
}





//перезагрузка игры
function restartgame() {
        enter_sound.play();
        enter_sound.currentTime = 0;
    window.counter = 4;
    window.originalnum = Math.floor(Math.random() * 10) + 1;
        document.getElementById("win_display").style.display = "none";
        document.getElementById("lose_display").style.display = "none";
        document.getElementById("restart_btn").style.display = "none";
        document.getElementById("enter_btn").style.display = "";
        document.getElementById('total_guess').innerHTML = "Попыток: " + counter;
        document.getElementById('last_guess').innerHTML = "Игра перезапускается";
        document.getElementById('display').innerHTML = "Введите число от 1 до 10!";

}
