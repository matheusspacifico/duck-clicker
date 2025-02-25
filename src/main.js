let duckonites = 0
let dps = 0
let clickPower = 1000
let clickMultiplier = 1
let totalClicks = 0

setInterval(updateTick, 1000) // tick

const clickArea = document.getElementById("click-area");
clickArea.addEventListener("click", duckClick)

const counter = document.getElementById("counter");
updateCounter()

const dpsCounter = document.getElementById("dps-counter");
updateDps()

function formatNumber(number, decimals = 0) {
    return new Intl.NumberFormat('en-US', { 
        minimumFractionDigits: decimals, 
        maximumFractionDigits: decimals 
    }).format(number)
}

function duckClick(e) {
    miningAudio()

    duckonites += clickPower * clickMultiplier
    updateCounter()

    totalClicks++

    showClickMessage(e)
}

function showClickMessage(e) {
    const clickMessage = document.createElement("div")

    clickMessage.textContent = "+" + clickPower + "🦆$"

    clickMessage.classList.add("click-message")

    clickMessage.style.left = e.clientX + "px"
    clickMessage.style.top = e.clientY + "px" 

    document.body.appendChild(clickMessage)

    clickMessage.classList.add("fall-up")

    setTimeout(() => {
        clickMessage.remove()
    }, 1000)
}

function updateTick() {
    updateDps()
    
    document.title = formatNumber(duckonites, 0) + " | Duck Clicker"
}

function updateCounter() {
    counter.textContent = formatNumber(duckonites, 0)
}

function updateDps() {
    dpsCounter.textContent = formatNumber(dps, 1)
    duckonites += dps;
    updateCounter()
}

function showNotEnoughDuckonitesMessage(e) {
    const clickMessage = document.createElement("div")

    clickMessage.textContent = "Not enough duckonites!"

    clickMessage.classList.add("not-enough-duckonites-message")

    clickMessage.style.left = e.clientX + "px"
    clickMessage.style.top = e.clientY + "px" 

    document.body.appendChild(clickMessage)

    clickMessage.classList.add("fall-up")

    setTimeout(() => {
        clickMessage.remove()
    }, 2000)
}