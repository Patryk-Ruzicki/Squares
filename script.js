let timeRandom, i = 1;    
timeRandom = Math.floor(Math.random()*10+1);

console.log(timeRandom);

setTimeout(() => {
    const paraInfo = document.querySelector('#info');
    paraInfo.style.opacity = 0;
}, 5000);

paraInfo.style.display = 'none';