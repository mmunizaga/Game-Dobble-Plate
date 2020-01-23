const cardsArr = [
  [1, 2, 3, 4, 5, 6, 7, 8],
  [4, 9, 10, 11, 12, 13, 14, 15],
  [1, 11, 16, 17, 18, 19, 20, 21],
  [5, 11, 22, 23, 24, 25, 26, 27],
  [3, 14, 21, 22, 28, 29, 30, 31],
  [3, 10, 16, 24, 32, 33, 34, 35],
  [6, 11, 28, 33, 36, 37, 38, 39],
  [4, 16, 25, 30, 39, 40, 41, 42],
  [4, 20, 27, 31, 32, 36, 43, 44],
  [8, 11, 29, 32, 41, 45, 46, 47],
  [4, 19, 26, 29, 35, 38, 48, 49],
  [6, 13, 17, 24, 29, 42, 43, 50],
  [1, 14, 23, 32, 38, 42, 51, 52],
  [1, 9, 22, 35, 37, 41, 43, 53],
  [8, 12, 16, 26, 28, 43, 51, 54],
  [5, 14, 16, 36, 47, 48, 50, 53],
  [3, 12, 18, 27, 38, 41, 50, 55],
  [3, 13, 20, 25, 37, 46, 48, 51],
  [2, 9, 20, 24, 30, 38, 47, 54],
  [4, 17, 22, 33, 47, 51, 55, 56],
  [6, 15, 18, 22, 32, 40, 48, 54],
  [3, 9, 17, 26, 36, 40, 45, 52],
  [4, 18, 24, 28, 46, 52, 53, 57],
  [8, 14, 19, 24, 37, 40, 44, 55],
  [7, 10, 18, 26, 31, 37, 42, 47],
  [1, 15, 26, 30, 33, 44, 46, 50],
  [8, 9, 21, 27, 33, 42, 48, 57],
  [7, 13, 16, 22, 38, 44, 45, 57],
  [5, 12, 17, 30, 32, 37, 49, 57],
  [2, 11, 31, 35, 40, 50, 51, 57],
  [5, 13, 19, 31, 33, 41, 52, 54],
  [6, 14, 20, 26, 34, 41, 56, 57],
  [2, 10, 17, 23, 28, 41, 44, 48],
  [3, 11, 42, 44, 49, 53, 54, 56],
  [2, 15, 16, 27, 29, 37, 52, 56],
  [1, 10, 25, 29, 36, 54, 55, 57],
  [6, 10, 19, 27, 30, 45, 51, 53],
  [5, 15, 20, 28, 35, 42, 45, 55],
  [1, 12, 24, 31, 39, 45, 48, 56],
  [8, 10, 20, 22, 39, 49, 50, 52],
  [7, 15, 21, 24, 36, 41, 49, 51],
  [6, 9, 16, 23, 31, 46, 49, 55],
  [5, 9, 18, 29, 34, 39, 44, 51],
  [3, 15, 19, 23, 39, 43, 47, 57],
  [2, 14, 18, 25, 33, 43, 45, 49],
  [7, 12, 20, 23, 29, 33, 40, 53],
  [5, 10, 21, 38, 40, 43, 46, 56],
  [8, 15, 17, 25, 31, 34, 38, 53],
  [6, 12, 21, 25, 35, 44, 47, 52],
  [7, 11, 30, 34, 43, 48, 52, 55],
  [7, 9, 19, 25, 28, 32, 50, 56],
  [7, 14, 17, 27, 35, 39, 46, 54],
  [2, 13, 21, 26, 32, 39, 53, 55],
  [1, 13, 27, 28, 34, 40, 47, 49],
  [8, 13, 18, 23, 30, 35, 36, 56],
  [2, 12, 19, 22, 34, 36, 42, 46],
  [4, 21, 23, 34, 37, 45, 50, 54]
];

// Generate cards:

function randomCard() {
  var min = 0; //Math.ceil(0)
  var max = Math.floor(cardsArr.length);
  return cardsArr[Math.floor(Math.random() * (max - min)) + min];
}

function imgArr(card){
    var imgArr = [];
    card.forEach(a => {
        var icon = new Image();
        icon.src = `./assets/${a}.png`;
        // icon.classList =`${randomSizes()} ${randomRotations()}`;
        imgArr.push(icon);
    });
    return imgArr;
}

var cardOne, cardTwo;

function generateCards(){
    cardOne = randomCard();
    cardTwo = randomCard();
    
    return cardOne.reduce((a,b,i) => b === cardTwo[i]? a+1: a,0) >1?
    generateCards():'';
}

// Random sizes and rotation

function randomSizes(){
  var min = Math.ceil(1);
  var max = Math.floor(4);
  var random = Math.floor(Math.random() * (max - min)) + min;
  var randomSize;

  if(random===1){randomSize = 'size-one';}
  else if(random===2){randomSize = 'size-two';}
  else if(random===3){randomSize = 'size-three';}

  return randomSize;
}

function randomRotations(){
  var min = Math.ceil(1);
  var max = Math.floor(9);
  var random = Math.floor(Math.random() * (max - min)) + min;
  var randomRotation;

  if(random===1){randomRotation = 'rotation-one';}
  else if(random===2){randomRotation = 'rotation-two';}
  else if(random===3){randomRotation = 'rotation-three';}
  else if(random===4){randomRotation = 'rotation-four';}
  else if(random===5){randomRotation = 'rotation-five';}
  else if(random===6){randomRotation = 'rotation-six';}
  else if(random===7){randomRotation = 'rotation-seven';}
  else if(random===8){randomRotation = 'rotation-eight';}

  return randomRotation;
}

function assignSizesAndRotation(){
  // var sizeRotation = `${randomSizes()} ${randomRotations()}`;
  // var size = randomSizes();
  // var rotation = randomRotations();

  document.querySelectorAll('.icon').forEach(a => a.classList.add(randomSizes()));

  document.querySelectorAll('.icon').forEach(a => a.classList.add(randomRotations()));

}

// Print cards:

var targetOne = document.querySelectorAll('.cardOne .icon');
var targetTwo = document.querySelectorAll('.cardTwo .icon');

function printCardOne() {
    var imgCardOne = imgArr(cardOne);
    assignSizesAndRotation();
    return targetOne.forEach((a,i) => a.appendChild(imgCardOne[i]));
}

function printCardTwo() {
  var imgCardTwo = imgArr(cardTwo);
  return targetTwo.forEach((b,i) => b.appendChild(imgCardTwo[i]));
}

// Erase cards:

function eraseCards(){
  targetOne.forEach(a => a.innerHTML='');
  targetTwo.forEach(a => a.innerHTML='');
}

// Play: start|stop game.

var startBtn = document.querySelector('.start-game');
startBtn.addEventListener('click',startClicked);
var soundTrack = new Audio('./assets/background music.mp3');

function startClicked(){
  time.startClick();
  printTime();
  generateCards();
  printCardOne();
  printCardTwo();
  startBtn.innerHTML = 'Stop Game';
  startBtn.classList.add('stop-game');
  startBtn.classList.remove('start-game');
  startBtn.removeEventListener('click', startClicked)
  startBtn.addEventListener('click',stopClicked);
  soundTrack.play();
  soundTrack.loop = true;
}

function stopClicked(){
  time.stopClick();
  time.resetClick();
  clearPrintTime();
  eraseCards();
  startBtn.innerHTML = 'Start Game';
  startBtn.classList.add('start-game');
  startBtn.classList.remove('stop-game');
  startBtn.removeEventListener('click',stopClicked);
  startBtn.addEventListener('click', startClicked);
  document.querySelector('.score span').innerHTML = 0;
  document.location = './score-record.html';
};

// Play: score - lifes && changing cards.

var cardTwoElements = document.querySelector('.cardTwo');
var cardOneElements = document.querySelectorAll('.cardOne .icon');
var winSound = new Audio('./assets/win.wav');
var looseSound = new Audio('./assets/loose2.wav');

var bestScore = 0;

cardTwoElements.onclick = function(e){
  var clickElement;
  var fail = 0;
  var score = document.querySelector('.score span').innerHTML;
  var lifes = document.querySelector('.lifes span');

  clickElement = e.target.outerHTML;
  cardOneElements.forEach( a => {
    if(a.innerHTML===clickElement){
      score++;
      document.querySelector('.score span').innerHTML = score;
      eraseCards();
      generateCards();
      printCardOne();
      printCardTwo();
      sessionStorage.setItem('score',`${score}`);
      winSound.play();
    } else {
      fail++;
    }
  });

  if(fail===8){
    lifes.innerHTML -=1;
    looseSound.play();}
  
  if(lifes.innerHTML==0){
    document.querySelector('nav').innerHTML = '<div class="game-over">- GAME OVER -</div><a href="./score-record.html"><button class="go-score">GO TO SCORES --></button></a>';
    eraseCards();
     time.stopClick();
     time.resetClick();
     clearPrintTime();
     sessionStorage.setItem('score',`${score}`);
     new Audio('./assets/game-over.wav').play();
     soundTrack.pause();
  }
  // if((fail-(score*7))===8){
  //     lifes.innerHTML = 2;
  //     looseSound.play();
  //     return}
  //   else if((fail-(score*7))===16){
  //     lifes.innerHTML = 1;
  //     looseSound.play();
  //     return}
  //   else if(fail-(score*7)>=24){
  //     document.querySelector('nav').innerHTML = '<div class="game-over">- GAME OVER -</div><a href="./score-record.html"><button class="go-score">GO TO SCORES --></button></a>';
  //     eraseCards();
  //      time.stopClick();
  //      time.resetClick();
  //      clearPrintTime();
  //      sessionStorage.setItem('score',`${score}`);
  //      new Audio('./assets/game-over.wav').play();
  //      soundTrack.pause();
  //   }
};


// Count Time

class Time {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }

  startClick() {
    this.intervalId = setInterval(() => this.currentTime +=1,10);
  }


  getMinutes = () => Math.floor(this.currentTime/6000) % 60;

  getSeconds = () => Math.floor(this.currentTime/100) % 60;

  getMilliseconds = () => Math.floor(this.currentTime) % 100;

  twoDigitsNumber = value => value < 10? `0${value}`:`${value}`;

  stopClick = () => {
    clearInterval(this.intervalId);
  };

  resetClick = () => {this.currentTime = 0;
  }
}

var time = new Time();

var printedTime;

function printTime() {
  printedTime = setInterval(() => {
    printDigits();
    if(minutesGame==='01'){
      stopClicked();
      document.location = './score-record.html';
    }
  }, 10);
}

function clearPrintTime () {
  clearInterval(printedTime);
}

var minutesGame = 0;

function printDigits() {
  var min = time.twoDigitsNumber(time.getMinutes());
  var sec = time.twoDigitsNumber(time.getSeconds());
  var milSec = time.twoDigitsNumber(time.getMilliseconds());

  document.querySelector('.time span').innerHTML = `${min} : ${sec} : ${milSec}`;
  return minutesGame = min;
}



