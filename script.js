function init() {
    var isBlack = true;
    var gameBoard = document.getElementById("gameWrapper")
    var i = 0
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var tile = document.createElement("div")
            tile.classList.add(isBlack ? "blackTeil" : "whiteTeil")
            gameBoard.appendChild(tile)
            isBlack = !isBlack
        }
        isBlack = !isBlack
    }
}

window.onload = init