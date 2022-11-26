let homeScoreEl = document.getElementById("home-score")
let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
let homeScore = 0


let guestScoreEl = document.getElementById("guest-score")
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
let guestScoreBtnThree = document.getElementById("guest-score-btn-3")
let guestScore = 0


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

function addGuest1() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function addGuest2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function addGuest3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}