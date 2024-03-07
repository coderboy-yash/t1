import pauseline from '../Player/assets/pause.png'
import React from 'react'

const PauseButton = ({onClick}) => {
  return (
    <button onClick={onClick}>
        <img src={pauseline} alt='pause'/>
    </button>
  )
}

export default PauseButton