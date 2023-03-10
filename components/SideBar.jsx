'use client'
import styles from '../styles/sidebar.module.css';
import Link from 'next/link';

export default function SideBar() {
  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.sideBarHeader}>
        <div className={styles.sideBarPicture}></div>
        <h2 className={styles.greeting}>Welcome back Axel!</h2>
      </div>
      <div className={styles.chatBoxContainer}>
        <div className={styles.chatBox}>
          <Link href={'/chat/conversations'}>
            <div className={styles.botImage}></div>
          </Link>
          <p className={styles.botName}>ChatBot</p>
        </div>
      </div>
      <Link
        href={'/'}
        className={styles.logoutButtonContainer}
      >
        <button
          className={styles.logoutButton}
        >
          Log out
        </button>
      </Link>
    </div>
  )
}
