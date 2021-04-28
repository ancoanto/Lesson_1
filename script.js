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