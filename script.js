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

function inViewport(element){
    const bb = element.getBoundingClientRect(); 
    return !(bb.top > innerHeight || bb.bottom < 0);  
}
  
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
const rar = document.getElementById("rar");
const extract = document.getElementById("extract");
const shortcut = document.getElementById("shortcut");
const run = document.getElementById("run");
const copy = document.getElementById("copy");
const paste = document.getElementById("paste");

document.addEventListener("scroll", event => {
    if(inViewport(logo)) {
        logo.classList.add("fadein");
    } else {
        logo.classList.remove("fadein");
    }

    if(inViewport(things)) {
        things.classList.add("fadein");
    } else {
        things.classList.remove("fadein");
    }

    if(inViewport(morningimg)) {
        morningimg.classList.add("fadein");
    } else {
        morningimg.classList.remove("fadein");
    }

    if(inViewport(morning)) {
        morning.classList.add("fadein");
    } else {
        morning.classList.remove("fadein");
    }

    if(inViewport(morningp)) {
        morningp.classList.add("fadein");
    } else {
        morningp.classList.remove("fadein");
    }

    if(inViewport(weatherimg)) {
        weatherimg.classList.add("fadein");
    } else {
        weatherimg.classList.remove("fadein");
    }

    if(inViewport(weather)) {
        weather.classList.add("fadein");
    } else {
        weather.classList.remove("fadein");
    }

    if(inViewport(weatherp)) {
        weatherp.classList.add("fadein");
    } else {
        weatherp.classList.remove("fadein");
    }

    if(inViewport(timeimg)) {
        timeimg.classList.add("fadein");
    } else {
        timeimg.classList.remove("fadein");
    }

    if(inViewport(time)) {
        time.classList.add("fadein");
    } else {
        time.classList.remove("fadein");
    }

    if(inViewport(timep)) {
        timep.classList.add("fadein");
    } else {
        timep.classList.remove("fadein");
    }

    if(inViewport(jokeimg)) {
        jokeimg.classList.add("fadein");
    } else {
        jokeimg.classList.remove("fadein");
    }

    if(inViewport(joke)) {
        joke.classList.add("fadein");
    } else {
        joke.classList.remove("fadein");
    }

    if(inViewport(jokep)) {
        jokep.classList.add("fadein");
    } else {
        jokep.classList.remove("fadein");
    }

    if(inViewport(work)) {
        work.classList.add("fadein");
    } else {
        work.classList.remove("fadein");
    }

    if(inViewport(workp)) {
        workp.classList.add("fadein");
    } else {
        workp.classList.remove("fadein");
    }

    if(inViewport(downloadh)) {
        downloadh.classList.add("fadein");
    } else {
        downloadh.classList.remove("fadein");
    }

    if(inViewport(downloadp)) {
        downloadp.classList.add("fadein");
    } else {
        downloadp.classList.remove("fadein");
    }

    if(inViewport(rar)) {
        rar.classList.add("fadein");
    } else {
        rar.classList.remove("fadein");
    }

    if(inViewport(extract)) {
        extract.classList.add("fadein");
    } else {
        extract.classList.remove("fadein");
    }

    if(inViewport(shortcut)) {
        shortcut.classList.add("fadein");
    } else {
        shortcut.classList.remove("fadein");
    }

    if(inViewport(run)) {
        run.classList.add("fadein");
    } else {
        run.classList.remove("fadein");
    }

    if(inViewport(copy)) {
        copy.classList.add("fadein");
    } else {
        copy.classList.remove("fadein");
    }

    if(inViewport(paste)) {
        paste.classList.add("fadein");
    } else {
        paste.classList.remove("fadein");
    }
});
