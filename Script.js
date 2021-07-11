let number = document.getElementById("number");
let count = 0

function decrement() {
    if (count == 0) {
        alert('Cannot go lesser than 0')
    } else {
        count--
        number.innerText = count
    }
}

function increment() {
    if (count == 50) {
        alert('Cannot go greater than 50')
    } else {
        count++
        number.innerText = count
    }
}