let duckling_price
let base_duckling_price = 10
let duckling_price_string = document.getElementById("duckling-price")

let duckling_dps
let base_duckling_dps = 0.1
let duckling_dps_multiplier = 1

let duckling_amount = 0
let duckling_amount_string = document.getElementById("duckling-amount")

const duckling_buy_btn = document.getElementById("duckling-buy")
duckling_buy_btn.addEventListener("click", buyDuckling)

function buyDuckling(e) {
    duckling_price = Math.round(base_duckling_price * Math.pow(1.15, duckling_amount))
    duckling_price_string.textContent = formatNumber(duckling_price, 0)

    if (duckonites < duckling_price) {
        return showNotEnoughDuckonitesMessage(e)
    }

    duckling_dps = base_duckling_dps * duckling_dps_multiplier
    dps += duckling_dps
    dpsCounter.textContent = formatNumber(dps, 1);

    duckling_amount++
    duckonites -= duckling_price

    console.log(duckling_amount)

    duckling_price = Math.round(base_duckling_price * Math.pow(1.15, duckling_amount))
    duckling_price_string.textContent = formatNumber(duckling_price, 0)

    updateCounter()
    duckling_amount_string.textContent = formatNumber(duckling_amount, 0)
    addDucklingImage()
}

const workerDiv = document.getElementById("worker-left")

function addDucklingImage() {
    const duckling_image = document.createElement("img")
    duckling_image.src = "./public/imgs/worker_duckling.png"
    duckling_image.className = "duckling-worker-image"

    workerDiv.appendChild(duckling_image)
}