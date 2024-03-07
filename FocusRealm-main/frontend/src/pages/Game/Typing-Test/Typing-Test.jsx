import React, { useState, useRef, useEffect } from 'react';
import styles from '/src/pages/Game/Typing-Test/Typing-Test.module.scss';
import Card from '../../../components/shared/Card/Card';
import Button from '../../../components/shared/Button/Button';

const getData = () =>
  'Scolding is something common in student life. Being a naughty boy, I am always scolded by my parents. But one day I was severely scolded by my English teacher. She infect teaches well. But that day, I could not resist the temptation that an adventure of Nancy Drew offered. While she was teaching, I was completely engrossed in reading that book. Nancy Drew was caught in the trap laid by some smugglers and it was then when I felt a light tap on my bent head. The teacher had caught me red handed. She scolded me then and there and insulted me in front of the whole class. I was embarrassed. My cheeks burned being guilty conscious. When the class was over, I went to the teacher to apologize. When she saw that I had realized my mistake, she cooled down and then told me in a very kind manner how disheartening it was when she found any student not paying attention. I was genuinely sorry and promised to myself never to commit such a mistake again. Days are not of equal value in one’s life. Some bring happiness while others bring sadness. Sadness and happiness both are equally important to man’s life, since they are the two sides of a coin. As we cannot forget the happiest day, we are unable to forget the saddest day of our life too. The saddest day of my life was the Diwali Day. Diwali is considered to be a happy festival and till last Diwali, it was my favorite festival. On last Diwali, my sister, my brother and I were busy lighting the fireworks. I was holding a ‘fuljhari’ in my hand and unfortunately my younger brother, who was standing just beside me, had a cracker in his hand. This cracker caught fire and a very loud explosion was heard which shook my sister and me. After that, we all could think of nothing else than blood stained cotton, bandage, dettol etc. My cousin took my brother to the doctor where he got 14 stitches in his forefinger and thumb. But at home, everybody kept cursing and blaming me for the mishap. That night, I could not sleep and I cried a lot. For next few days, I bore the burden of this blame for being responsible for this unfortunate incident. I felt deeply guilty conscious which I was able to overcome after a long time. Studying is the main source of knowledge. Books are indeed never failing friends of man. For a mature mind, reading is the greatest source of pleasure and solace to distressed minds. The study of good books ennobles us and broadens our outlook. Therefore, the habit of reading should be cultivated. A student should never confine himself to his schoolbooks only. He should not miss the pleasure locked in the classics, poetry, drama, history, philosophy etc. We can derive benefit from other’s experiences with the help of books. The various sufferings, endurance and joy described in books enable us to have a closer look at human life. They also inspire us to face the hardships of life courageously. Nowadays there are innumerable books and time is scarce. So we should read only the best and the greatest among them. With the help of books we shall be able to make our thinking mature and our life more meaningful and worthwhile. Recently, an exhibition ‘Building A New India’ was held in the capital. It was organized by the Ministry of Information and Broadcasting, Government of India. The exhibition was set up in the Triveni Kala Sangam. The chief exhibits were photographs, novels, some sculptures by Indian modern artists presenting Indian cultural inheritance. First of all, I visited the general section of the exhibition where different charts and photographs depicting India’s development in various fields were set. Most impressive photographs among these were those showing India’s nuclear development. The second section dealt with India’s magnificent historical background. I was fascinated by the pictures of Mohanjodaro excavation. Then I saw the most beautiful and colorful section of the exhibition i.e. the cultural section. It consisted of paintings, sculptures, photographs etc. The Rajasthani and Gujarati paintings were very colourful and attractive. This exhibition, inaugurated by the Prime Minister, lasted for a week. It proved to be of great educational value. It brushed up my knowledge about India as my motherland. It enhanced my respect for my great country, India. I would very much appreciate if the Indian government organized some more such exhibitions. A teacher is called builder of the nation. The profession of teaching needs men and women with qualities of head and heart. There are many teachers in our school and a large number of teachers among them are highly qualified. I have great respect for all of them. Yet I have a special liking for Miss Y. Miss Y is a woman of great principles. She is jewel among all the teachers. Almost all the students respect her. She teaches us English. She is quite at home in this subject. She takes keen interest in teaching students. Simple living and high thinking is her motto. She is a woman of sweet temper and is always ready to help in difficulties. She treats us like her own brothers and sisters. She is an ideal teacher. It is these qualities of head and heart that have endeared Miss Y to the students and teachers alike. She is an ideal teacher in real sense of the word. She is the real model to emulate. May she live as long as there is sweet fragrance in the flowers?'.split(' ');

function Word(props) {
  const { text, active, correct } = props;

  if (correct === true) {
    return <span className={styles.correct}>{text} </span>;
  }
  if (correct === false) {
    return <span className={styles.incorrect}>{text} </span>;
  }
  if (active) {
    return <span className={styles.active}>{text} </span>;
  }

  return <span>{text} </span>;
}
Word = React.memo(Word);

function Clock(props) {
  const { correctWords, startCounting, reset, clockTime, setTimeOver } = props;
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isTimeOver, setIsTimeOver] = useState(false);

  useEffect(() => {
    let id;
    if (startCounting && timeElapsed < clockTime) {
      id = setInterval(() => {
        setTimeElapsed((oldTime) => oldTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(id);
    };
  }, [startCounting, timeElapsed, clockTime]);

  useEffect(() => {
    if (reset) {
      setTimeElapsed(0);
      setIsTimeOver(false);
    }
  }, [reset]);

  useEffect(() => {
    if (timeElapsed >= clockTime) {
      setTimeOver(true);
    }
  }, [timeElapsed, clockTime, setTimeOver]);

  const minutes = clockTime / 60;

  return (
    <div className={styles.timer}>
      <p>
        <b>Time:</b> {timeElapsed} Sec.
      </p>
      <p>
        <b>Speed:</b> {((correctWords / minutes) || 0).toFixed(2)} WPM
      </p>
      {isTimeOver && <p>Time's up!</p>}
    </div>
  );
}

function Typing() {
  const [userInput, setUserInput] = useState('');
  const data = useRef(getData());

  const [startCounting, setStartCounting] = useState(false);
  const [reset, setReset] = useState(false);

  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctWordArray, setCorrectWordArray] = useState([]);

  const [clockTime, setClockTime] = useState(30);
  const [timeOver, setTimeOver] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const handleReset = () => {
    setReset(true);
    setUserInput('');
    setActiveWordIndex(0);
    setCorrectWordArray([]);
    setStartCounting(false);
    setTimeOver(false);
    setTimeElapsed(0);
    paragraph.current = getRandomParagraph(paragraphWordCount);
  };

  useEffect(() => {
    if (reset) {
      setTimeElapsed(0);
      setTimeOver(false);
      setReset(false);
    }
  }, [reset]);

  useEffect(() => {
    if (startCounting && timeElapsed >= clockTime) {
      setStartCounting(false);
      setUserInput('Completed');
      setTimeOver(true);
    }
  }, [startCounting, timeElapsed, clockTime]);

  function getRandomParagraph(wordCount) {
    const randomStartIndex = Math.floor(Math.random() * (data.current.length - wordCount));
    return data.current.slice(randomStartIndex, randomStartIndex + wordCount);
  }

  const paragraphWordCount = clockTime === 30 ? 100 : 150;
  const paragraph = useRef(getRandomParagraph(paragraphWordCount));

  function processInput(value) {
    if (activeWordIndex === paragraph.current.length || timeOver) {
      return;
    }

    if (!startCounting) {
      setStartCounting(true);
    }

    if (value.endsWith(' ')) {
      setActiveWordIndex((index) => index + 1);

      setCorrectWordArray((info) => {
        const word = value.trim();
        const newResult = [...info];
        newResult[activeWordIndex] = word === paragraph.current[activeWordIndex];
        return newResult;
      });

      setUserInput('');
    } else {
      setUserInput(value);
    }
  }

  const speed = (correctWordArray.filter(Boolean).length / (clockTime / 60)).toFixed(2);

  let tip = '';

  if (speed >= 10 && speed < 20) {
    tip = 'Great start! Focus on accuracy and try to improve your speed.';
  } else if (speed >= 20 && speed < 30) {
    tip = 'Good job! Work on maintaining a consistent pace and reducing errors.';
  } else if (speed >= 30 && speed < 40) {
    tip = 'Impressive speed! Keep practicing to enhance your accuracy and speed even more.';
  } else if (speed >= 40 && speed < 50) {
    tip = 'Excellent typing skills! Aim for perfection by minimizing mistakes and maintaining a high speed.';
  }

  return (
    <div className={styles.frame}>
      <h1>Typing Test</h1>
      <hr className={styles.hr} />
      <div>
        <label className={styles.setTime}>
          <input
            type="radio"
            value="30"
            checked={clockTime === 30}
            onChange={(e) => setClockTime(parseInt(e.target.value))}
          />
          30 Seconds
        </label>
        <label className={styles.setTime}>
          <input
            type="radio"
            value="60"
            checked={clockTime === 60}
            onChange={(e) => setClockTime(parseInt(e.target.value))}
          />
          1 Minute
        </label>
      </div>
      <Clock
        startCounting={startCounting}
        correctWords={correctWordArray.filter(Boolean).length}
        reset={reset}
        clockTime={clockTime}
        setTimeOver={setTimeOver}
      />
      <p className={styles.words}>
        {paragraph.current.map((word, index) => (
          <Word
            key={index}
            text={word}
            active={index === activeWordIndex}
            correct={correctWordArray[index]}
          />
        ))}
      </p>
      {!timeOver && (
        <input
          className={styles.input}
          placeholder="Start Typing...!"
          type="text"
          value={userInput}
          onChange={(e) => processInput(e.target.value)}
        />
      )}
      {timeOver && (
        <div>
          <p className={styles.timeUp}>Time's up! Click "Reset" to start again.</p>
          <p className={styles.timeUp1}><span className={styles.bulb}>💡</span>Tip: {tip}</p>
        </div>
      )}
      <Button className={styles.btn} onClick={handleReset} title={'Reset'}></Button>
    </div>
  );
}

export default Typing;
