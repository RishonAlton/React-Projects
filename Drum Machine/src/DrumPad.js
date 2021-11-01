import React from 'react'


class DrumPad extends React.Component {

    constructor(props) {
        super(props)
        this.audio = React.createRef()
    }

    componentDidMount() {
        this.audio.current.addEventListener('ended', (e) => {
        const parent = e.target.parentNode
        parent.classList.remove('active')
        })
    }

    playSound = () => {
        this.audio.current.play()
        const name = this.audio.current.className
        const parent = this.audio.current.parentNode
        parent.classList.add('active')
        const display = parent.parentNode
        display.querySelector('h1').innerText = name.slice(0, -5)
    }

    render() {
        const { text, audio, name } = this.props
        return (
        <article className="drum-pad" onClick={this.playSound} id={`drum-${text}`}>
            {text}
            <audio ref={this.audio} src={audio} className={`${name} clip`} id={text}></audio>
        </article>
        )
    }

}


export default DrumPad