const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')


let mili = 0
let seconds = 0


const jump = () => {
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    },500)
}


const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '')
    

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        document.getElementById('lost').textContent="Game Over"
        document.getElementById('final').textContent=`Tempo Jogado: ${seconds}segundos e ${mili} Milisegundos`
    }
    else
    contador()
 },10)

function contador() {
    mili++
        var mil = document.getElementById('mili').textContent= mili*10
        if (mil > 1000) {
            seconds++
            mili = 0
            document.getElementById('seconds').textContent=seconds
        }
}

document.addEventListener('keydown', jump,)
