//div
const all = document.querySelector(".All");
const text = document.querySelector(".main_title");
const sms_img = document.querySelector("#sms");
const sms1 = document.querySelector(".sms1");
const sms2 = document.querySelector(".sms2");
const smd = document.querySelector(".smd");
const smd1 = document.querySelector(".smd1");
const smd2 = document.querySelector(".smd2");
const nin = document.querySelector(".nin");
const nes1 = document.querySelector(".nin1");
const nes2 = document.querySelector(".nin2");
const snes = document.querySelector(".snes");
const snes1 = document.querySelector(".snes1");
const snes2 = document.querySelector(".snes2");
const sps = document.querySelector(".sps");
const sps1 = document.querySelector(".sps1");
const sps20 = document.querySelector(".sps20");
const sps21 = document.querySelector(".sps21");
const sps22 = document.querySelector(".sps22");
const msx = document.querySelector(".msx");
const msx1 = document.querySelector(".msx1");
const msx2 = document.querySelector(".msx2");
const msx360 = document.querySelector(".msx360");
const msx3601 = document.querySelector(".msx3601");
const msx3602 = document.querySelector(".msx3602");

// Sounds

const smss = document.querySelector("#smss");

document.addEventListener("click", (i) => {
    console.log(i);
    all.style.display = "flex";
    text.style.display = "none";
})

sms.addEventListener("click", () => {
    smss.pause();
    smss.currrentTime = 0;
    smss.play();
})