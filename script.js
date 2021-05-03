function init() {

    var isBlack = true;

    var gameBoard = document.getElementById("gameWrapper")

    var i = 0

    const letters = ["A", "B", "C", "D", "E", "F", "G", "H"]

    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var tile = document.createElement('div')
            tile.classList.add(isBlack ? 'blackTile' : 'whiteTile')
            gameBoard.appendChild(tile)
            isBlack = !isBlack
        }
        isBlack = !isBlack
    }
}
window.onload = init



let basket = []
let items = [
    {
        model: "LG Velvet 5G",
        year: 2021,
        price: 599
    },
    {
        model: "Xiaomi Redmi 8",
        year: 2019,
        price: 15000
    },
    {
        model: "Nokia 8.3 5G",
        year: 2021,
        price: 479
    },
    {
        model: "iPhone x11",
        year: 2018,
        price: 8764
    }
]
basket.push(items[3])
basket.push(items[0])
basket.push(items[1])
basket.push(items[2])

function korzina() {
    let basketDiv = document.getElementById('basket')
    basket.map(e => {
        let itemDiv = document.createElement('div')
        itemDiv.innerHTML = `${e.model} ${e.price}`
        basketDiv.appendChild(itemDiv)
    })
}
// window.onload = korzina