let duckonites = 0
let dps = 1
let clickPower = 1
let clickMultiplier = 1
let totalClicks = 0

setInterval(updateTick, 1000) // tick

const clickArea = document.getElementById("click-area")
clickArea.addEventListener("click", duckClick)

const counter = document.getElementById("counter")
updateCounter()

const dpsCounter = document.getElementById("dps-counter")
updateDps()

function duckClick() {
    miningAudio()

    duckonites += clickPower * clickMultiplier
    updateCounter()

    totalClicks++
}

function updateTick() {
    updateDps()

    document.title = duckonites.toFixed(0) + " | Duck Clicker"
}

function updateCounter() {
    counter.textContent = duckonites.toFixed(0)
}

function updateDps() {
    dpsCounter.textContent = dps.toFixed(1)
    duckonites += dps
    updateCounter()
}