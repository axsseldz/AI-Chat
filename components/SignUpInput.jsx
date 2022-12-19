'use client'
import styles from '../styles/login.module.css';
import Image from 'next/image';
import Link from 'next/link';
import icon from '../public/images/star.png';
import { motion } from 'framer-motion';
import { SignupAPICall } from '../API/Signup';


export default function SignUpInput({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,

  nameField,
  setNameField,
  emailField,
  setEmailField,
  passwordField,
  setPasswordField
}) {

  const handleSubmit = async (e) => {
    e.preventDefault()
    setName(nameField)
    setEmail(emailField)
    setPassword(passwordField)

    setNameField('')
    setEmailField('')
    setPasswordField('')
  }

  if (name !== '' && email !== '' && password !== '') {
    const signUpData = SignupAPICall(name, email, password)
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
        <div className={styles.signupPicture}></div>
        <form
          className={styles.formField}
          onSubmit={(e) => handleSubmit(e)}>
          <input
            className={styles.inputField}
            placeholder='Name'
            value={nameField}
            type='input'
            onChange={e => setNameField(e.target.value)}
          />
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
          <button className={styles.loginButton} type='submit'>SIGN UP</button>
        </form>
        <div className={styles.route}>
          <p>Already have an account?</p>
          <Link
            className={styles.path}
            href='/'
          >
            Log in
          </Link>
        </div>
      </div>
    </div >
  )
}

