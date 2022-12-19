'use client'
import LoginInput from "../components/LoginInput";
import { useState } from 'react';


export default function LogIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailField, setEmailField] = useState('')
  const [passwordField, setPasswordField] = useState('')

  return (
    <div>
      <LoginInput
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}

        emailField={emailField}
        setEmailField={setEmailField}
        passwordField={passwordField}
        setPasswordField={setPasswordField}
      />
    </div>
  )
}
