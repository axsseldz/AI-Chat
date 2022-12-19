'use client'
import styles from '../styles/login.module.css';
import Image from 'next/image';
import Link from 'next/link';
import icon from '../public/images/star.png';
import { motion } from 'framer-motion';
import { LogInAPICall } from '../API/Login';



export default function LoginInput({
  email,
  setEmail,
  password,
  setPassword,

  emailField,
  setEmailField,
  passwordField,
  setPasswordField
}) {

  const auth = true

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail(emailField)
    setPassword(passwordField)

    setEmailField('')
    setPasswordField('')
  }


  if (email !== '' && password !== '') {
    const loginData = LogInAPICall(email, password, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2EwYmUyNzk2ZDc5Y2Q2MTdiM2EwNTQiLCJuYW1lIjoianVseSIsImlhdCI6MTY3MTQ3ODgyMywiZXhwIjoxNjc0MDcwODIzfQ.cfjswu4d4ikL48MGTojc7qCEZzYQAVJrNElkdYBpqw8')
  }

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
        <h3 className={styles.message}>WELCOME BACK!!</h3>
        <div className={styles.loginPicture}></div>
        <form
          className={styles.formField}
          onSubmit={(e) => handleSubmit(e)}>
          <input
            className={styles.inputField}
            placeholder='Email'
            value={emailField}
            type='input'
            onChange={e => setEmailField(e.target.value)}
          />
          <input
            className={styles.inputField}
            placeholder='Password'
            value={passwordField}
            type='input'
            onChange={e => setPasswordField(e.target.value)}
          />
          <Link
            href={auth ? '/chat' : '/'}
            className={styles.loginButtonLink}
          >
            <button className={styles.loginButtonTwo} type='submit'>LOG IN</button>
          </Link>
        </form>
        <div className={styles.route}>
          <p>New here?</p>
          <Link
            className={styles.path}
            href={'/signup'}
          >Sign Up</Link>
        </div>
      </div>
    </div >
  )
}
