/*
document.oncontextmenu = () => {
    return false;
}
document.onkeydown = e => {
    if (e.key == "F12") {
        return false;
    }
    if (e.ctrlKey && e.key == "u") {
        return false;
    }
    if (e.ctrlKey && e.key == "c") {
        return false;
    }
    if (e.ctrlKey && e.key == "v") {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.key == "i") {
        return false;
    }
}   
*/

// let timeRandom, i = 1;    
// timeRandom = Math.floor(Math.random()*10+1);

// console.log(timeRandom);


// delating info paragraph
setTimeout(() => {
    const paraInfo = document.querySelector('#info');
    paraInfo.style.opacity = 0;
}, 3000);

paraInfo.style.display = 'none';