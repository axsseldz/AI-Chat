'use client'
import styles from '../styles/chat.module.css';
import { useState } from 'react';

export default function Chat({ response }) {
  const [text, setText] = useState([])
  const [inputText, setInputText] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText) {
      setText([...text, inputText])
    }
    setInputText('')
  }


  return (
    <div className={styles.chat}>
      <header className={styles.chatHeader}>
        <div className={styles.botContainer}>
          <div className={styles.botImage}></div>
          <p className={styles.botName}>ChatBot</p>
        </div>
      </header>
      <div className={styles.chatText}>
        {text.map((word) => (
          <div className={styles.textBox} key={word} >
            {word}
          </div>
        ))}
        <div className={styles.textBoxAI}>
          {response}
        </div>
      </div>
      <footer className={styles.chatFooter}>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <input
            className={styles.inputBox}
            placeholder='Write a message here'
            value={inputText}
            type='input'
            onChange={e => setInputText(e.target.value)}
          />
          <button type='submit' className={styles.button}>
            Send
          </button>
        </form>
      </footer>
    </div>
  )
}

