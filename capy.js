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
        //we want 9 divs - 0 to 8
        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setCapy, 1500);
    //setInterval(setBeaver, 2000); 
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();

}

function setCapy() {
    let capy = document.createElement("img");
    capy.src = './assets/images/capy.png';

    //get random tile
    let tile = getRandomTile();
    currentCapyTile = document.getElementById(tile);
    currentCapyTile.appendChild(capy);
    console.log(`Tile ${tile} has been selected.`)

}

