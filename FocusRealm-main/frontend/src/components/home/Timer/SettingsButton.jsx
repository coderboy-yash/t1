import React from 'react'
import {FiSettings} from 'react-icons/fi';
import styles from './SettingsButton.module.scss'
const SettingsButton = ({onClick}) => {
  return (
    <button onClick={onClick} className={styles.settings}>
        <FiSettings />
    </button>
  )
}

export default SettingsButton