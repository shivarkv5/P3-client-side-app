/*function weightConverter(valNum) {
    document.getElementById("outputGrams").innerHTML = weightConverter
}

const weightConverter = (valNum) => { return valNum * 1000 }
*/

function mult(x, y) {

    if (isNaN(x || y)) {
        throw Error('The given argument is not a number');
    }
    return x * y
}

function multiplyBy() {
    const num1 = parseInt(document.getElementById("firstNumber").value)
    localStorage.setItem("firstNumber", num1)

    const num2 = parseInt(document.getElementById("secondNumber").value)
    localStorage.setItem("secondNumber", num2)

    let c = mult(localStorage.getItem("firstNumber"))
    let d = mult(localStorage.getItem("secondNumber"))
    document.getElementById("result").innerHTML = mult(c, d)

}