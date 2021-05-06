// let basket = []
// let items = [
//     {
//         model: "LG Velvet 5G",
//         year: 2021,
//         price: 599
//     },
//     {
//         model: "Xiaomi Redmi 8",
//         year: 2019,
//         price: 15000
//     },
//     {
//         model: "Nokia 8.3 5G",
//         year: 2021,
//         price: 479
//     },
//     {
//         model: "iPhone x11",
//         year: 2018,
//         price: 8764
//     }
// ]
// basket.push(items[3])
// basket.push(items[0])
// basket.push(items[1])
// basket.push(items[2])

// function korzina() {
//     let basketDiv = document.getElementById('basket')
//     basket.map(e => {
//         let itemDiv = document.createElement('div')
//         itemDiv.innerHTML = `${e.model} ${e.price}`
//         basketDiv.appendChild(itemDiv)
//     })
// }
// window.onload = korzina




let storeState = {
    availableProducts: [
        {
            id: 1,
            model: "LG Velvet 5G",
            year: 2021,
            price: 599
        },
        {
            id: 2,
            model: "Xiaomi Redmi 8",
            year: 2019,
            price: 15000
        },
        {
            id: 3,
            model: "Nokia 8.3 5G",
            year: 2021,
            price: 479
        },
        {
            id: 4,
            model: "iPhone x11",
            year: 2018,
            price: 8764
        }
    ],
    basket: []
}

function drawAvailableProducts() {
    let allProductsDiv = document.getElementById('availableProducts')

    storeState.availableProducts.forEach(product => {
        let productDiv = document.createElement('div')

        let nameP = document.createElement('p')
        nameP.innerHTML = product.model
        productDiv.appendChild(nameP)

        let priceP = document.createElement('p')
        priceP.innerHTML = product.price
        productDiv.appendChild(priceP)

        let buyButton = document.createElement('button')
        buyButton.innerHTML = 'В корзину'
        buyButton.onclick = () => {
            storeState.basket.push(product)
            drawBasket()
        }

        productDiv.append(buyButton)

        allProductsDiv.append(productDiv)
    })

    function drawBasket() {
        let basketDiv = document.getElementById("basket")
        basketDiv.innerHTML = ""
        storeState.basket.forEach(item => {
            let itemP = document.createElement('p')
            itemP.innerHTML = `${item.model} - ${item.price}`
            basketDiv.append(itemP)
        })


    }

}

function init() {
    drawAvailableProducts()
}
window.onload = init