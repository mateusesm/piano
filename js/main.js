function getKeyCode(event) {
    let keyCode = ''
    const isKeyBoard = event.type === 'keydown'
    
    if (isKeyBoard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }

    return keyCode
}

function playNote(event) {
    let audioKeyCode = getKeyCode(event)
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

    const isKeyExists = key

    if (!isKeyExists) {
        return
    }

    addPlayingClass(key)
    playAudio(audioKeyCode)

}

function addPlayingClass(key) {
    key.classList.add('playing')
}

function removePlayingClass(event) {
    event.target.classList.remove('playing')
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)

    audio.currentTime = 0
    audio.play()
}

function registerEvents() {
    const keys = document.querySelectorAll('.key')
    
    keys.forEach(key => {
        key.addEventListener('click', playNote)
        key.addEventListener('transitionend', removePlayingClass)
    })
    
    window.addEventListener('keydown', playNote)
}

window.addEventListener('load', registerEvents)


