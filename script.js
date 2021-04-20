// Задание 1
var a = 1, b = 1, c, d
c = ++a; alert(c) //выведет 2, потому что это префиксаня форма записи. Сначала инкрементируетпотом выводит результат
d = b++; alert(d) //выведет 1, потому что это постфиксаня форма записи. Сначала выводит значениепотом инкрементирует
c = (2 + ++a); alert(c) //выведет 5, потому что значение переменной "а" изменилось после предыдущей операции и равно 2. Префикс. с=2+1+2
d = (2 + b++); alert(d) // выведет 4, потому что b после предыдущей операции равняется 2. Постфикс. d=2+2 вывод результата (Инкрементирует после вывода результата)
alert(a) //выведет 3, так как при каждой операции переменная увеличивалась на 1. 1+1+1=3
alert(b) // выведет 3, тоже при каждой операции увеличивалась на 1только "в фоне"после вывода результата



// Задание 2
var a = 2
var x = 1 + (a *= 2) // x=5. Как в математике, сначала выполняется оператор () потом унарный оператор. Только не понял, зачем в задании в скобках "="



// Задание 3
var a = -11
var b = 3
if (a > 0 && b > 0) {
    alert(a - b)
}
else if (a < 0 && b < 0) {
    alert(a * b)
}
else {
    alert(a + b)
}



// Задание 4
var a = 5
switch (a) {
    case 0:
        alert(012345)
        break
    case 1:
        alert(12345)
        break;
    case 2:
        alert(2345)
        break;
    case 3:
        alert(345)
        break;
    case 4:
        alert(45)
        break;
    case 5:
        alert(5)
        break;
}



// Задание 5
function plus(a, b) {
    return (a + b)
}
c = plus(2, 58)
alert(c)

function minus(a, b) {
    return (a - b)
}
d = minus(154, 7)
alert(d)

function multiply(a, b) {
    return (a * b)
}
e = multiply(13, -8)
alert(e)

function division(a, b) {
    return (a / b)
}
f = division(72, 8)
alert(f)



// Задание 6
function mathOperation(a, b, operation) {
    switch (operation) {
        case plus:
            return (a + b)
            break;
        case minus:
            return (a - b)
            break
        case multiply:
            return (a * b)
            break
        case division:
            return (a / b)
            break;
    }
}
var result = mathOperation(5, 8, plus)
alert(result)