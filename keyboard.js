const WHITE_KEYS = ['q', 'w', 'e', 'r', 't', 'z', 'u', 'v', 'b', 'n', 'm', ',', '.', '-']
const BLACK_KEYS = ['2', '3', '5', '6', '7', 'g', 'h', 'k', 'l', 'ö']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex >= 0) {
    playNote(whiteKeys[whiteKeyIndex])
  }
  if (blackKeyIndex >= 0) {
    playNote(blackKeys[blackKeyIndex])
  }
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}