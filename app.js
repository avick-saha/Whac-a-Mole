const score = document.getElementById('score')
const timeLeft = document.getElementById('time-left')
const squares = document.querySelectorAll('.square')

let molePosition
let result = 0
let countdownTimer = 60

const moveMoleTimerId = setInterval(() => {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    const randomPosition = Math.floor(Math.random() * 9)
    squares[randomPosition].classList.add('mole')
    molePosition = randomPosition
}, 500)

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == molePosition) {
            score.innerHTML = ++result
        }
    })
})

const countdownTimerId = setInterval(() => {
    timeLeft.innerHTML = --countdownTimer
    if (countdownTimer == 0) {
        clearInterval(moveMoleTimerId)
        clearInterval(countdownTimerId)
        alert('Game Over!!!')
        restart = confirm('Do you want to play again?')
        if (restart) {
            location.reload()
        }
    }
}, 1000)