
var Hitrn = 0;
var score = 0;
var Bacground_music = new Audio("bg.mp3");
var incorrect_sound = new Audio("incorrect.mp3")
var Win_sound = new Audio("win.mp3")
var gameOver = document.getElementById("gameOver")
gameOver.style.display = "none"
function bubbleMaker() {
    var bubbles = "";
    for (let i = 1; i <= 249; i++) {
        var rn = Math.floor(Math.random() * 10)
        bubbles += `<div class="bubble">${rn}</div>`
        document.getElementById("bubble-container").innerHTML = bubbles
    }
}
function timer() {
    var Coundown = 60;
    var interval = setInterval(function () {
        if (Coundown > 0) {
            Coundown--
            document.getElementById("timeVal").innerHTML = Coundown

        }

        else {
            Bacground_music.pause()
            Win_sound.play()
            clearInterval(interval);
            document.getElementById("bubble-container").innerHTML = ``
            document.getElementById("urScore").innerHTML = `your score is :<b> ${score}<b/>`
            gameOver.style.display = "flex"

            document.getElementById("ok").addEventListener("click", function () {
                gameOver.style.display = "none"
                document.getElementById("bubble-container").style.display = "none"
                document.getElementById("startBtn").style.display = "flex"
                Win_sound.pause()
                
            })


        }
    }, 1000)
}

function hit() {
    Hitrn = Math.floor(Math.random() * 10)
    document.getElementById("hitVal").innerHTML = Hitrn
}
function addTheScore() {

}
function bubbleValue() {
    document.getElementById("bubble-container").addEventListener("click",function (details) {
        console.log(details.target)
        if (Number(details.target.innerText) === Hitrn) {
            score += 10
            document.getElementById("scoreVal").innerText = score
            hit()
            bubbleMaker()
            incorrect_sound.pause()
        }
        else {
            details.target.style.backgroundColor = "red"
            var smallInt = setInterval(function () {
                hit()
                bubbleMaker()
                clearInterval(smallInt)
                incorrect_sound.play()
            }, 300)


        }
    })
}



document.getElementById("startBtn").addEventListener("click", function gameStart() {
    document.getElementById("bubble-container").style.display = "flex"
    Bacground_music.play()
    document.getElementById("startBtn").style.display = "none"
    score = 0;
    document.getElementById("scoreVal").innerText = score
    hit();
    bubbleMaker();
    timer();
    bubbleValue()





})
