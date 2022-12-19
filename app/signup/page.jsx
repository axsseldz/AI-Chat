'use client'
import SignUpInput from '../../components/SignUpInput';
import { useState } from 'react';


export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [nameField, setNameField] = useState('')
  const [emailField, setEmailField] = useState('')
  const [passwordField, setPasswordField] = useState('')

  return (
    <div>
      <SignUpInput
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}

        nameField={nameField}
        setNameField={setNameField}
        emailField={emailField}
        setEmailField={setEmailField}
        passwordField={passwordField}
        setPasswordField={setPasswordField}
      />
    </div>
  )
}
