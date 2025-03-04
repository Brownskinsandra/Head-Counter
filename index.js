let saveEl = document.getElementById("save-el")
let countNumber = document.getElementById("count-number")
let count = 0
let resetEl = document.getElementById("reset-btn")

function increase(){
    count += 1
    countNumber.textContent = count
}
function decrease(){
    count -= 1
    countNumber.textContent = count
}
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countNumber.textContent = 0
    count = 0
}
function reset(){
    countNumber.textContent = 0
    count = 0
}
