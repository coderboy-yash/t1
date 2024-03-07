import React from 'react'
import styles from './PlayButton.module.scss'

const PlayButton = ({onClick}) => {
  return (
    <button onClick={onClick} style={{
      width:"100px",height:"200px",
    }}></button>
  )
}

export default PlayButton