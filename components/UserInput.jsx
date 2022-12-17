'use client'
import styles from '../styles/login.module.css';
import Image from 'next/image';
import Link from 'next/link';
import icon from '../public/images/star.png';
import { motion } from 'framer-motion';


export default function UserInput({
    message,
    route,
    question,
    routeName,
    pictureStyle,
    nameField,
    buttonName
}) {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginSection}>
                <div className={styles.tittle}>
                    <h1>AI Chat</h1>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, ease: 'linear', duration: 3 }}
                    >
                        <Image
                            alt='icon'
                            src={icon}
                            width={60}
                            height={50}
                        />
                    </motion.div>
                </div>
                <h3 className={styles.message}>{message}</h3>
                <div className={pictureStyle}></div>
                {nameField}
                <input
                    className={styles.inputField}
                    placeholder='Email'
                />
                <input
                    className={styles.inputField}
                    placeholder='Password'
                />
                <button className={styles.loginButton}>{buttonName}</button>
                <div className={styles.route}>
                    <p>{question}</p>
                    <Link
                        className={styles.path}
                        href={route}
                    >{routeName}</Link>
                </div>
            </div>
        </div >
    )
}
