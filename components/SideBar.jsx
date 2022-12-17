'use client'
import styles from '../styles/sidebar.module.css';

export default function SideBar() {
  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.sideBarHeader}>
        <div className={styles.sideBarPicture}></div>
        <h2 className={styles.greeting}>Welcome back Axel!</h2>
      </div>
      <div className={styles.chatBoxContainer}>
        <div className={styles.chatBox}>
          <div className={styles.botImage}></div>
          <p className={styles.botName}>ChatBot</p>
        </div>
      </div>
    </div>
  )
}
