const clickArea = document.getElementById("click-area");
const duck = document.getElementById("duck-protagonist");
const pickaxe = document.getElementById("pickaxe");

function duckClick() {
    duck.classList.add("squish-animation");
    pickaxe.classList.add("mine-animation");

    setTimeout(() => {
        duck.classList.remove("squish-animation");
        pickaxe.classList.remove("mine-animation");
    }, 100);
}

clickArea.addEventListener("click", duckClick);
