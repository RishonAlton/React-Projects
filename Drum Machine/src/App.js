import React from 'react'

import sounds from './sounds'
import DrumPad from './DrumPad'


const App = () => {
  
    return (
      <main id="drum-machine">
        <section id="display" className="display">
          <h1>Play a Sound</h1>
          {
            sounds.map((sound, index) => <DrumPad text={sound.key} key={index} audio={sound.url} name={sound.id} />)
          }
        </section>
      </main>
    )
  
}


document.addEventListener('keydown', (e) => {
  
  const id = e.key.toUpperCase()
  const audio = document.getElementById(id)
  
  if (audio) {
    const parent = audio.parentNode
    const name = audio.className
    parent.classList.add('active')
    const display = parent.parentNode
    display.querySelector('h1').innerText = name.slice(0, -5)
    audio.play()
  }
  
})


export default App