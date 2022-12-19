let homeScoreEl = document.getElementById("home-score");
let awayScoreEl = document.getElementById("away-score");
let homeScore = 0;
let awayScore = 0;

// Listen for clicks on the whole document
document.addEventListener('click', function (event) {
    let el = event.target;
    // Check if a home or away button was clicked by using the classes to tell them apart
    if (el.matches('.home')) {
        // we need to use parse int because the data attribute value is a string rather than an integer.
        homeScore += parseInt(el.dataset.inc);
        homeScoreEl.textContent = homeScore
    }
    if (el.matches('.away')) {
        awayScore += parseInt(el.dataset.inc);
        awayScoreEl.textContent = awayScore
    }
});