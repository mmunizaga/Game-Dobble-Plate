
var score;
if(sessionStorage.getItem('score')>0){
    score = sessionStorage.getItem('score');
} else {score = 0};

document.querySelector('.scores div span').innerHTML = score;

var bestScore;

if(sessionStorage.getItem('bestScore')>0){
    bestScore = sessionStorage.getItem('bestScore');
} else {bestScore = 0};

function compareScores(){
    if(score>bestScore){
        bestScore = score;
    }
}

compareScores();

document.querySelector('.record').innerHTML = bestScore;
sessionStorage.setItem('bestScore',bestScore);