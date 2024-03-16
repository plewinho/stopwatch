const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');

const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');

const infoBtn = document.querySelector('.info');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');

let countTime;
let minutes = 0;
let secounds = 0;
let timesArr = [];

const handleStart = () => {
  
  countTime = setInterval(() => {

    if(secounds < 9)
    {
      secounds ++;
      stopwatch.textContent = `${minutes}:0${secounds}`
    }
    else if(secounds >= 9 && secounds < 59)
    {
      secounds ++;
      stopwatch.textContent = `${minutes}:${secounds}`
    } else {
      minutes ++;
      secounds = 0;
      stopwatch.textContent = `${minutes}:0${secounds}`
    }

  }, 100);

}

const handlePause = () => {
clearInterval(countTime)
}

const handleStop = () => {

  time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`;

  if(stopwatch.textContent !== '0:00')
  {
    time.style.visibility = 'visible';
    timesArr.push(stopwatch.textContent);

  }

    handlePause();
    stopwatch.textContent = '0:00';
    timeList.textContent = '';
    secounds=0;
    minutes=0;

}

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);