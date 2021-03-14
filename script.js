const about = document.getElementById("about");
const home = document.getElementById("home");
const download = document.getElementById("download");

about.addEventListener("click", function() {
    window.scrollTo(0, document.body.scrollHeight - 4400);
});

home.addEventListener("click", function() {
    window.scrollTo(0, document.body.scrollHeight - 10000000);
});

download.addEventListener("click", function() {
    window.scrollTo(0, document.body.scrollHeight - 2500);
});

const logo = document.getElementById("logo");
const things = document.getElementById("things");
const morningimg = document.getElementById("morningimg");
const morning = document.getElementById("morning");
const morningp = document.getElementById("morningp");
const weatherimg = document.getElementById("weatherimg");
const weather = document.getElementById("weather");
const weatherp = document.getElementById("weatherp");
const timeimg = document.getElementById("timeimg");
const time = document.getElementById("time");
const timep = document.getElementById("timep");
const jokeimg = document.getElementById("jokeimg");
const joke = document.getElementById("joke");
const jokep = document.getElementById("jokep");
const work = document.getElementById("work");
const workp = document.getElementById("workp");
const downloadh = document.getElementById("dowload");
const downloadp = document.getElementById("downloadp");
const python = document.getElementById("python");
const rar = document.getElementById("rar");
const shortcut = document.getElementById("shortcut");
const run = document.getElementById("run");
const copy = document.getElementById("copy");
const paste = document.getElementById("paste");

document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 100) {
        logo.classList.add("fadein");
    }
});

document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 500) {
        things.classList.add("fadein");
    }
});

document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 600) {
        morningimg.classList.add("fadein");
    }
});

document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 700) {
        morning.classList.add("fadein");
        morningp.classList.add("fadein");
    }
});

document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 800) {
        morningp.classList.add("fadein");
    }
});

document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 900) {
        weatherimg.classList.add("fadein");
    }
});

document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 1000) {
        weather.classList.add("fadein");
    }
});

document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 1100) {
        weatherp.classList.add("fadein");
    }
});

document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 1100) {
        weatherp.classList.add("fadein");
    }
});

document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 1200) {
        timeimg.classList.add("fadein");
    }
});

document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 1300) {
        time.classList.add("fadein");
    }
});

document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 1400) {
        timep.classList.add("fadein");
    }
});

document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 1500) {
        jokeimg.classList.add("fadein");
    }
});

document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 1600) {
        joke.classList.add("fadein");
    }
});

document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 1700) {
        jokep.classList.add("fadein");
    }
});

document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 1800) {
        work.classList.add("fadein");
    }
});

document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 1800) {
        workp.classList.add("fadein");
    }
});

document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 1900) {
        downloadh.classList.add("fadein");
    }
});

document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 1900) {
        downloadp.classList.add("fadein");
    }
});


document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 2000) {
        python.classList.add("fadein");
    }
});


document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 3000) {
        rar.classList.add("fadein");
    }
});


document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 3500) {
        shortcut.classList.add("fadein");
    }
});


document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 4000) {
        run.classList.add("fadein");
    }
});


document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 4500) {
        copy.classList.add("fadein");
    }
});


document.addEventListener("scroll", function() {
    if(window.pageYOffset >= 4700) {
        paste.classList.add("fadein");
    }
});

document.addEventListener("scroll", function() {
    console.log('Current scroll from the top: ' + window.pageYOffset)
});