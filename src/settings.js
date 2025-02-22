// let audio_switch = document.getElementById("audio_switch");
// audio_switch.checked = false;

function miningAudio(){
    const mining1 = new Audio("./public/audios/mining/mining1.wav");
    const mining2 = new Audio("./public/audios/mining/mining2.wav");
    const mining3 = new Audio("./public/audios/mining/mining3.wav");
    const mining4 = new Audio("./public/audios/mining/mining4.wav");

    const miningSounds = [mining1, mining2, mining3, mining4]
    let randomMiningSound = miningSounds[Math.floor(Math.random() * miningSounds.length)]

    randomMiningSound.play()
};