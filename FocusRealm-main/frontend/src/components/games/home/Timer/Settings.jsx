import React, { useContext } from 'react'
import styles from './Settings.module.scss'
import SettingsContext from './SettingsContext'
import BackButton from './BackButton';


const Settings = () => {
  const settingsInfo = useContext(SettingsContext);
  
  function handleWorkMinutesChange(event) {
    settingsInfo.setWorkMinutes(event.target.value);
  }

  function handleBreakMinutesChange(event) {
    settingsInfo.setBreakMinutes(event.target.value);
  }

  return (
    <div >
    <label>Work Minutes: {settingsInfo.workMinutes} </label>
    <input type='text' value={settingsInfo.workMinutes} onChange={handleWorkMinutesChange} />
    <label>Break Minutes: {settingsInfo.breakMinutes}</label>
    <input type='text' value={settingsInfo.breakMinutes} onChange={handleBreakMinutesChange} />
    <div>
      <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
    </div>
  </div>
  )
}

export default Settings