function numberInObjekt() {
    let a = prompt("Введите число:")
    let transform = {
        sotni: "Сотни" + " : " + (sotni = Math.floor(a / 100)),
        desyatki: "Десятки" + " : " + (desyatki = Math.floor((a - (sotni * 100)) / 10)),
        edinicy: "Единицы" + " : " + (edinicy = a - (sotni * 100) - (desyatki * 10))
    }
    let transformBig = {}
    if (a <= 999) {
        for (let prop in transform) {
            console.log(transform[prop])
        }
    }
    else {
        console.log("Число > 999")
        console.log(transformBig)
    }
}
numberInObjekt()



// var basket = ["Apple", "Samsung", "LG", "Xiaomi", "Nokia"]
// basket.push("X11 Pro")
// var priceApple = 11500
// var priceSamsung = 10500
// var priceLG = 9500
// var priceXiaomi = 8500
// var priceNokia = 7500
// var priceX11Pro = 12555
// function countBasketPrice() {
//     return priceApple + priceSamsung + priceLG + priceXiaomi + priceNokia + priceX11Pro
// }
// var summe = countBasketPrice()
// console.log(summe)

let Apple = {
    model: "iPhone 12",
    year: 2020,
    price: 11500
}
let Samsung = {
    model: "S20",
    year: 2020,
    price: 10500
}
let LG = {
    model: "Velvet 5G",
    year: 2021,
    price: 599
}
let Xiaomi = {
    model: "Redmi 8",
    year: 2019,
    price: 15000
}
let Nokia = {
    model: "8.3 5G",
    year: 2021,
    price: 479
}
let X11Pro = {
    model: "apple x11",
    year: 2018,
    price: 8764
}
function countBasketPrice() {
    return Apple.price + Samsung.price + LG.price + Xiaomi.price + Nokia.price + X11Pro.price
}
var summe = countBasketPrice()
console.log(summe)