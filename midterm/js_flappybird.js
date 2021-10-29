// CONSTANTS

let speed = 5;
let gravity = 0.5;
let pipeGap = 21;
let pipeSpacing = 115;
let pipeRandomPlacementNum = 43;

//Getting references
let bird = document.querySelector('.bird');
let birdProps = bird.getBoundingClientRect(); //get dimensions from CSS changes
let background = document.querySelector('.background').getBoundingClientRect(); //get dimensions from CSS changes

let scoreLabel = document.getElementById("scoreLabel");
let scoreVal = document.getElementById("scoreCount");

let message = document.getElementById("startMessage");


//Game implementation

let gameState = "ready";

document.addEventListener('keydown', (e) => {
    //Start game if space bar is pressed and currently not in the middle of game
    if (e.key === ' ' && gameState != "play"){
        //Commence game set up
        //Update bird position
        birdProps = bird.getBoundingClientRect(); //get dimensions from CSS changes
        //remove pipes
        document.querySelectorAll('.pipe').forEach((e) => {
            e.remove();
        });
        //put bird in starting position
        bird.style.top = '40vh';
        gameState = "play";
        //Set game texts to hide and return to 0
        message.innerHTML = ' ';
        scoreVal.innerHTML = "0";
        playGame();
    }
});
 
function playGame() {
    function move() {
        if (gameState != "play"){
            return;
        }
        let pipe = document.querySelectorAll('.pipe');
        pipe.forEach((e) => {
            let pipeProps = e.getBoundingClientRect();

            //Update birdProps with current rect size + coordinates;
            birdProps = bird.getBoundingClientRect();


            //Move/remove pipes out of frame if they have passed
            if (pipeProps.right <= 0) {
                e.remove();
            } else {
                //If bird hits pipes
                if (birdProps.left < pipeProps.left + pipeProps.width && 
                    birdProps.left + birdProps.width > pipeProps.left &&
                     birdProps.top < pipeProps.top + pipeProps.height &&
                      birdProps.top + birdProps.height > pipeProps.top) {
                        gameState = "end";
                        message.innerHTML = "Press Space to Restart";
                        return;
                } else {
                    //Bird gets thru pipe
                    if (pipeProps.right < birdProps.left &&
                        pipeProps.right + speed >= birdProps.left) {
                            //increase score
                            scoreVal.innerHTML = + scoreVal.innerHTML + 0.5;
                        }
                        e.style.left = pipeProps.left - speed + 'px';
                }
            }
        });

        requestAnimationFrame(move);
    }
        requestAnimationFrame(move);

let bird_dy = 0;
function applyGravity() {
if (gameState != 'play') {
    return;
}
bird_dy = bird_dy + gravity;

document.addEventListener('keydown', (e) => {
    if (e.key === ' '){
        //flap = change in dy
        bird_dy = -8;
    }
});

//bird hits top or bottom of window
if (birdProps.top <= 0 || birdProps.bottom >= background.bottom) {
    gameState = "end";
    message.innerHTML = "Press Space to Restart";
    return;
}
bird.style.top = birdProps.top + bird_dy + 'px';
//update birdProps at current size + coordinates
birdProps = bird.getBoundingClientRect();
requestAnimationFrame(applyGravity);
}
requestAnimationFrame(applyGravity);

let pipeSeparation = 0;

function createPipe() {
    if (gameState != "play") {
    return;
    }

    //keeps pipes spaced out
    if (pipeSeparation > pipeSpacing) {
    pipeSeparation = 0;
    
    
    let pipePosition = Math.floor(Math.random() * pipeRandomPlacementNum) + 8;
    let pipeInv = document.createElement('div');
    pipeInv.className = 'pipe';
    pipeInv.style.top = pipePosition - 70 + 'vh';
    pipeInv.style.left = '100vw';
    document.body.appendChild(pipeInv);

        
    let pipe = document.createElement('div');
    pipe.className = 'pipe';
    pipe.style.top = pipePosition + pipeGap + 'vh';
    pipe.style.left = '100vw';
    document.body.appendChild(pipe);
    
    }
    pipeSeparation++;
    requestAnimationFrame(createPipe);
}
requestAnimationFrame(createPipe);
}