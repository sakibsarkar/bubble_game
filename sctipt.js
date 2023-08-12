
var Hitrn = 0;
var score = 0;
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
    var Coundown = 1;
    var interval = setInterval(function () {
        if (Coundown > 0) {
            Coundown--
            document.getElementById("timeVal").innerHTML = Coundown

        }

        else {
            clearInterval(interval);
            document.getElementById("bubble-container").innerHTML = ``
            document.getElementById("urScore").innerHTML = `your score is : ${score}`
            gameOver.style.display = "flex"
            
            document.getElementById("ok").addEventListener("click",function(){
                gameOver.style.display = "none"
            document.getElementById("startBtn").style.display = "flex"
            })
            

        }
    }, 1000)
}

function hit() {
    Hitrn = Math.floor(Math.random() * 10)
    document.getElementById("hitVal").innerHTML = Hitrn
}
function addTheScore() {
    score += 10
    document.getElementById("scoreVal").innerText = score
}
function bubbleValue() {
    document.getElementById("bubble-container").addEventListener("click", (details) => {

        if (Number(details.target.innerText) === Hitrn) {
            console.log("kemne ki ")
            addTheScore()
            hit()
            bubbleMaker()
        }
        else {
            hit()
            bubbeMaker()
        }
    })
}



document.getElementById("startBtn").addEventListener("click", function gameStart() {

        document.getElementById("startBtn").style.display = "none"
        hit();
        bubbleMaker();
        timer();
        bubbleValue()
        
    
    


})
