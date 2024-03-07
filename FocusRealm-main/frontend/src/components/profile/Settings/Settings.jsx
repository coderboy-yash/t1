import React, { useEffect, useState } from 'react';
import styles from './Settings.module.scss';
import { useTimerContext } from '../../../state/TimerContext';
import arrowIcon from './assets/right-arrow.png';
import audios from './assets/songs/index';


const Settings = () => {
  const { Theme, setTheme: setContextTheme, quotedelay, setquotedelay,
    exercisedelay, setexercisedelay,
    soundarr, setsoundarr,
  } = useTimerContext();

  const [active, setactive] = useState('');
  const [sound, setsound] = useState('focus');
  const [quotes, setquotes] = useState(quotedelay)
  const [exercise, setexercise] = useState(exercisedelay)

  const handleThemeClick = (item) => {
    setactive(active == item ? '' : item)
  };

  const [theme, setLocalTheme] = useState(Theme);

  const toggleTheme = (newTheme) => {
    setLocalTheme(newTheme);
  };

  useEffect(() => {
    setContextTheme(theme);
  }, [theme]);


  return (
    <div className={styles.settings}>
      <h2>General Settings</h2>
      <ul>
        <div className={styles.items}>
          <li
            onClick={() => {
              handleThemeClick('theme');
            }}
            className={`${styles.container} ${(active == 'theme') ? styles.active : ''
              }`}
          >
            Customizable Themes
            <img
              src={arrowIcon}
              alt="Arrow"
              className={`${styles.icon} ${active == 'theme' ? styles.rotate180 : ''
                }`}
            />
          </li>
          <li onClick={() => {
            handleThemeClick('sounds');
          }

          }>
            sounds
            <img
              src={arrowIcon}
              alt="Arrow"
              className={`${styles.icon} ${active == 'sounds' ? styles.rotate180 : ''
                }`}
            />
          </li>
          <li onClick={() => {
            handleThemeClick('notification');
          }

          }>
            Notification Time Line
            <img
              src={arrowIcon}
              alt="Arrow"
              className={`${styles.icon} ${active == 'notification' ? styles.rotate180 : ''
                }`}
            />
          </li>
        </div>

        <div className={styles.content}>

          {active == 'theme' && (
            <div className={styles.themeColors}>

              <div
                className={`${styles.themeColor} ${styles.color1}`}
                onClick={() => toggleTheme('ocean-depth-theme')}
              >
                Deep Ocean
              </div>
              <div
                className={`${styles.themeColor} ${styles.color2}`}
                onClick={() => toggleTheme('desert-theme')}
              >
                Desert
              </div>

              <div
                className={`${styles.themeColor} ${styles.color3}`}
                onClick={() => toggleTheme('open-sky-theme')}
              >
                Open Sky
              </div>

              <div
                className={`${styles.themeColor} ${styles.color4}`}
                onClick={() => toggleTheme('shadow-theme')}
              >
                80's Shadow
              </div>

              <div
                className={`${styles.themeColor} ${styles.color5}`}
                onClick={() => toggleTheme('forest-glow-theme')}
              >
                Forest Glow
              </div>

              <div
                className={`${styles.themeColor} ${styles.color6}`}
                onClick={() => toggleTheme('ruby-blaze-theme')}
              >
                Ruby Blaze
              </div>
            </div>
          )}

          {active == 'sounds' && (
            <div className={styles.sounds}>
              <div className={styles.sound}>
                <label  onClick={() => { setsound(sound == 'focus' ? "" : "focus") }}>focus-sound</label>

                {sound == 'focus' && <div className={styles.item}>
                  {audios.map((item, index) => {
                    return <div className={`${index === soundarr[0] ? styles.active : ''}`} onClick={() => {
                      const audio = new Audio(item.sound)
                      audio.play();
                      setTimeout(() => {
                        audio.pause();
                        audio.currentTime = 0;
                      }, 2000);

                      var data = soundarr;
                      data[0] = index;
                      setsoundarr(data);
                      localStorage.setItem('sound', JSON.stringify(data))
                      setsound('')
                    }}>{item.name}</div>
                  })}
                </div>}
              </div>

              <div className={styles.sound}>
                <label  onClick={() => { setsound(sound == 'break' ? "" : "break") }}>break-sound</label>
                {sound == 'break' && <div className={styles.item}>
                  {audios.map((item, index) => {
                    return <div className={`${index === soundarr[1] ? styles.active : ''}`} onClick={() => {
                      const audio = new Audio(item.sound)
                      audio.play();
                      setTimeout(() => {
                        audio.pause();
                        audio.currentTime = 0;
                      }, 2000);

                      var data = soundarr;
                      data[1] = index;
                      setsoundarr(data);
                      localStorage.setItem('sound', JSON.stringify(data))
                      setsound('')
                    }}>{item.name}</div>
                  })}
                 
                </div>}
              </div>

              <div className={styles.sound}>
                <label  onClick={() => { setsound(sound == 'half' ? "" : "half") }}>halftime-sound</label>
                {sound == 'half' && <div className={styles.item}>
                  {audios.map((item, index) => {
                    return <div className={`${index === soundarr[2] ? styles.active : ''}`} onClick={() => {
                      const audio = new Audio(item.sound)
                      audio.play();
                      setTimeout(() => {
                        audio.pause();
                        audio.currentTime = 0;
                      }, 2000);

                      var data = soundarr;
                      data[2] = index;
                      setsoundarr(data);
                      localStorage.setItem('sound', JSON.stringify(data))
                      setsound('')
                    }}>{item.name}</div>
                  })}
                 
                </div>}
              </div>

              <div className={styles.sound}>
                <label  onClick={() => { setsound(sound == 'quotes' ? "" : "quotes") }}>motivational-sound</label>
                {sound == 'quotes' && <div className={styles.item}>
                  {audios.map((item, index) => {
                    return <div className={`${index === soundarr[3] ? styles.active : ''}`} onClick={() => {
                      const audio = new Audio(item.sound)
                      audio.play();
                      setTimeout(() => {
                        audio.pause();
                        audio.currentTime = 0;
                      }, 2000);

                      var data = soundarr;
                      data[3] = index;
                      setsoundarr(data);
                      localStorage.setItem('sound', JSON.stringify(data))
                      setsound('')
                    }}>{item.name}</div>
                  })}
                  
                </div>}
              </div>

              <div className={styles.sound}>
                <label  onClick={() => { setsound(sound == 'exercise' ? "" : "exercise") }}>exercise-sound</label>
                {sound == 'exercise' && <div className={styles.item}>
                  {audios.map((item, index) => {
                    return <div className={`${index === soundarr[4] ? styles.active : ''}`} onClick={() => {
                      const audio = new Audio(item.sound)
                      audio.play();
                      setTimeout(() => {
                        audio.pause();
                        audio.currentTime = 0;
                      }, 2000);

                      var data = soundarr;
                      data[4] = index;
                      setsoundarr(data);
                      localStorage.setItem('sound', JSON.stringify(data))
                      setsound('')
                    }}>{item.name}</div>
                  })}
                </div>}
              </div>
            </div>
          )}

          {active == 'notification' && (
            <div className={styles.themeColors}>
              <form action="" onSubmit={e => {
                e.preventDefault();
                setquotedelay(quotes);
                setexercisedelay(exercise)
                setactive('');
              }}>
                <div >
                  <label >Set Motivational Quotes Time</label>
                  <input onChange={e => {
                    setquotes(e.target.value)
                  }} type="number" name="timeformotivational" min={2} max={100} placeholder='insert a time for motivational quotes in min' value={quotes} />
                </div>
                <div>
                  <label >Set Exercise Notification Time</label>
                  <input type='number' onChange={e => {
                    setexercise(e.target.value)
                  }} min={2} max={100} placeholder='exercise notification time' name='exercise' value={exercise} />
                </div>
                <button type='submit'>Submit</button>
              </form>
            </div>
          )}
        </div>
      </ul >
    </div >

  );
};

export default Settings;
