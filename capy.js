let currentCapyTile;
let currentBeaverTile;
let score = 0;
let gameOver = false;

window.onload = function () {
    setGame();
}

function setGame() {

    //set up game board
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setCapy, 1500);
    setInterval(setBeaver, 2000); 
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();

}

function setCapy() {
    if (gameOver) {
        return;
    }
    if (currentCapyTile) {
        currentCapyTile.innerHTML = "";
    }

    let capy = document.createElement("img");
    capy.src = './assets/images/capy.png';

    let num = getRandomTile();
    if (currentBeaverTile && currentBeaverTile.id == num) {
        return;
    }

    currentCapyTile = document.getElementById(num);
    currentCapyTile.appendChild(capy);

    console.log(`Tile ${num} has been selected.`);
}

function setBeaver() {
    if (gameOver) {
        return;
    }
    if (currentBeaverTile) {
        currentBeaverTile.innerHTML = "";
    }

    let beaver = document.createElement("img");
    beaver.src = "./assets/images/beaver.png";

    let num = getRandomTile();
    if (currentBeaverTile && currentCapyTile.id == num) {
        return;
    }

    currentBeaverTile = document.getElementById(num);
    currentBeaverTile.appendChild(beaver);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currentCapyTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if (this == currentBeaverTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString(); //update score html
        gameOver = true;
    }
}
