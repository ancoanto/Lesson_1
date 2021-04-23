// Задание 1
var a = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var b = 0;
while (b < a.length) {
    console.log(a[b++]);
}


// Задание 3 (не уверен в правильности решения) 
var basket = ["Apple", "Samsung", "LG", "Xiaomi", "Nokia"]
basket.push("X11 Pro")
var priceApple = 11500
var priceSamsung = 10500
var priceLG = 9500
var priceXiaomi = 8500
var priceNokia = 7500
var priceX11Pro = 12555
function countBasketPrice() {
    return priceApple + priceSamsung + priceLG + priceXiaomi + priceNokia + priceX11Pro
}
var summe = countBasketPrice()
console.log(summe)


// Задание *4
for (var a = 0; a < 10; a++)
    console.log(a)


// Задание *5
let x = `x
xx
xxx
xxxx
xxxxx
xxxxxx
xxxxxxx
xxxxxxxx
xxxxxxxxx
xxxxxxxxxx
xxxxxxxxxxx
xxxxxxxxxxxx
xxxxxxxxxxxxx
xxxxxxxxxxxxxx
xxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxx
xxxxxxxxxxxxxxxxxxxx`
console.log(x)


// Или как альтернатива
console.log(x)
console.log(xx)
console.log(xxx)
console.log(xxxx)
console.log(xxxxx)
console.log(xxxxxx)
console.log(xxxxxxx)
console.log(xxxxxxxx)
console.log(xxxxxxxxx)
console.log(xxxxxxxxxx)
console.log(xxxxxxxxxxx)
console.log(xxxxxxxxxxxx)
console.log(xxxxxxxxxxxxx)
console.log(xxxxxxxxxxxxxx)
console.log(xxxxxxxxxxxxxxx)
console.log(xxxxxxxxxxxxxxxx)
console.log(xxxxxxxxxxxxxxxxx)
console.log(xxxxxxxxxxxxxxxxxx)
console.log(xxxxxxxxxxxxxxxxxxx)
console.log(xxxxxxxxxxxxxxxxxxxx)

// А может и вовсе нужно было использовать цикл... Только как это сделать - пока не понял