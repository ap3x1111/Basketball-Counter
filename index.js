let homeScoreEl = document.getElementById("home-score")
let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeScore = 0


let awayScoreEl = document.getElementById("away-score")
let awayScoreBtnOne = document.getElementById("away-score-btn-1")
let awayScoreBtnTwo = document.getElementById("away-score-btn-2")
let awayScoreBtnThree = document.getElementById("away-score-btn-3")
let awayScore = 0


function addHome1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function addHome2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function addHome3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function addAway1() {
    awayScore += 1
    awayScoreEl.textContent = awayScore
}

function addAway2() {
    awayScore += 2
    awayScoreEl.textContent = awayScore
}

function addAway3() {
    awayScore += 3
    awayScoreEl.textContent = awayScore
}